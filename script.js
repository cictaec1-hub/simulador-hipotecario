

// --- CONFIGURATION ---
const DEFAULTS = {
    amount: 0,
    downPayment: 0,
    months: 1,   // mettre 1 pour éviter division par zéro
    tasa: 0,
    income: 0
};

// --- ELEMENTS ---
const amountInput = document.getElementById("amount");
const amountRange = document.getElementById("amountRange");
const downPaymentInput = document.getElementById("downPaymentAmount");
const downPaymentPercent = document.getElementById("downPaymentPercent");
const monthsInput = document.getElementById("months");
const tasaInput = document.getElementById("tin");
const incomeInput = document.getElementById("monthlyIncome");
const scheduleBody = document.getElementById("scheduleBody");

// --- LOGIQUE DE CALCUL ---

// Formatage pour EUR avec ou sans décimales
const formatEur = (val, noDecimals = false) => {
    return "EUR " + new Intl.NumberFormat("es-ES", {
        minimumFractionDigits: noDecimals ? 0 : 2,
        maximumFractionDigits: noDecimals ? 0 : 2
    }).format(val);
};

function update() {
    const price = parseFloat(amountInput.value) || 0;
    const down = parseFloat(downPaymentInput.value) || 0;
    const months = parseInt(monthsInput.value) || 1;
    const rate = parseFloat(tasaInput.value) || 0;
    const income = parseFloat(incomeInput.value) || 0;


    // Arrondi à l'entier le plus proche pour le prêt nécessaire
    const loanNeeded = Math.max(0, Math.round(price - down));
    const loanDisplay = document.getElementById("loanNeededDisplay");
    if(loanDisplay) loanDisplay.textContent = formatEur(loanNeeded, true);

    // Calcul de la mensualité (Formule française/espagnole standard)
    const i = (rate / 100) / 12;
    let monthly = 0;
    if (i === 0) {
        monthly = loanNeeded / months;
    } else {
        monthly = (loanNeeded * i * Math.pow(1 + i, months)) / (Math.pow(1 + i, months) - 1);
    }

    document.getElementById("monthlyPayment").textContent = formatEur(monthly);
    
    // Calculs additionnels pour la vue "Resultado Financiero"
    const totalCostValue = monthly * months;
    const interestTotalValue = totalCostValue - loanNeeded;
    
    if(document.getElementById("totalCost")) document.getElementById("totalCost").textContent = formatEur(totalCostValue);
    if(document.getElementById("interestTotal")) document.getElementById("interestTotal").textContent = formatEur(interestTotalValue);
    if(document.getElementById("savingsTotal")) document.getElementById("savingsTotal").textContent = formatEur(down + 1500); // Ajout frais fixes estimé

    // --- RATIO 35% (Gestion des styles personnalisés) ---
    const ratio = income > 0 ? (monthly / income) * 100 : 0;
    const statusBox = document.getElementById("affordabilityStatus");
    const valText = document.getElementById("affordabilityValue");
    const labelText = document.getElementById("affordabilityLabel");
    
    valText.textContent = ratio.toFixed(1) + "%";

    if (ratio <= 35) {
        statusBox.className = "ratio-box affordability-status-light"; // Ta classe CSS vert doux
        labelText.textContent = "Excelente";
    } else {
        statusBox.className = "ratio-box affordability-status-bad"; // Ta classe CSS rouge doux
        labelText.textContent = "Riesgo Elevado";
    }

    renderTable(loanNeeded, rate, monthly, months);
}

function renderTable(P, annualRate, M, n) {
    if (!scheduleBody) return;
    scheduleBody.innerHTML = "";
    let balance = P;
    const i = (annualRate / 100) / 12;

    for (let m = 1; m <= n; m++) {
        const intM = balance * i;
        const prinM = M - intM;
        balance = Math.max(0, balance - prinM);

        const row = `<tr>
            <td>${m}</td>
            <td class="amount">${formatEur(M)}</td>
            <td>${formatEur(intM)}</td>
            <td>${formatEur(prinM)}</td>
            <td class="balance">${formatEur(balance)}</td>
        </tr>`;
        
        scheduleBody.insertAdjacentHTML('beforeend', row);
        
        // Sécurité : on arrête si le solde est nul ou si on dépasse 35 ans
        if (balance <= 0.01 || m >= 420) break;
    }
}

// --- INITIALISATION & EVENTS ---
function reset() {
    // Réinitialisation des inputs
    amountInput.value = DEFAULTS.amount;
    amountRange.value = DEFAULTS.amount;

    downPaymentInput.value = DEFAULTS.downPayment;
    downPaymentPercent.value = ((DEFAULTS.downPayment / DEFAULTS.amount) * 100).toFixed(1);

    monthsInput.value = DEFAULTS.months;
    tasaInput.value = DEFAULTS.tasa;
    incomeInput.value = DEFAULTS.income;

    // Vider tableau
    if (scheduleBody) scheduleBody.innerHTML = "";

    // Réinitialiser affichages résultats
    document.getElementById("monthlyPayment").textContent = "EUR 0,00";
    document.getElementById("totalCost").textContent = "EUR 0,00";
    document.getElementById("interestTotal").textContent = "EUR 0,00";
    document.getElementById("savingsTotal").textContent = "EUR 0,00";
    document.getElementById("affordabilityValue").textContent = "--%";
    document.getElementById("affordabilityLabel").textContent = "Excelente";

    document.getElementById("affordabilityStatus").className =
        "ratio-box affordability-status-light";

    // Recalcul automatique
    update();
}

// --- INITIALISATION SÉCURISÉE & EVENTS ---
document.addEventListener("DOMContentLoaded", function () {

    // Sécurisation des events inputs
    [
        amountInput,
        amountRange,
        downPaymentInput,
        downPaymentPercent,
        monthsInput,
        tasaInput,
        incomeInput
    ].forEach(el => {
        if (!el) return;

        el.addEventListener("input", function (e) {
            const price = parseFloat(amountInput.value) || 0;

            if (e.target === amountInput) amountRange.value = e.target.value;
            if (e.target === amountRange) amountInput.value = e.target.value;

            // Sync Apport Amount -> Percent
            if (e.target === downPaymentInput && price > 0) {
                downPaymentPercent.value = (
                    (parseFloat(e.target.value) / price) * 100
                ).toFixed(1);
            }

            // Sync Apport Percent -> Amount
            if (e.target === downPaymentPercent && price > 0) {
                downPaymentInput.value = Math.round(
                    (parseFloat(e.target.value) / 100) * price
                );
            }

            update();
        });
    });

    // Sécurisation bouton reset
    const resetBtn = document.getElementById("reset");
    if (resetBtn) {
        resetBtn.addEventListener("click", function (e) {
            e.preventDefault();
            reset();
        });
    }

    // Reset automatique au chargement
    reset();
});
