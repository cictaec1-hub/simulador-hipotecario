/**
 * Script pour le Simulateur Hypothécaire FA GRUP
 * Gère le calcul manuel de la Tasa, l'amortissement et la viabilité (35%)
 */

// --- 1. SÉLECTEURS D'ÉLÉMENTS ---

// Inputs de saisie
const amountInput = document.getElementById("amount");
const amountRangeInput = document.getElementById("amountRange");
const downPaymentAmountInput = document.getElementById("downPaymentAmount");
const downPaymentPercentInput = document.getElementById("downPaymentPercent");
const monthsInput = document.getElementById("months");
const tasaInput = document.getElementById("tin"); // Utilise l'ID 'tin' du HTML pour la Tasa
const fixedCostsInput = document.getElementById("fixedCosts");
const monthlyIncomeInput = document.getElementById("monthlyIncome");
const loanNeededInput = document.getElementById("loanNeeded");

// Affichage des résultats
const monthlyPaymentEl = document.getElementById("monthlyPayment");
const totalCostEl = document.getElementById("totalCost");
const interestTotalEl = document.getElementById("interestTotal");
const savingsTotalEl = document.getElementById("savingsTotal");
const monthsYearsEl = document.getElementById("monthsYears");

// Règle des 35%
const affordabilityStatusEl = document.getElementById("affordabilityStatus");
const affordabilityLabelEl = document.getElementById("affordabilityLabel");
const affordabilityValueEl = document.getElementById("affordabilityValue");

// Tableau d'amortissement
const scheduleBody = document.getElementById("scheduleBody");

// Boutons
const recalcButton = document.getElementById("recalc");
const resetButton = document.getElementById("reset");

// --- 2. FONCTIONS UTILITAIRES ---

// Formate les nombres en devise Euro
const formatCurrency = (value) =>
    new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);

// Calcule la mensualité selon la formule de l'amortissement français
const computeMonthlyPayment = (principal, monthlyRate, months) => {
    if (principal <= 0 || months <= 0) return 0;
    if (monthlyRate === 0) return principal / months;
    const factor = Math.pow(1 + monthlyRate, months);
    return (principal * monthlyRate * factor) / (factor - 1);
};

// Synchronise le montant de l'apport par rapport au pourcentage
const syncDownPaymentFromPercent = () => {
    const price = Number(amountInput.value) || 0;
    const percent = Number(downPaymentPercentInput.value) || 0;
    downPaymentAmountInput.value = ((percent / 100) * price).toFixed(2);
};

// Synchronise le pourcentage de l'apport par rapport au montant
const syncDownPaymentFromAmount = () => {
    const price = Number(amountInput.value);
    const amount = Number(downPaymentAmountInput.value);
    if (price > 0) {
        downPaymentPercentInput.value = ((amount / price) * 100).toFixed(1);
    } else {
        downPaymentPercentInput.value = 0;
    }
};

// --- 3. LOGIQUE PRINCIPALE ---

