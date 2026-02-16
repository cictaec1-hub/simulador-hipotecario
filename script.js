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
    const years = (months / 12).toFixed(1);
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
    updateMonthsYears();
}
// --- TRADUCTION ---
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
        "profile2-contact": "Contacta a tu banco",
        // Disclaimer page
        "disclaimer-title": "Descargo de Responsabilidad",
        "disclaimer-text": "Este cálculo ha sido realizado sin ánimo de exhaustividad y con efectos meramente informativos a manera general, sin que el mismo suponga ningún tipo de asesoramiento o recomendación por parte de FaGrup.\n\nPara confirmar la información y su duda de manera correcta y adecuada, por favor acuda a fuentes de información oficiales o consulte con un profesional de su banco o empresa de financiación.\n\nFaGrup declina cualquier responsabilidad por la emisión del presente formulario.",
        // Footer links
        // PRIVACIDAD PAGE
        privacy_title: "Política de Privacidad",
        privacy_subtitle: "FA GRUP - Protección de Datos Personales",
        privacy_last_update: "Última actualización: 4 de febrero de 2026",
        privacy_section1_title: "1. Responsable del Tratamiento",
        privacy_responsable: "FA GRUP, con domicilio en Avenida Josep Tarradellas 134 bajos, 08029 Barcelona, España, es el responsable del tratamiento de los datos personales que nos proporcione.",
        privacy_contact_label: "Contacto:",
        privacy_contact_info: "Email: fagrupinmobiliaria@gmail.com<br>Teléfono: +34 635 871 358",
        privacy_section2_title: "2. Datos que Recopilamos",
        privacy_section3_title: "3. Finalidad del Tratamiento",
        privacy_section4_title: "4. Base Jurídica del Tratamiento",
        privacy_section5_title: "5. Destinatarios de los Datos",
        privacy_section6_title: "6. Conservación de los Datos",
        privacy_section7_title: "7. Derechos del Usuario",
        privacy_section8_title: "8. Seguridad de los Datos",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modificaciones",
        privacy_section11_title: "11. Reclamaciones",
        privacy_section12_title: "12. Contacto",
        "footer-disclaimer": "Descargo de responsabilidad",
        "footer-cookies": "Política de cookies",
        "footer-privacy": "Privacidad",
        "footer-about": "Sobre nosotros",
        "footer-back": "Volver al simulador"
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
        "profile2-contact": "Contacta amb el teu banc",
        // Disclaimer page
        "disclaimer-title": "Avís legal",
        "disclaimer-text": "Aquest càlcul s'ha realitzat sense ànim d'exhaustivitat i amb efectes merament informatius de manera general, sense que això suposi cap tipus d'assessorament o recomanació per part de FaGrup.\n\nPer confirmar la informació i el seu dubte de manera correcta i adequada, si us plau acudeixi a fonts d'informació oficials o consulti amb un professional del seu banc o empresa de finançament.\n\nFaGrup declina qualsevol responsabilitat per l'emissió del present formulari.",
        // Footer links
        // PRIVACIDAD PAGE
        privacy_title: "Política de Privacitat",
        privacy_subtitle: "FA GRUP - Protecció de Dades Personals",
        privacy_last_update: "Darrera actualització: 4 de febrer de 2026",
        privacy_section1_title: "1. Responsable del Tractament",
        privacy_responsable: "FA GRUP, amb domicili a l'Avinguda Josep Tarradellas 134 baixos, 08029 Barcelona, Espanya, és el responsable del tractament de les dades personals que ens proporcioni.",
        privacy_contact_label: "Contacte:",
        privacy_contact_info: "Email: fagrupinmobiliaria@gmail.com<br>Telèfon: +34 635 871 358",
        privacy_section2_title: "2. Dades que Recollim",
        privacy_section3_title: "3. Finalitat del Tractament",
        privacy_section4_title: "4. Base Jurídica del Tractament",
        privacy_section5_title: "5. Destinataris de les Dades",
        privacy_section6_title: "6. Conservació de les Dades",
        privacy_section7_title: "7. Drets de l'Usuari",
        privacy_section8_title: "8. Seguretat de les Dades",
        privacy_section9_title: "9. Galetes",
        privacy_section10_title: "10. Modificacions",
        privacy_section11_title: "11. Reclamacions",
        privacy_section12_title: "12. Contacte",
        "footer-disclaimer": "Avís legal",
        "footer-cookies": "Política de galetes",
        "footer-privacy": "Privacitat",
        "footer-about": "Sobre nosaltres",
        "footer-back": "Tornar al simulador"
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
        "profile2-contact": "Contactez votre banque",
        // Disclaimer page
        "disclaimer-title": "Avertissement",
        "disclaimer-text": "Ce calcul a été réalisé sans exhaustivité et à titre purement informatif de manière générale, sans que cela ne constitue un quelconque conseil ou recommandation de la part de FaGrup.\n\nPour confirmer l'information et votre question de manière correcte et appropriée, veuillez consulter des sources officielles ou demander conseil à un professionnel de votre banque ou société de financement.\n\nFaGrup décline toute responsabilité quant à l'émission du présent formulaire.",
        // Footer links
        // PRIVACIDAD PAGE
        privacy_title: "Politique de Confidentialité",
        privacy_subtitle: "FA GRUP - Protection des Données Personnelles",
        privacy_last_update: "Dernière mise à jour : 4 février 2026",
        privacy_section1_title: "1. Responsable du Traitement",
        privacy_responsable: "FA GRUP, domicilié Avenida Josep Tarradellas 134 bajos, 08029 Barcelone, Espagne, est responsable du traitement des données personnelles que vous nous fournissez.",
        privacy_contact_label: "Contact :",
        privacy_contact_info: "Email : fagrupinmobiliaria@gmail.com<br>Téléphone : +34 635 871 358",
        privacy_section2_title: "2. Données que nous collectons",
        privacy_section3_title: "3. Finalité du Traitement",
        privacy_section4_title: "4. Base Juridique du Traitement",
        privacy_section5_title: "5. Destinataires des Données",
        privacy_section6_title: "6. Conservation des Données",
        privacy_section7_title: "7. Droits de l'Utilisateur",
        privacy_section8_title: "8. Sécurité des Données",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modifications",
        privacy_section11_title: "11. Réclamations",
        privacy_section12_title: "12. Contact",
        "footer-disclaimer": "Avertissement",
        "footer-cookies": "Politique de cookies",
        "footer-privacy": "Confidentialité",
        "footer-about": "À propos de nous",
        "footer-back": "Retour au simulateur"
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

