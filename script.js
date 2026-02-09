// --- TRADUCTION DYNAMIQUE ---
const translations = {
    es: {
        tagline: "Simulador hipotecario profesional",
        mainTitle: "Calcula tu cuota mensual",
        mainDesc: "Estima rápidamente la viabilidad de tu compra introduciendo los datos básicos de la operación.",
        inputsTitle: "Entradas principales",
        priceLabel: "Precio de la vivienda (EUR)",
        savingsLabel: "Tus ahorros (Entrada)",
        loanNeededLabel: "Préstamo necesario (EUR)",
        monthsLabel: "Plazo (meses) <small class=\"text-muted\">Años: <span id=\"monthsYears\">0</span></small>",
        rateLabel: "Tasa anual (%)",
        costsLabel: "Gastos de compra (EUR)",
        incomeLabel: "Ingreso mensual total (EUR)",
        recalcBtn: "Recalcular",
        resetBtn: "Restablecer"
    },
    fr: {
        tagline: "Simulateur hypothécaire professionnel",
        mainTitle: "Calculez votre mensualité",
        mainDesc: "Estimez rapidement la viabilité de votre achat en saisissant les données de base de l'opération.",
        inputsTitle: "Entrées principales",
        priceLabel: "Prix du bien (EUR)",
        savingsLabel: "Votre apport (Entrée)",
        loanNeededLabel: "Prêt nécessaire (EUR)",
        monthsLabel: "Durée (mois) <small class=\"text-muted\">Années: <span id=\"monthsYears\">0</span></small>",
        rateLabel: "Taux annuel (%)",
        costsLabel: "Frais d'achat (EUR)",
        incomeLabel: "Revenu mensuel total (EUR)",
        recalcBtn: "Recalculer",
        resetBtn: "Réinitialiser"
    },
    ca: {
        tagline: "Simulador hipotecari professional",
        mainTitle: "Calcula la teva quota mensual",
        mainDesc: "Estima ràpidament la viabilitat de la teva compra introduint les dades bàsiques de l'operació.",
        inputsTitle: "Entrades principals",
        priceLabel: "Preu de l'habitatge (EUR)",
        savingsLabel: "Els teus estalvis (Entrada)",
        loanNeededLabel: "Préstec necessari (EUR)",
        monthsLabel: "Termini (mesos) <small class=\"text-muted\">Anys: <span id=\"monthsYears\">0</span></small>",
        rateLabel: "Taxa anual (%)",
        costsLabel: "Despeses de compra (EUR)",
        incomeLabel: "Ingressos mensuals totals (EUR)",
        recalcBtn: "Recalcular",
        resetBtn: "Restablir"
    }
};

window.setLang = function(lang) {
    const dict = translations[lang] || translations['es'];
    document.documentElement.lang = lang;
    // Changer le drapeau et le texte du menu
    const flag = document.getElementById('current-flag');
    const langText = document.getElementById('current-lang-text');
    if (flag && langText) {
        if (lang === 'fr') { flag.src = 'images/flag_fr.png'; langText.textContent = 'FR'; }
        else if (lang === 'ca') { flag.src = 'images/flag_ca.png'; langText.textContent = 'CA'; }
        else { flag.src = 'images/flag_es.png'; langText.textContent = 'ES'; }
    }
    // Traduire tous les éléments avec data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (dict[key]) {
            if (key === 'monthsLabel') {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });
};
/**
 * Script pour le Simulateur Hypothécaire FA GRUP
 * Gère le calcul de la Mensualité, l'amortissement et la règle des 35%
 */

// --- 1. SÉLECTEURS D'ÉLÉMENTS ---
const amountInput = document.getElementById("amount");
const amountRangeInput = document.getElementById("amountRange");
const downPaymentAmountInput = document.getElementById("downPaymentAmount");
const downPaymentPercentInput = document.getElementById("downPaymentPercent");
const monthsInput = document.getElementById("months");
const tasaInput = document.getElementById("tin"); 
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

const scheduleBody = document.getElementById("scheduleBody");
const recalcButton = document.getElementById("recalc");
const resetButton = document.getElementById("reset");

// --- 2. FONCTIONS DE CALCUL ---

const formatCurrency = (value) =>
    new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
    }).format(value);

// FORMULE MATHÉMATIQUE : Amortissement Français
const computeMonthlyPayment = (P, annualRate, n) => {
    if (P <= 0 || n <= 0) return 0;
    const i = (annualRate / 100) / 12; // Taux mensuel décimal
    if (i === 0) return P / n;
    
    // M = P * [ i * (1 + i)^n ] / [ (1 + i)^n – 1 ]
    const factor = Math.pow(1 + i, n);
    return (P * i * factor) / (factor - 1);
};

// --- 3. LOGIQUE DE MISE À JOUR ---