const update = () => {
    // Récupération des valeurs
    const amount = Number(amountInput.value) || 0;
    const downPaymentAmount = Number(downPaymentAmountInput.value) || 0;
    const months = Number(monthsInput.value) || 1;
    const tasa = Number(tasaInput.value) || 0;
    const fixedCosts = Number(fixedCostsInput.value) || 0;
    const monthlyIncome = Number(monthlyIncomeInput.value) || 0;

    // Calcul du capital emprunté
    const financedAmount = Math.max(0, amount - downPaymentAmount);
    loanNeededInput.value = financedAmount.toFixed(0);

    // Calcul de la mensualité
    const monthlyRate = (tasa / 100) / 12;
    const monthlyPayment = computeMonthlyPayment(financedAmount, monthlyRate, months);

    // Mise à jour de l'affichage principal
    monthlyPaymentEl.textContent = formatCurrency(monthlyPayment);
    totalCostEl.textContent = formatCurrency(monthlyPayment * months + fixedCosts);
    interestTotalEl.textContent = formatCurrency((monthlyPayment * months) - financedAmount);
    savingsTotalEl.textContent = formatCurrency(downPaymentAmount + fixedCosts);

    // Mise à jour de l'équivalent en années
    if (monthsYearsEl) {
        monthsYearsEl.textContent = (months / 12).toFixed(1);
    }

    // --- LOGIQUE RÈGLE 35% (COULEURS DYNAMIQUES) ---
    if (monthlyIncome > 0) {
        const ratio = (monthlyPayment / monthlyIncome) * 100;
        // Reset des couleurs
        affordabilityStatusEl.classList.remove("bg-success", "bg-danger", "text-white", "affordability-status-light", "affordability-status-bad");
        if (ratio <= 35) {
            // Vert doux : Accepté
            affordabilityStatusEl.classList.add("affordability-status-light");
            affordabilityLabelEl.textContent = `Aceptado (${ratio.toFixed(1)}% del ingreso)`;
        } else {
            // Rouge doux : Rechazado
            affordabilityStatusEl.classList.add("affordability-status-bad");
            affordabilityLabelEl.textContent = `Rechazado (${ratio.toFixed(1)}% del ingreso)`;
        }
        affordabilityValueEl.textContent = `${ratio.toFixed(1)}%`;
    } else {
        affordabilityStatusEl.classList.remove("bg-success", "bg-danger", "text-white");
        affordabilityLabelEl.textContent = "Pendiente de ingreso";
        affordabilityValueEl.textContent = "--";
    }

    // --- GÉNÉRATION DU TABLEAU D'AMORTISSEMENT ---
    renderTable(financedAmount, monthlyRate, monthlyPayment, months);
};

const renderTable = (financedAmount, monthlyRate, monthlyPayment, months) => {
    scheduleBody.innerHTML = "";
    let balance = financedAmount;

    // Sécurité : on limite l'affichage à 420 lignes max (35 ans)
    const totalRows = Math.min(months, 420);

    for (let i = 1; i <= totalRows; i++) {
        const interest = balance * monthlyRate;
        const principal = monthlyPayment - interest;
        balance = Math.max(0, balance - principal);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i}</td>
            <td>${formatCurrency(monthlyPayment)}</td>
            <td>${formatCurrency(interest)}</td>
            <td>${formatCurrency(principal)}</td>
            <td>${formatCurrency(balance)}</td>
        `;
        scheduleBody.appendChild(row);
    }
};

// --- 4. ÉCOUTEURS D'ÉVÉNEMENTS ---

// Inputs qui déclenchent une mise à jour immédiate
let isSyncing = false;
[amountInput, downPaymentAmountInput, downPaymentPercentInput, monthsInput, tasaInput, fixedCostsInput, monthlyIncomeInput].forEach(input => {
    input.addEventListener("input", (e) => {
        if (isSyncing) return;
        isSyncing = true;
        // Synchronisation bidirectionnelle sans boucle
        if (e.target === downPaymentAmountInput) {
            syncDownPaymentFromAmount();
        } else if (e.target === downPaymentPercentInput) {
            syncDownPaymentFromPercent();
        } else if (e.target === amountInput) {
            if (amountRangeInput) amountRangeInput.value = amountInput.value;
            syncDownPaymentFromAmount();
        }
        update();
        isSyncing = false;
    });
});

// Slider de prix
if (amountRangeInput) {
    amountRangeInput.addEventListener("input", () => {
        amountInput.value = amountRangeInput.value;
        syncDownPaymentFromAmount();
        update();
    });
}

// Bouton Recalculer
recalcButton.addEventListener("click", (e) => {
    e.preventDefault();
    update();
});

// Initialisation au chargement
window.addEventListener("DOMContentLoaded", () => {
    syncDownPaymentFromAmount();
    update();
});