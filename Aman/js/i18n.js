const translations = {
  en: {
    motoTitle: "Your bridge to global medical innovation",
    motoSubTitle: "European and German-certified medical technologies for Libya’s healthcare sector",
    motoText: "A Libyan company specialized in the import and supply of certified medical equipment from Germany and Europe, supported by a global network of approved suppliers across Asia and the Americas. We connect Libyan healthcare institutions with the latest medical technologies from companies certified with CE, FDA, and ISO, in full compliance with the highest quality and regulatory standards.",
    servicesTtile: "Services",
    servicesSubTitle: "Our Expertise in Medical Technology Solutions and Services",
    firstServicesTitle: "Import & Supply of Certified Medical Equipment",
    firstServicesSubTitle: "We supply certified medical equipment from internationally recognized manufacturers. Our products comply with global healthcare quality and safety standards.",
    secondServicesTitle: "Custom Medical Equipment Import",
    secondServicesSubTitle: "We import medical equipment based on the specific needs of each healthcare facility. Our process ensures accurate selection, compliance, and timely delivery.",
    thirdServiceTitle: "Medical Equipment Selection Consulting",
    thirdServiceSubeTitle: "We provide expert consultation to help select the most suitable medical equipment. Our recommendations are tailored to clinical needs, budget, and compliance."
  },
  ar: {
    motoTitle: "بوابتك إلى الابتكار الطبي العالمي",
    motoSubTitle: "تقنيات طبية معتمدة من أوروبا وألمانيا لخدمة القطاع الصحي الليبي",
    motoText: "شركة ليبية متخصصة في استيراد وتوريد المعدات الطبية المعتمدة من ألمانيا وأوروبا، مع شبكة موردين عالميين معتمدين في آسيا وأمريكا. نربط المؤسسات الصحية الليبية بأحدث التقنيات الطبية من شركات حاصلة على شهادات CE وFDA وISO، وفق أعلى معايير الامتثال والجودة",
    servicesTtile: "الخدمات",
    servicesSubTitle: "ما نتميز به من حلول وخدمات في مجال التكنولوجيا الطبية",
    firstServicesTitle: "استيراد وتوريد المعدات الطبية المعتمدة",
    firstServicesSubTitle: "نوفّر معدات طبية معتمدة من شركات دولية معترف بها. منتجاتنا متوافقة مع معايير الجودة والسلامة في القطاع الصحي.",
    secondServicesTitle: "الاستيراد حسب الطلب للمؤسسات الصحية",
    secondServicesSubTitle: "نقوم باستيراد المعدات الطبية حسب احتياجات كل منشأة صحية. نضمن دقة الاختيار والامتثال وسرعة التوريد.",
    thirdServiceTitle: "استشارات اختيار المعدات الطبية المناسبة",
    thirdServiceSubeTitle: "نقدّم استشارات متخصصة لاختيار المعدات الطبية الأنسب. توصياتنا مصممة وفق الاحتياج الطبي والميزانية ومتطلبات الامتثال."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  localStorage.setItem("lang", lang);
}



// load saved language or browser language
const savedLang = localStorage.getItem("lang");
const browserLang = navigator.language.startsWith("ar") ? "ar" : "en";

setLanguage(savedLang || browserLang);