// --- ELEMENTS FACTORISÉS ---
const els = [
    "amount",
    "amountRange",
    "downPaymentAmount",
    "downPaymentPercent",
    "purchaseCosts",
    "purchaseCostsPercent",
    "months",
    "tin",
    "monthlyIncome",
    "scheduleBody",
    "loanNeededDisplay",
    "monthlyPayment",
    "totalCost",
    "interestTotal",
    "savingsTotal",
    "affordabilityStatus",
    "affordabilityValue",
    "affordabilityLabel",
    "reset"
].reduce((acc, id) => {
    acc[id] = document.getElementById(id);
    return acc;
}, {});

// --- LOGIQUE DE CALCUL ---

// Formatage pour EUR avec ou sans décimales
const formatEur = (val, noDecimals = false) => {
    return "EUR " + new Intl.NumberFormat("es-ES", {
        minimumFractionDigits: noDecimals ? 0 : 2,
        maximumFractionDigits: noDecimals ? 0 : 2
    }).format(val);
};

function update() {
    const price = parseFloat(els.amount.value) || 0;
    const down = parseFloat(els.downPaymentAmount.value) || 0;
    const months = parseInt(els.months.value) || 1;
    const rate = parseFloat(els.tin.value) || 0;
    const income = parseFloat(els.monthlyIncome.value) || 0;
    const purchaseCosts = parseFloat(els.purchaseCosts?.value) || 0;
    const purchaseCostsPct = parseFloat(els.purchaseCostsPercent?.value) || 0;

    // Arrondi à l'entier le plus proche pour le prêt nécessaire
    const loanNeeded = Math.max(0, Math.round(price - down));
    if(els.loanNeededDisplay) els.loanNeededDisplay.textContent = formatEur(loanNeeded, true);

    // Calcul de la mensualité (Formule française/espagnole standard)
    const i = (rate / 100) / 12;
    const monthly = i === 0 ? loanNeeded / months : (loanNeeded * i * Math.pow(1 + i, months)) / (Math.pow(1 + i, months) - 1);

    if(els.monthlyPayment) els.monthlyPayment.textContent = formatEur(monthly);

    // Calculs additionnels pour la vue "Resultado Financiero"
    const totalCostValue = monthly * months;
    const interestTotalValue = totalCostValue - loanNeeded;

    if(els.totalCost) els.totalCost.textContent = formatEur(totalCostValue);
    if(els.interestTotal) els.interestTotal.textContent = formatEur(interestTotalValue);
    if(els.savingsTotal) els.savingsTotal.textContent = formatEur(down + 1500); // Ajout frais fixes estimé

    // --- RATIO 35% (Gestion des styles personnalisés) ---
    const ratio = income > 0 ? (monthly / income) * 100 : 0;
    if(els.affordabilityValue) els.affordabilityValue.textContent = ratio.toFixed(1) + "%";
    if(els.affordabilityStatus && els.affordabilityLabel) {
        const isGood = ratio <= 35;
        els.affordabilityStatus.className = isGood ? "ratio-box affordability-status-light" : "ratio-box affordability-status-bad";
        els.affordabilityLabel.textContent = isGood ? "Excelente" : "Riesgo Elevado";
    }

    renderTable(loanNeeded, rate, monthly, months);
}

