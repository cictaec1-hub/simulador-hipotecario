// Texte pour 'años' selon la langue
const yearText = {
    es: "año",
    ca: "any",
    fr: "an"
};

function updateMonthsYears() {
    const monthsInput = document.getElementById("months");
    const monthsYears = document.getElementById("months-years");
    if (!monthsInput || !monthsYears) return;
    const lang = window.currentLang || "es";
    const months = parseInt(monthsInput.value) || 0;
    const years = Math.floor(months / 12);
    monthsYears.textContent = years + " " + yearText[lang];
}

// Mettre à jour aussi lors du changement de langue
function setLang(lang) {
    window.currentLang = lang;
    const t = translations[lang] || translations["es"];
    for (const key in t) {
        const el = document.getElementById(key);
        if (el) {
            if (key.endsWith("-title") || key.startsWith("profile")) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    }
    // Mettre à jour le texte du bouton langue
    const langText = { es: "ES", ca: "CA", fr: "FR" };
    const currentLangText = document.getElementById("current-lang-text");
    if (currentLangText) currentLangText.textContent = langText[lang] || "ES";
    // Traduction du bouton PDF
    const btnPdfLabel = document.getElementById("btn-pdf-label");
    const btnPdfTexts = {
        es: "Descargar el PDF del desglose",
        ca: "Descarregar el PDF del desglossament",
        fr: "Télécharger le PDF du tableau"
    };
    if (btnPdfLabel) btnPdfLabel.textContent = btnPdfTexts[lang] || btnPdfTexts["es"];
    updateMonthsYears();
}
// --- TRADUCTION ---
// Traduction du bouton PDF (hors setLang pour l'initialisation)
document.addEventListener("DOMContentLoaded", function () {
    const btnPdfLabel = document.getElementById("btn-pdf-label");
    const lang = document.documentElement.lang || "es";
    const btnPdfTexts = {
        es: "Descargar el PDF del desglose",
        ca: "Descarregar el PDF del desglossament",
        fr: "Télécharger le PDF du tableau"
    };
    if (btnPdfLabel) btnPdfLabel.textContent = btnPdfTexts[lang] || btnPdfTexts["es"];
});

const translations = {
    es: {
        tagline: "Simulador hipotecario Fa Grup",
        "main-title": "Calcula tu cuota mensual",
        "main-description": "Estima rápidamente la viabilidad de tu compra introduciendo los datos básicos de la operación.",
        "inputs-title": "Entradas principales",
        "label-amount": "Precio de la vivienda (EUR)",
        "label-downpayment": "Ahorros (Entrada)",
        "label-loanneeded": "Préstamo necesario",
        "label-months": "Plazo (meses)",
        "label-tin": "Tasa anual (%)",
        "label-purchasecosts": "Gastos de compra",
        "label-income": "Ingreso mensual neto",
        "result-title": "Resultado financiero",
        "label-monthlypayment": "Cuota mensual",
        "label-totalcost": "Coste total",
        "label-model": "modelo francés",
        "label-interesttotal": "Interés total",
        "amort-title": "Desglose mensual (Amortización)",
        "th-mes": "Mes",
        "th-cuota": "Cuota",
        "th-interes": "Interés",
        "th-capital": "Capital",
        "th-saldo": "Saldo",
        "ratio-title": "Ratio de Endeudamiento",
        "ratio-note": "La cuota no debe superar el 35% de los ingresos netos.",
        "profile1-title": "MENOS DE 35 AÑOS<br>Financiación hasta 95%–100% (Aval Instituto crédito oficial (ICO))",
        "profile1-li1": "🧾 Identidad y residencia",
        "profile1-li2": "DNI / NIE en vigor",
        "profile1-li3": "Certificado de empadronamiento (histórico de 2 años, requerido para aval ICO)",
        "profile1-li4": "📑 Requisitos específicos jóvenes",
        "profile1-li5": "Certificado de no titularidad de vivienda (Nota Simple Negativa del Registro)",
        "profile1-li6": "Declaración de patrimonio (activos inferiores a 100.000 €)",
        "profile1-li7": "💼 Ingresos y situación laboral",
        "profile1-li8": "3 últimas nóminas",
        "profile1-li9": "Contrato de trabajo (preferiblemente indefinido)",
        "profile1-li10": "Informe de Vida Laboral actualizado",
        "profile1-li11": "Última declaración de la renta (IRPF)",
        "profile1-li12": "🏠 Documentación del inmueble",
        "profile1-li13": "Nota Simple actualizada (menos de 3 meses)",
        "profile1-contact": "Contacta a tu banco",
        "profile2-title": "CRÉDITO HIPOTECARIO GENERAL<br>Financiación hasta 80% (Vivienda habitual)",
        "profile2-li1": "🧾 Identidad y solvencia",
        "profile2-li2": "DNI / NIE en vigor",
        "profile2-li3": "3 últimos extractos bancarios completos (todas las cuentas)",
        "profile2-li4": "Relación de préstamos y créditos vigentes (auto, consumo, tarjetas, etc.)",
        "profile2-li5": "💼 Ingresos y patrimonio",
        "profile2-li6": "3 últimas nóminas",
        "profile2-li7": "Contrato de trabajo",
        "profile2-li8": "Última declaración de la renta (IRPF)",
        "profile2-li9": "Justificante de fondos propios (20% del precio + aproximadamente 10% de gastos)",
        "profile2-li10": "👨‍💼 Si eres autónomo",
        "profile2-li11": "Declaraciones trimestrales y anuales de IVA e IRPF",
        "profile2-li12": "Certificado de estar al corriente con Hacienda",
        "profile2-li13": "Certificado de estar al corriente con la Seguridad Social",
        "profile2-li14": "🏠 Documentación del inmueble",
        "profile2-li15": "Nota Simple",
        "profile2-li16": "Certificado de eficiencia energética",
        "profile2-contact": "Contacta a tu banco"
    },
    ca: {
        tagline: "Simulador hipotecari Fa Grup",
        "main-title": "Calcula la teva quota mensual",
        "main-description": "Estima ràpidament la viabilitat de la teva compra introduint les dades bàsiques de l'operació.",
        "inputs-title": "Entrades principals",
        "label-amount": "Preu de l'habitatge (EUR)",
        "label-downpayment": "Estalvis (Entrada)",
        "label-loanneeded": "Préstec necessari",
        "label-months": "Termini (mesos)",
        "label-tin": "Taxa anual (%)",
        "label-purchasecosts": "Despeses de compra",
        "label-income": "Ingressos mensuals nets",
        "result-title": "Resultat financer",
        "label-monthlypayment": "Quota mensual",
        "label-totalcost": "Cost total",
        "label-model": "model francès",
        "label-interesttotal": "Interès total",
        "amort-title": "Desglossament mensual (Amortització)",
        "th-mes": "Mes",
        "th-cuota": "Quota",
        "th-interes": "Interès",
        "th-capital": "Capital",
        "th-saldo": "Saldo",
        "ratio-title": "Ràtio d'endeutament",
        "ratio-note": "La quota no ha de superar el 35% dels ingressos nets.",
        "profile1-title": "MENYS DE 35 ANYS<br>Finançament fins al 95%–100% (Aval Institut de Crèdit Oficial (ICO))",
        "profile1-li1": "🧾 Identitat i residència",
        "profile1-li2": "DNI / NIE vigent",
        "profile1-li3": "Certificat d'empadronament (històric de 2 anys, requerit per a aval ICO)",
        "profile1-li4": "📑 Requisits específics joves",
        "profile1-li5": "Certificat de no titularitat d'habitatge (Nota Simple Negativa del Registre)",
        "profile1-li6": "Declaració de patrimoni (actius inferiors a 100.000 €)",
        "profile1-li7": "💼 Ingressos i situació laboral",
        "profile1-li8": "3 últimes nòmines",
        "profile1-li9": "Contracte de treball (preferiblement indefinit)",
        "profile1-li10": "Informe de Vida Laboral actualitzat",
        "profile1-li11": "Última declaració de la renda (IRPF)",
        "profile1-li12": "🏠 Documentació de l'immoble",
        "profile1-li13": "Nota Simple actualitzada (menys de 3 mesos)",
        "profile1-contact": "Contacta amb el teu banc",
        "profile2-title": "CRÈDIT HIPOTECARI GENERAL<br>Finançament fins al 80% (Habitatge habitual)",
        "profile2-li1": "🧾 Identitat i solvència",
        "profile2-li2": "DNI / NIE vigent",
        "profile2-li3": "3 últims extractes bancaris complets (tots els comptes)",
        "profile2-li4": "Relació de préstecs i crèdits vigents (cotxe, consum, targetes, etc.)",
        "profile2-li5": "💼 Ingressos i patrimoni",
        "profile2-li6": "3 últimes nòmines",
        "profile2-li7": "Contracte de treball",
        "profile2-li8": "Última declaració de la renda (IRPF)",
        "profile2-li9": "Justificant de fons propis (20% del preu + aproximadament 10% de despeses)",
        "profile2-li10": "👨‍💼 Si ets autònom",
        "profile2-li11": "Declaracions trimestrals i anuals d'IVA i IRPF",
        "profile2-li12": "Certificat d'estar al corrent amb Hisenda",
        "profile2-li13": "Certificat d'estar al corrent amb la Seguretat Social",
        "profile2-li14": "🏠 Documentació de l'immoble",
        "profile2-li15": "Nota Simple",
        "profile2-li16": "Certificat d'eficiència energètica",
        "profile2-contact": "Contacta amb el teu banc"
    },
    fr: {
        tagline: "Simulateur hypothécaire Fa Grup",
        "main-title": "Calculez votre mensualité",
        "main-description": "Estimez rapidement la viabilité de votre achat en saisissant les données de base de l'opération.",
        "inputs-title": "Données principales",
        "label-amount": "Prix du logement (EUR)",
        "label-downpayment": "Épargne (Apport)",
        "label-loanneeded": "Prêt nécessaire",
        "label-months": "Durée (mois)",
        "label-tin": "Taux annuel (%)",
        "label-purchasecosts": "Frais d'achat",
        "label-income": "Revenu mensuel net",
        "result-title": "Résultat financier",
        "label-monthlypayment": "Mensualité",
        "label-totalcost": "Coût total",
        "label-model": "modèle français",
        "label-interesttotal": "Intérêts totaux",
        "amort-title": "Détail mensuel (Amortissement)",
        "th-mes": "Mois",
        "th-cuota": "Mensualité",
        "th-interes": "Intérêt",
        "th-capital": "Capital",
        "th-saldo": "Solde",
        "ratio-title": "Ratio d'endettement",
        "ratio-note": "La mensualité ne doit pas dépasser 35% des revenus nets.",
        "profile1-title": "MOINS DE 35 ANS<br>Financement jusqu'à 95%–100% (Garantie Institut de Crédit Officiel (ICO))",
        "profile1-li1": "🧾 Identité et résidence",
        "profile1-li2": "CNI / NIE en vigueur",
        "profile1-li3": "Certificat de résidence (historique de 2 ans, requis pour la garantie ICO)",
        "profile1-li4": "📑 Conditions spécifiques jeunes",
        "profile1-li5": "Certificat de non-propriété (Note Simple Négative du Registre)",
        "profile1-li6": "Déclaration de patrimoine (avoirs inférieurs à 100.000 €)",
        "profile1-li7": "💼 Revenus et situation professionnelle",
        "profile1-li8": "3 dernières fiches de paie",
        "profile1-li9": "Contrat de travail (de préférence CDI)",
        "profile1-li10": "Attestation de carrière à jour",
        "profile1-li11": "Dernière déclaration d'impôt (IRPF)",
        "profile1-li12": "🏠 Documents du bien immobilier",
        "profile1-li13": "Note Simple à jour (moins de 3 mois)",
        "profile1-contact": "Contactez votre banque",
        "profile2-title": "CRÉDIT HYPOTHÉCAIRE GÉNÉRAL<br>Financement jusqu'à 80% (Résidence principale)",
        "profile2-li1": "🧾 Identité et solvabilité",
        "profile2-li2": "CNI / NIE en vigueur",
        "profile2-li3": "3 derniers relevés bancaires complets (tous comptes)",
        "profile2-li4": "Liste des prêts et crédits en cours (auto, conso, cartes, etc.)",
        "profile2-li5": "💼 Revenus et patrimoine",
        "profile2-li6": "3 dernières fiches de paie",
        "profile2-li7": "Contrat de travail",
        "profile2-li8": "Dernière déclaration d'impôt (IRPF)",
        "profile2-li9": "Justificatif de fonds propres (20% du prix + environ 10% de frais)",
        "profile2-li10": "👨‍💼 Si vous êtes indépendant",
        "profile2-li11": "Déclarations trimestrielles et annuelles de TVA et IRPF",
        "profile2-li12": "Attestation d'être à jour avec le fisc",
        "profile2-li13": "Attestation d'être à jour avec la Sécurité Sociale",
        "profile2-li14": "🏠 Documents du bien immobilier",
        "profile2-li15": "Note Simple",
        "profile2-li16": "Certificat de performance énergétique",
        "profile2-contact": "Contactez votre banque"
    }
};

function setLang(lang) {
    window.currentLang = lang;
    const t = translations[lang] || translations["es"];
    for (const key in t) {
        const el = document.getElementById(key);
        if (el) {
            if (key.endsWith("-title") || key.startsWith("profile")) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    }
    // Mettre à jour le texte du bouton langue
    const langText = { es: "ES", ca: "CA", fr: "FR" };
    const currentLangText = document.getElementById("current-lang-text");
    if (currentLangText) currentLangText.textContent = langText[lang] || "ES";
}

document.addEventListener("DOMContentLoaded", function () {
    setLang("es");
    updateMonthsYears();
});


// --- CONFIGURATION ---
const DEFAULTS = {
    amount: "",
    downPayment: "",
    months: 1,
    tasa: "",
    income: ""
};

// --- ELEMENTS ---
const amountInput = document.getElementById("amount");
const amountRange = document.getElementById("amountRange");
const downPaymentInput = document.getElementById("downPaymentAmount");
const downPaymentPercent = document.getElementById("downPaymentPercent");
const purchaseCostsInput = document.getElementById("purchaseCosts");
const purchaseCostsPercent = document.getElementById("purchaseCostsPercent");
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
    const purchaseCosts = parseFloat(purchaseCostsInput?.value) || 0;
    const purchaseCostsPct = parseFloat(purchaseCostsPercent?.value) || 0;


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
    const statusBox = document.getElementById("affordabilityStatus");
    const valText = document.getElementById("affordabilityValue");
    const labelText = document.getElementById("affordabilityLabel");

    if (!income || income <= 0) {
        valText.textContent = "";
        labelText.textContent = "";
        statusBox.className = "ratio-box";
    } else {
        const ratio = (monthly / income) * 100;
        valText.textContent = ratio.toFixed(1) + "%";
        if (ratio <= 35) {
            statusBox.className = "ratio-box affordability-status-light";
            labelText.textContent = "";
        } else {
            statusBox.className = "ratio-box affordability-status-bad";
            labelText.textContent = "Riesgo Elevado";
        }
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
    document.getElementById("affordabilityLabel").textContent = "";

    document.getElementById("affordabilityStatus").className =
        "ratio-box affordability-status-light";

    // Recalcul automatique
    update();
}

// --- INITIALISATION SÉCURISÉE & EVENTS ---

// Sécurisation des events inputs

[
    amountInput,
    amountRange,
    downPaymentInput,
    downPaymentPercent,
    monthsInput,
    tasaInput,
    incomeInput,
    purchaseCostsInput,
    purchaseCostsPercent
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

        // Sync Purchase Costs Amount -> Percent
        if (e.target === purchaseCostsInput && price > 0) {
            purchaseCostsPercent.value = (
                (parseFloat(e.target.value) / price) * 100
            ).toFixed(2);
        }

        // Sync Purchase Costs Percent -> Amount
        if (e.target === purchaseCostsPercent && price > 0) {
            purchaseCostsInput.value = Math.round(
                (parseFloat(e.target.value) / 100) * price
            );
        }

        update();
        if (e.target === monthsInput) updateMonthsYears();
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

// --- PDF EXPORT ---
document.addEventListener("DOMContentLoaded", function () {
    const btnPdf = document.getElementById("btn-pdf");
    if (btnPdf) {
        btnPdf.addEventListener("click", function () {
            // Récupérer les données du tableau
            const table = document.querySelector("#scheduleBody");
            if (!table) return;
            const rows = Array.from(table.querySelectorAll("tr"));
            if (rows.length === 0) {
                alert("Aucune donnée à exporter.");
                return;
            }

            // Initialiser jsPDF (compatibilité universelle)
            let jsPDFref = window.jspdf && window.jspdf.jsPDF ? window.jspdf.jsPDF : (window.jsPDF ? window.jsPDF : null);
            if (!jsPDFref) {
                alert("jsPDF non chargé");
                return;
            }
            const doc = new jsPDFref();

            // Titres dynamiques selon la langue
            const lang = window.currentLang || "es";
            const titleMap = {
                es: "Desglose de amortización",
                ca: "Desglossament d'amortització",
                fr: "Tableau d'amortissement"
            };
            doc.setFontSize(16);
            doc.text(titleMap[lang] || titleMap["es"], 14, 18);
            doc.setFontSize(11);

            // En-têtes
            const headers = [
                document.getElementById("th-mes")?.textContent || "Mes",
                document.getElementById("th-cuota")?.textContent || "Cuota",
                document.getElementById("th-interes")?.textContent || "Interés",
                document.getElementById("th-capital")?.textContent || "Capital",
                document.getElementById("th-saldo")?.textContent || "Saldo"
            ];

            let y = 28;
            doc.setFont(undefined, 'bold');
            headers.forEach((h, i) => {
                doc.text(h, 14 + i * 38, y);
            });
            doc.setFont(undefined, 'normal');
            y += 8;

            // Lignes du tableau
            rows.forEach(row => {
                const cells = Array.from(row.querySelectorAll("td")).map(td => td.textContent.trim());
                cells.forEach((cell, i) => {
                    doc.text(cell, 14 + i * 38, y);
                });
                y += 8;
                if (y > 270) {
                    doc.addPage();
                    y = 18;
                }
            });

            // Nom du fichier selon la langue
            const fileMap = {
                es: "desglose-amortizacion.pdf",
                ca: "desglossament-amortitzacio.pdf",
                fr: "tableau-amortissement.pdf"
            };
            doc.save(fileMap[lang] || fileMap["es"]);
        });
    }
});