const update = () => {
    const price = Number(amountInput.value) || 0;
    const downPayment = Number(downPaymentAmountInput.value) || 0;
    const totalMonths = Number(monthsInput.value) || 1;
    const annualTasa = Number(tasaInput.value) || 0;
    const costs = Number(fixedCostsInput.value) || 0;
    const income = Number(monthlyIncomeInput.value) || 0;

    // 1. Capital emprunté (Préstamo necesario)
    const financedAmount = Math.max(0, price - downPayment);
    loanNeededInput.value = financedAmount.toFixed(2);

    // 2. Calcul Mensualité
    const monthlyPayment = computeMonthlyPayment(financedAmount, annualTasa, totalMonths);

    // 3. Affichage résultats principaux
    monthlyPaymentEl.textContent = formatCurrency(monthlyPayment);
    const totalRepaid = monthlyPayment * totalMonths;
    totalCostEl.textContent = formatCurrency(totalRepaid + costs);
    interestTotalEl.textContent = formatCurrency(totalRepaid - financedAmount);
    savingsTotalEl.textContent = formatCurrency(downPayment + costs);

    if (monthsYearsEl) monthsYearsEl.textContent = (totalMonths / 12).toFixed(1);

    // 4. Règle des 35% (Viabilité)
    if (income > 0) {
        const ratio = (monthlyPayment / income) * 100;
        affordabilityStatusEl.className = "status p-3 rounded text-center " + (ratio <= 35 ? "bg-success text-white" : "bg-danger text-white");
        affordabilityLabelEl.textContent = ratio <= 35 ? "Viable (Ratio < 35%)" : "Riesgo Elevado (Ratio > 35%)";
        affordabilityValueEl.textContent = `${ratio.toFixed(1)}%`;
    }

    // 5. Tableau d'amortissement
    renderTable(financedAmount, annualTasa, monthlyPayment, totalMonths);
};

const renderTable = (P, annualRate, monthlyPayment, n) => {
    scheduleBody.innerHTML = "";
    let balance = P;
    const i = (annualRate / 100) / 12;

    for (let m = 1; m <= Math.min(n, 420); m++) {
        const interestM = balance * i; // Ta formule : Capital x Taux/12/100
        const principalM = monthlyPayment - interestM;
        balance = Math.max(0, balance - principalM);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${m}</td>
            <td>${formatCurrency(monthlyPayment)}</td>
            <td>${formatCurrency(interestM)}</td>
            <td>${formatCurrency(principalM)}</td>
            <td>${formatCurrency(balance)}</td>
        `;
        scheduleBody.appendChild(row);
        if (balance <= 0) break;
    }
};


// --- VALEURS PAR DÉFAUT ---
const defaults = {
    amount: 180000,
    downPayment: 20000,
    months: 300,
    tasa: 3.1,
    fixedCosts: 1500,
    income: 2600
};

// --- SYNCHRONISATION DES INPUTS ---
const syncInput = (e) => {
    if (e.target === amountInput || e.target === amountRangeInput) {
        amountInput.value = e.target.value;
        amountRangeInput.value = e.target.value;
        downPaymentAmountInput.value = (Number(amountInput.value) * (Number(downPaymentPercentInput.value)/100)).toFixed(0);
    }
    if (e.target === downPaymentAmountInput) {
        downPaymentPercentInput.value = ((Number(downPaymentAmountInput.value)/Number(amountInput.value))*100).toFixed(1);
    }
    if (e.target === downPaymentPercentInput) {
        downPaymentAmountInput.value = (Number(amountInput.value) * (Number(downPaymentPercentInput.value)/100)).toFixed(0);
    }
    update();
};

[
    amountInput, amountRangeInput, downPaymentAmountInput, downPaymentPercentInput,
    monthsInput, tasaInput, fixedCostsInput, monthlyIncomeInput
].forEach(el => el.addEventListener("input", syncInput));

// --- BOUTONS ---
if (recalcButton) {
    recalcButton.addEventListener("click", e => {
        e.preventDefault();
        update();
    });
}

if (resetButton) {
    resetButton.addEventListener("click", e => {
        e.preventDefault();
        amountInput.value = defaults.amount;
        amountRangeInput.value = defaults.amount;
        downPaymentAmountInput.value = defaults.downPayment;
        downPaymentPercentInput.value = ((defaults.downPayment / defaults.amount)*100).toFixed(1);
        monthsInput.value = defaults.months;
        tasaInput.value = defaults.tasa;
        fixedCostsInput.value = defaults.fixedCosts;
        monthlyIncomeInput.value = defaults.income;
        update();
    });
}
// --- INITIALISATION ---
update();

// Fonction pour tes onglets Documents
window.showDocs = function(type) {
    const joven = document.getElementById('joven');
    const standard = document.getElementById('standard');
    const btns = document.querySelectorAll('.tab-btn');
    if (type === 'joven') {
        joven.style.display = 'block';
        standard.style.display = 'none';
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    } else {
        joven.style.display = 'none';
        standard.style.display = 'block';
        btns[0].classList.remove('active');
        btns[1].classList.add('active');
    }
};