function renderTable(P, annualRate, M, n) {
    if (!els.scheduleBody) return;
    els.scheduleBody.innerHTML = "";
    let balance = P;
    const i = (annualRate / 100) / 12;
    for (let m = 1; m <= n && balance > 0.01 && m <= 420; m++) {
        const intM = balance * i;
        const prinM = M - intM;
        balance = Math.max(0, balance - prinM);
        els.scheduleBody.insertAdjacentHTML('beforeend', `<tr>
            <td>${m}</td>
            <td class="amount">${formatEur(M)}</td>
            <td>${formatEur(intM)}</td>
            <td>${formatEur(prinM)}</td>
            <td class="balance">${formatEur(balance)}</td>
        </tr>`);
    }
}

// --- INITIALISATION & EVENTS ---
function reset() {
    // Réinitialisation des inputs
    els.amount.value = DEFAULTS.amount;
    els.amountRange.value = DEFAULTS.amount;
    els.downPaymentAmount.value = DEFAULTS.downPayment;
    els.downPaymentPercent.value = ((DEFAULTS.downPayment / DEFAULTS.amount) * 100).toFixed(1);
    els.months.value = DEFAULTS.months;
    els.tin.value = DEFAULTS.tasa;
    els.monthlyIncome.value = DEFAULTS.income;
    if (els.scheduleBody) els.scheduleBody.innerHTML = "";
    ["monthlyPayment", "totalCost", "interestTotal", "savingsTotal"].forEach(id => {
        if (els[id]) els[id].textContent = "EUR 0,00";
    });
    if (els.affordabilityValue) els.affordabilityValue.textContent = "--%";
    if (els.affordabilityLabel) els.affordabilityLabel.textContent = "Excelente";
    if (els.affordabilityStatus) els.affordabilityStatus.className = "ratio-box affordability-status-light";
    update();
}

// --- INITIALISATION SÉCURISÉE & EVENTS ---

// Sécurisation des events inputs


// --- EVENTS FACTORISÉS ---
[
    "amount",
    "amountRange",
    "downPaymentAmount",
    "downPaymentPercent",
    "months",
    "tin",
    "monthlyIncome",
    "purchaseCosts",
    "purchaseCostsPercent"
].forEach(id => {
    const el = els[id];
    if (!el) return;
    el.addEventListener("input", function (e) {
        const price = parseFloat(els.amount.value) || 0;
        if (e.target === els.amount) els.amountRange.value = e.target.value;
        if (e.target === els.amountRange) els.amount.value = e.target.value;
        // Sync Apport Amount <-> Percent
        if ([els.downPaymentAmount, els.downPaymentPercent].includes(e.target) && price > 0) {
            if (e.target === els.downPaymentAmount) {
                els.downPaymentPercent.value = ((parseFloat(e.target.value) / price) * 100).toFixed(1);
            } else {
                els.downPaymentAmount.value = Math.round((parseFloat(e.target.value) / 100) * price);
            }
        }
        // Sync Purchase Costs <-> Percent
        if ([els.purchaseCosts, els.purchaseCostsPercent].includes(e.target) && price > 0) {
            if (e.target === els.purchaseCosts) {
                els.purchaseCostsPercent.value = ((parseFloat(e.target.value) / price) * 100).toFixed(2);
            } else {
                els.purchaseCosts.value = Math.round((parseFloat(e.target.value) / 100) * price);
            }
        }
        update();
        if (e.target === els.months) updateMonthsYears();
    });
});

// Sécurisation bouton reset
if (els.reset) {
    els.reset.addEventListener("click", function (e) {
        e.preventDefault();
        reset();
    });
}

// Reset automatique au chargement
reset();
