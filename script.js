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
    // Parcourt tous les éléments avec data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
    // Mise à jour du sélecteur de langue
    const langText = { es: "ES", ca: "CA", fr: "FR" };
    const currentLangBtn = document.getElementById("current-lang-text");
    if (currentLangBtn) currentLangBtn.textContent = langText[lang] || "ES";
    updateMonthsYears();
}
// --- TRADUCTION ---
const translations = {
    es: {
        privacy_collect_intro: "FA GRUP puede recopilar los siguientes tipos de datos personales:",
        privacy_collect_id: "<strong>Datos de identificación:</strong> Nombre, apellidos, DNI/NIE",
        privacy_collect_contact: "<strong>Datos de contacto:</strong> Dirección de correo electrónico, número de teléfono, dirección postal",
        privacy_collect_nav: "<strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas",
        privacy_collect_service: "<strong>Datos relacionados con servicios:</strong> Información sobre propiedades de interés, preferencias de búsqueda",
        privacy_purpose_intro: "Los datos personales recopilados serán tratados para las siguientes finalidades:",
        privacy_purpose1: "Gestión de consultas y solicitudes de información",
        privacy_purpose2: "Prestación de servicios inmobiliarios, seguros y viajes",
        privacy_purpose3: "Envío de comunicaciones comerciales sobre nuestros servicios (con su consentimiento previo)",
        privacy_purpose4: "Cumplimiento de obligaciones legales y contractuales",
        privacy_purpose5: "Mejora de nuestros servicios y experiencia del usuario",
        privacy_legal_intro: "El tratamiento de sus datos personales se basa en:",
        privacy_legal1: "<strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales",
        privacy_legal2: "<strong>Ejecución de contrato:</strong> Para la prestación de servicios solicitados",
        privacy_legal3: "<strong>Interés legítimo:</strong> Para la gestión y mejora de nuestros servicios",
        privacy_legal4: "<strong>Obligación legal:</strong> Para cumplir con normativas aplicables",
        privacy_recipients_intro: "Sus datos personales podrán ser comunicados a:",
        privacy_recipients1: "Empresas asociadas del grupo FA GRUP para la prestación de servicios",
        privacy_recipients2: "Proveedores de servicios tecnológicos y de almacenamiento",
        privacy_recipients3: "Administraciones públicas cuando sea legalmente requerido",
        privacy_recipients4: "Entidades financieras para la gestión de pagos",
        privacy_recipients5: "No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo.",
        privacy_storage1: "Los datos personales se conservarán durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos y, posteriormente, durante los plazos de prescripción legal aplicables.",
        privacy_storage2: "En caso de no existir obligación legal, los datos se conservarán mientras no solicite su supresión y siempre que exista una base legítima para su tratamiento.",
        privacy_rights_intro: "Como titular de los datos personales, usted tiene derecho a:",
        privacy_rights1: "<strong>Acceso:</strong> Conocer qué datos tratamos sobre usted",
        privacy_rights2: "<strong>Rectificación:</strong> Solicitar la corrección de datos inexactos",
        privacy_rights3: "<strong>Supresión:</strong> Solicitar la eliminación de sus datos",
        privacy_rights4: "<strong>Oposición:</strong> Oponerse al tratamiento de sus datos",
        privacy_rights5: "<strong>Limitación:</strong> Solicitar la limitación del tratamiento",
        privacy_rights6: "<strong>Portabilidad:</strong> Recibir sus datos en formato estructurado",
        privacy_rights7: "<strong>Revocación del consentimiento:</strong> Retirar el consentimiento en cualquier momento",
        privacy_rights_contact: "Para ejercer estos derechos, puede contactarnos a través de:",
        privacy_rights_contactinfo: "Email: fagrupinmobiliaria@gmail.com<br>Dirección postal: Avenida Josep Tarradellas 134 bajos, 08029 Barcelona",
        privacy_security: "FA GRUP ha implementado medidas técnicas y organizativas apropiadas para garantizar la seguridad de sus datos personales y protegerlos contra accesos no autorizados, pérdida, destrucción o alteración.",
        privacy_cookies: "Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Para más información, consulte nuestra Política de Cookies.",
        privacy_modifications: "FA GRUP se reserva el derecho de modificar esta Política de Privacidad para adaptarla a cambios legislativos o de nuestros servicios. Le recomendamos revisar periódicamente esta página.",
        privacy_claims: "Si considera que el tratamiento de sus datos personales no cumple con la normativa, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        privacy_contact_final: "Para cualquier consulta sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales, puede contactarnos:",
        privacy_contact_finalinfo: "<strong>Email:</strong> fagrupinmobiliaria@gmail.com<br><strong>Teléfono:</strong> +34 635 871 358<br><strong>Dirección:</strong> Avenida Josep Tarradellas 134 bajos, 08029 Barcelona, España",
        // --- SOBRE NOSOTROS ---
        "about-hero-title": "Sobre Nosotros",
        "about-hero-subtitle": "Conoce quiénes somos y qué nos diferencia",
        "about-who-title": "Quiénes Somos",
        "about-who-p1": "FA GRUP es una inmobiliaria ubicada en Barcelona, fundada el 11 de diciembre de 2019. Nos especializamos en ofrecer un servicio integral en el sector inmobiliario, acompañando al cliente en todo el proceso de compra, venta o alquiler de inmuebles con profesionalidad y cercanía.",
        "about-who-p2": "Contamos con un equipo formado por profesionales con amplio conocimiento del mercado inmobiliario local en Barcelona. Analizamos cada caso de forma individual para ofrecer servicios adaptados a las necesidades reales de cada cliente, asegurando una atención cercana, responsable y totalmente personalizada.",
        "about-who-p3": "<strong>Misión:</strong> Acompañar a cada cliente de manera profesional y cercana, garantizando seguridad, transparencia y eficiencia en todas las operaciones inmobiliarias.",
        "about-who-p4": "<strong>Visión:</strong> Convertirse en la inmobiliaria de referencia en Barcelona, reconocida por su cercanía, confianza y excelencia en el servicio integral al cliente.",
        "about-who-p5": "Desde nuestra fundación en 2019, hemos acompañado a cientos de clientes, transformando un trámite complejo en una experiencia confiable y segura.",
        "about-values-title": "Nuestros Valores",
        "about-value1-title": "Profesionalidad",
        "about-value1-p": "Servicios de máxima calidad respaldados por experiencia y conocimiento profundo del mercado inmobiliario de Barcelona.",
        "about-value2-title": "Cercanía",
        "about-value2-p": "Atención personalizada y trato humano en cada etapa del proceso inmobiliario, construyendo relaciones de confianza.",
        "about-value3-title": "Transparencia",
        "about-value3-p": "Comunicación clara y honesta en todas las operaciones, garantizando seguridad en cada transacción.",
        "about-value4-title": "Compromiso con el Cliente",
        "about-value4-p": "Acompañamiento integral durante todo el proceso de compra, venta o alquiler de tu inmueble.",
        "about-why-title": "Por Qué Elegirnos",
        "about-why-p1": "<strong>Soluciones Integrales:</strong> Ofrecemos servicios completos en asesoría empresarial, inmobiliaria, seguros y viajes desde una única empresa.",
        "about-why-p2": "<strong>Atención Personalizada:</strong> Cada cliente recibe un trato individualizado adaptado a sus necesidades específicas.",
        "about-why-p3": "<strong>Equipo Multidisciplinar:</strong> Profesionales especializados en diferentes áreas trabajando de forma coordinada.",
        "about-why-p4": "<strong>Experiencia Contrastada:</strong> Años de trayectoria respaldando empresas y particulares en sus proyectos.",
        "about-why-p5": "<strong>Compromiso con la Excelencia:</strong> Mejora continua y actualización constante de conocimientos y procedimientos.",
        "about-method-title": "Nuestra Metodología",
        "about-method-step1-title": "Análisis Individual",
        "about-method-step1-p": "Estudiamos tu caso de forma personalizada para entender tus necesidades y objetivos.",
        "about-method-step2-title": "Planes Adaptados",
        "about-method-step2-p": "Diseñamos estrategias y soluciones específicas para tu situación particular.",
        "about-method-step3-title": "Acompañamiento",
        "about-method-step3-p": "Te guiamos durante todo el proceso con seguimiento continuo y soporte profesional.",
        "about-method-step4-title": "Resultados",
        "about-method-step4-p": "Evaluamos los resultados y ajustamos estrategias para garantizar el éxito de tu proyecto.",
        "about-method-cta": "Conoce nuestros servicios",
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
        privacy_collect_intro: "FA GRUP pot recollir els següents tipus de dades personals:",
        privacy_collect_id: "<strong>Dades d'identificació:</strong> Nom, cognoms, DNI/NIE",
        privacy_collect_contact: "<strong>Dades de contacte:</strong> Adreça de correu electrònic, número de telèfon, adreça postal",
        privacy_collect_nav: "<strong>Dades de navegació:</strong> Adreça IP, tipus de navegador, pàgines visitades",
        privacy_collect_service: "<strong>Dades relacionades amb serveis:</strong> Informació sobre propietats d'interès, preferències de cerca",
        privacy_purpose_intro: "Les dades personals recollides seran tractades per a les següents finalitats:",
        privacy_purpose1: "Gestió de consultes i sol·licituds d'informació",
        privacy_purpose2: "Prestació de serveis immobiliaris, assegurances i viatges",
        privacy_purpose3: "Enviament de comunicacions comercials sobre els nostres serveis (amb el seu consentiment previ)",
        privacy_purpose4: "Compliment d'obligacions legals i contractuals",
        privacy_purpose5: "Millora dels nostres serveis i experiència de l'usuari",
        privacy_legal_intro: "El tractament de les seves dades personals es basa en:",
        privacy_legal1: "<strong>Consentiment:</strong> Per a l'enviament de comunicacions comercials",
        privacy_legal2: "<strong>Execució de contracte:</strong> Per a la prestació de serveis sol·licitats",
        privacy_legal3: "<strong>Interès legítim:</strong> Per a la gestió i millora dels nostres serveis",
        privacy_legal4: "<strong>Obligació legal:</strong> Per complir amb normatives aplicables",
        privacy_recipients_intro: "Les seves dades personals podran ser comunicades a:",
        privacy_recipients1: "Empreses associades del grup FA GRUP per a la prestació de serveis",
        privacy_recipients2: "Proveïdors de serveis tecnològics i d'emmagatzematge",
        privacy_recipients3: "Administracions públiques quan sigui legalment requerit",
        privacy_recipients4: "Entitats financeres per a la gestió de pagaments",
        privacy_recipients5: "No realitzem transferències internacionals de dades fora de l'Espai Econòmic Europeu.",
        privacy_storage1: "Les dades personals es conservaran durant el temps necessari per complir amb les finalitats per a les quals van ser recollides i, posteriorment, durant els terminis de prescripció legal aplicables.",
        privacy_storage2: "En cas de no existir obligació legal, les dades es conservaran mentre no en sol·liciti la supressió i sempre que existeixi una base legítima per al seu tractament.",
        privacy_rights_intro: "Com a titular de les dades personals, vostè té dret a:",
        privacy_rights1: "<strong>Accés:</strong> Conèixer quines dades tractem sobre vostè",
        privacy_rights2: "<strong>Rectificació:</strong> Sol·licitar la correcció de dades inexactes",
        privacy_rights3: "<strong>Supressió:</strong> Sol·licitar l'eliminació de les seves dades",
        privacy_rights4: "<strong>Oposició:</strong> Oposar-se al tractament de les seves dades",
        privacy_rights5: "<strong>Limitació:</strong> Sol·licitar la limitació del tractament",
        privacy_rights6: "<strong>Portabilitat:</strong> Rebre les seves dades en format estructurat",
        privacy_rights7: "<strong>Revocació del consentiment:</strong> Retirar el consentiment en qualsevol moment",
        privacy_rights_contact: "Per exercir aquests drets, pot contactar-nos a través de:",
        privacy_rights_contactinfo: "Email: fagrupinmobiliaria@gmail.com<br>Adreça postal: Avinguda Josep Tarradellas 134 baixos, 08029 Barcelona",
        privacy_security: "FA GRUP ha implementat mesures tècniques i organitzatives apropiades per garantir la seguretat de les seves dades personals i protegir-les contra accessos no autoritzats, pèrdua, destrucció o alteració.",
        privacy_cookies: "El nostre lloc web utilitza galetes per millorar l'experiència de l'usuari. Per a més informació, consulti la nostra Política de Galetes.",
        privacy_modifications: "FA GRUP es reserva el dret de modificar aquesta Política de Privacitat per adaptar-la a canvis legislatius o dels nostres serveis. Li recomanem revisar periòdicament aquesta pàgina.",
        privacy_claims: "Si considera que el tractament de les seves dades personals no compleix amb la normativa, té dret a presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).",
        privacy_contact_final: "Per a qualsevol consulta sobre aquesta Política de Privacitat o sobre el tractament de les seves dades personals, pot contactar-nos:",
        privacy_contact_finalinfo: "<strong>Email:</strong> fagrupinmobiliaria@gmail.com<br><strong>Telèfon:</strong> +34 635 871 358<br><strong>Adreça:</strong> Avinguda Josep Tarradellas 134 baixos, 08029 Barcelona, Espanya",
        // --- SOBRE NOSALTRES ---
        "about-hero-title": "Sobre Nosaltres",
        "about-hero-subtitle": "Descobreix qui som i què ens diferencia",
        "about-who-title": "Qui som",
        "about-who-p1": "FA GRUP és una immobiliària situada a Barcelona, fundada l’11 de desembre de 2019. Ens especialitzem en oferir un servei integral en el sector immobiliari, acompanyant el client en tot el procés de compra, venda o lloguer d’immobles amb professionalitat i proximitat.",
        "about-who-p2": "Comptem amb un equip format per professionals amb un ampli coneixement del mercat immobiliari local a Barcelona. Analitzem cada cas de manera individual per oferir serveis adaptats a les necessitats reals de cada client, assegurant una atenció propera, responsable i totalment personalitzada.",
        "about-who-p3": "<strong>Missió:</strong> Acompanyar cada client de manera professional i propera, garantint seguretat, transparència i eficiència en totes les operacions immobiliàries.",
        "about-who-p4": "<strong>Visió:</strong> Convertir-nos en la immobiliària de referència a Barcelona, reconeguda per la seva proximitat, confiança i excel·lència en el servei integral al client.",
        "about-who-p5": "Des de la nostra fundació el 2019, hem acompanyat centenars de clients, transformant un tràmit complex en una experiència fiable i segura.",
        "about-values-title": "Els nostres valors",
        "about-value1-title": "Professionalitat",
        "about-value1-p": "Serveis de màxima qualitat avalats per l’experiència i un coneixement profund del mercat immobiliari de Barcelona.",
        "about-value2-title": "Proximitat",
        "about-value2-p": "Atenció personalitzada i tracte humà en cada etapa del procés immobiliari, construint relacions de confiança.",
        "about-value3-title": "Transparència",
        "about-value3-p": "Comunicació clara i honesta en totes les operacions, garantint seguretat en cada transacció.",
        "about-value4-title": "Compromís amb el client",
        "about-value4-p": "Acompanyament integral durant tot el procés de compra, venda o lloguer del teu immoble.",
        "about-why-title": "Per què escollir-nos",
        "about-why-p1": "<strong>Solucions integrals:</strong> Oferim serveis complets en assessorament empresarial, immobiliari, assegurances i viatges des d’una sola empresa.",
        "about-why-p2": "<strong>Atenció personalitzada:</strong> Cada client rep un tracte individualitzat adaptat a les seves necessitats específiques.",
        "about-why-p3": "<strong>Equip multidisciplinari:</strong> Professionals especialitzats en diferents àrees treballant de manera coordinada.",
        "about-why-p4": "<strong>Experiència contrastada:</strong> Anys de trajectòria donant suport a empreses i particulars en els seus projectes.",
        "about-why-p5": "<strong>Compromís amb l’excel·lència:</strong> Millora contínua i actualització constant de coneixements i procediments.",
        "about-method-title": "La nostra metodologia",
        "about-method-step1-title": "Anàlisi individual",
        "about-method-step1-p": "Estudiem el teu cas de manera personalitzada per entendre les teves necessitats i objectius.",
        "about-method-step2-title": "Plans adaptats",
        "about-method-step2-p": "Dissenyem estratègies i solucions específiques per a la teva situació particular.",
        "about-method-step3-title": "Acompanyament",
        "about-method-step3-p": "Et guiem durant tot el procés amb seguiment continu i suport professional.",
        "about-method-step4-title": "Resultats",
        "about-method-step4-p": "Avaluem els resultats i ajustem estratègies per garantir l’èxit del teu projecte.",
        "about-method-cta": "Coneix els nostres serveis",
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
        privacy_collect_intro: "FA GRUP peut collecter les types de données personnelles suivants :",
        privacy_collect_id: "<strong>Données d'identification :</strong> Nom, prénom, CNI/NIE",
        privacy_collect_contact: "<strong>Données de contact :</strong> Adresse e-mail, numéro de téléphone, adresse postale",
        privacy_collect_nav: "<strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées",
        privacy_collect_service: "<strong>Données liées aux services :</strong> Informations sur les biens d'intérêt, préférences de recherche",
        privacy_purpose_intro: "Les données personnelles collectées seront traitées aux fins suivantes :",
        privacy_purpose1: "Gestion des demandes et des requêtes d'information",
        privacy_purpose2: "Fourniture de services immobiliers, d'assurances et de voyages",
        privacy_purpose3: "Envoi de communications commerciales sur nos services (avec votre consentement préalable)",
        privacy_purpose4: "Respect des obligations légales et contractuelles",
        privacy_purpose5: "Amélioration de nos services et de l'expérience utilisateur",
        privacy_legal_intro: "Le traitement de vos données personnelles est basé sur :",
        privacy_legal1: "<strong>Consentement :</strong> Pour l'envoi de communications commerciales",
        privacy_legal2: "<strong>Exécution du contrat :</strong> Pour la fourniture des services demandés",
        privacy_legal3: "<strong>Intérêt légitime :</strong> Pour la gestion et l'amélioration de nos services",
        privacy_legal4: "<strong>Obligation légale :</strong> Pour se conformer aux réglementations applicables",
        privacy_recipients_intro: "Vos données personnelles peuvent être communiquées à :",
        privacy_recipients1: "Sociétés associées du groupe FA GRUP pour la fourniture de services",
        privacy_recipients2: "Fournisseurs de services technologiques et de stockage",
        privacy_recipients3: "Administrations publiques lorsque cela est légalement requis",
        privacy_recipients4: "Établissements financiers pour la gestion des paiements",
        privacy_recipients5: "Nous ne réalisons pas de transferts internationaux de données en dehors de l'Espace économique européen.",
        privacy_storage1: "Les données personnelles seront conservées pendant la durée nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées et, par la suite, pendant les délais de prescription légaux applicables.",
        privacy_storage2: "En l'absence d'obligation légale, les données seront conservées tant que vous n'en demanderez pas la suppression et tant qu'il existera une base légitime pour leur traitement.",
        privacy_rights_intro: "En tant que titulaire des données personnelles, vous avez le droit de :",
        privacy_rights1: "<strong>Accès :</strong> Savoir quelles données nous traitons à votre sujet",
        privacy_rights2: "<strong>Rectification :</strong> Demander la correction de données inexactes",
        privacy_rights3: "<strong>Suppression :</strong> Demander la suppression de vos données",
        privacy_rights4: "<strong>Opposition :</strong> Vous opposer au traitement de vos données",
        privacy_rights5: "<strong>Limitation :</strong> Demander la limitation du traitement",
        privacy_rights6: "<strong>Portabilité :</strong> Recevoir vos données dans un format structuré",
        privacy_rights7: "<strong>Révocation du consentement :</strong> Retirer le consentement à tout moment",
        privacy_rights_contact: "Pour exercer ces droits, vous pouvez nous contacter via :",
        privacy_rights_contactinfo: "Email : fagrupinmobiliaria@gmail.com<br>Adresse postale : Avenida Josep Tarradellas 134 bajos, 08029 Barcelone",
        privacy_security: "FA GRUP a mis en place des mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles et les protéger contre tout accès non autorisé, perte, destruction ou altération.",
        privacy_cookies: "Notre site web utilise des cookies pour améliorer l'expérience utilisateur. Pour plus d'informations, consultez notre Politique de Cookies.",
        privacy_modifications: "FA GRUP se réserve le droit de modifier cette Politique de Confidentialité pour l'adapter aux changements législatifs ou à nos services. Nous vous recommandons de consulter régulièrement cette page.",
        privacy_claims: "Si vous estimez que le traitement de vos données personnelles n'est pas conforme à la réglementation, vous avez le droit d'introduire une réclamation auprès de l'Agence espagnole de protection des données (www.aepd.es).",
        privacy_contact_final: "Pour toute question concernant cette Politique de Confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :",
        privacy_contact_finalinfo: "<strong>Email :</strong> fagrupinmobiliaria@gmail.com<br><strong>Téléphone :</strong> +34 635 871 358<br><strong>Adresse :</strong> Avenida Josep Tarradellas 134 bajos, 08029 Barcelone, Espagne",
        // --- À PROPOS DE NOUS ---
        "about-hero-title": "À propos de nous",
        "about-hero-subtitle": "Découvrez qui nous sommes et ce qui nous distingue",
        "about-who-title": "Qui sommes-nous",
        "about-who-p1": "FA GRUP est une agence immobilière située à Barcelone, fondée le 11 décembre 2019. Nous sommes spécialisés dans l’offre d’un service intégral dans le secteur immobilier, accompagnant le client tout au long du processus d’achat, de vente ou de location de biens avec professionnalisme et proximité.",
        "about-who-p2": "Nous disposons d’une équipe de professionnels ayant une grande connaissance du marché immobilier local à Barcelone. Nous analysons chaque cas individuellement afin d’offrir des services adaptés aux besoins réels de chaque client, garantissant une attention proche, responsable et totalement personnalisée.",
        "about-who-p3": "<strong>Mission :</strong> Accompagner chaque client de manière professionnelle et proche, en garantissant sécurité, transparence et efficacité dans toutes les opérations immobilières.",
        "about-who-p4": "<strong>Vision :</strong> Devenir l’agence immobilière de référence à Barcelone, reconnue pour sa proximité, sa confiance et son excellence dans le service intégral au client.",
        "about-who-p5": "Depuis notre fondation en 2019, nous avons accompagné des centaines de clients, transformant une démarche complexe en une expérience fiable et sûre.",
        "about-values-title": "Nos valeurs",
        "about-value1-title": "Professionnalisme",
        "about-value1-p": "Des services de la plus haute qualité soutenus par l’expérience et une connaissance approfondie du marché immobilier de Barcelone.",
        "about-value2-title": "Proximité",
        "about-value2-p": "Une attention personnalisée et un contact humain à chaque étape du processus immobilier, construisant des relations de confiance.",
        "about-value3-title": "Transparence",
        "about-value3-p": "Communication claire et honnête dans toutes les opérations, garantissant la sécurité à chaque transaction.",
        "about-value4-title": "Engagement envers le client",
        "about-value4-p": "Accompagnement intégral tout au long du processus d’achat, de vente ou de location de votre bien.",
        "about-why-title": "Pourquoi nous choisir",
        "about-why-p1": "<strong>Solutions complètes :</strong> Nous offrons des services complets en conseil d’entreprise, immobilier, assurances et voyages depuis une seule entreprise.",
        "about-why-p2": "<strong>Attention personnalisée :</strong> Chaque client reçoit un traitement individualisé adapté à ses besoins spécifiques.",
        "about-why-p3": "<strong>Équipe multidisciplinaire :</strong> Des professionnels spécialisés dans différents domaines travaillant de manière coordonnée.",
        "about-why-p4": "<strong>Expérience reconnue :</strong> Des années de parcours soutenant entreprises et particuliers dans leurs projets.",
        "about-why-p5": "<strong>Engagement envers l’excellence :</strong> Amélioration continue et mise à jour constante des connaissances et des procédures.",
        "about-method-title": "Notre méthodologie",
        "about-method-step1-title": "Analyse individuelle",
        "about-method-step1-p": "Nous étudions votre cas de manière personnalisée pour comprendre vos besoins et objectifs.",
        "about-method-step2-title": "Plans adaptés",
        "about-method-step2-p": "Nous concevons des stratégies et des solutions spécifiques à votre situation particulière.",
        "about-method-step3-title": "Accompagnement",
        "about-method-step3-p": "Nous vous guidons tout au long du processus avec un suivi continu et un soutien professionnel.",
        "about-method-step4-title": "Résultats",
        "about-method-step4-p": "Nous évaluons les résultats et ajustons les stratégies pour garantir le succès de votre projet.",
        "about-method-cta": "Découvrez nos services",
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
            // Pour les titres et paragraphes dynamiques, on autorise innerHTML
            if (key.endsWith("-title") || key.startsWith("profile") || key.startsWith("about-")) {
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
    // Le coût total payé = mensualités totales + gastos de compra
    const totalCostValue = (monthly * months) + purchaseCosts;
    const interestTotalValue = (monthly * months) - loanNeeded;

    if(els.totalCost) els.totalCost.textContent = formatEur(totalCostValue);
    if(els.interestTotal) els.interestTotal.textContent = formatEur(interestTotalValue);
    if(els.savingsTotal) els.savingsTotal.textContent = formatEur(down + 1500); // Ajout frais fixes estimé

    // --- RATIO 35% (Gestion des styles personnalisés) ---
    if (income > 0) {
        const ratio = (monthly / income) * 100;
        if(els.affordabilityValue) els.affordabilityValue.textContent = ratio.toFixed(1) + "%";
        if(els.affordabilityStatus && els.affordabilityLabel) {
            const isGood = ratio <= 35;
            els.affordabilityStatus.className = isGood ? "ratio-box affordability-status-light" : "ratio-box affordability-status-bad";
            els.affordabilityLabel.textContent = isGood ? "Excelente" : "Riesgo Elevado";
        }
    } else {
        if(els.affordabilityValue) els.affordabilityValue.textContent = "--%";
        if(els.affordabilityLabel) els.affordabilityLabel.textContent = "";
        if(els.affordabilityStatus) els.affordabilityStatus.className = "ratio-box";
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
