var LANGS = ["English","Urdu","Roman Urdu","Hindi","Arabic","Spanish","French","German","Turkish","Bengali"];
var currentLang = localStorage.getItem("tradekit_lang") || "English";
var TEXT = {
  "subtitle": {
    "English":"Tools • Guides • P2P Hub - Non-Custodial",
    "Urdu":"ٹولز • گائیڈز • پی ٹو پی ہب",
    "Roman Urdu":"Tools • Guides • P2P Hub",
    "Hindi":"टूल्स • गाइड्स • पी2पी हब",
    "Arabic":"أدوات • أدلة • مركز P2P",
    "Spanish":"Herramientas • Guías • Hub P2P",
    "French":"Outils • Guides • Hub P2P",
    "German":"Tools • Anleitungen • P2P-Hub",
    "Turkish":"Araçlar • Rehberler • P2P Merkezi",
    "Bengali":"টুলস • গাইড • P2P হাব"
  },
  "choose_lang": {
    "English":"Choose Language",
    "Urdu":"زبان منتخب کریں",
    "Roman Urdu":"Language Chuno",
    "Hindi":"भाषा चुनें",
    "Arabic":"اختر اللغة",
    "Spanish":"Elige Idioma",
    "French":"Choisir la Langue",
    "German":"Sprache Wählen",
    "Turkish":"Dil Seç",
    "Bengali":"ভাষা বেছে নিন"
  },
  "pick_tool": {
    "English":"Pick Your Tool 👇",
    "Urdu":"اپنا ٹول چنیں 👇",
    "Roman Urdu":"Apna Tool Chuno 👇",
    "Hindi":"अपना टूल चुनें 👇",
    "Arabic":"اختر أداتك 👇",
    "Spanish":"Elige Tu Herramienta 👇",
    "French":"Choisis Ton Outil 👇",
    "German":"Wähle Dein Tool 👇",
    "Turkish":"Aracını Seç 👇",
    "Bengali":"তোমার টুল বেছে নাও 👇"
  },
  "warn": {
    "English":"⚠️ Safe Rule: TradeKit never holds your money. Always pay direct to seller. Verify first, then pay.",
    "Urdu":"⚠️ محفوظ اصول: ٹریڈ کٹ آپ کا پیسہ کبھی نہیں رکھتا۔ ہمیشہ سیلر کو براہ راست ادائیگی کریں۔",
    "Roman Urdu":"⚠️ Safe Rule: TradeKit tumhara paisa kabhi hold nahi karta. Hamesha seller ko direct pay karo.",
    "Hindi":"⚠️ सुरक्षित नियम: TradeKit कभी आपका पैसा नहीं रखता। हमेशा सीधे सेलर को भुगतान करें।",
    "Arabic":"⚠️ قاعدة آمنة: TradeKit لا يحتفظ بأموالك أبدًا. ادفع دائمًا مباشرة للبائع.",
    "Spanish":"⚠️ Regla Segura: TradeKit nunca guarda tu dinero. Paga siempre directo al vendedor.",
    "French":"⚠️ Règle Sûre: TradeKit ne garde jamais ton argent. Paie toujours direct au vendeur.",
    "German":"⚠️ Sichere Regel: TradeKit hält nie dein Geld. Zahle immer direkt an den Verkäufer.",
    "Turkish":"⚠️ Güvenli Kural: TradeKit paranı asla tutmaz. Her zaman satıcıya direkt öde.",
    "Bengali":"⚠️ নিরাপদ নিয়ম: TradeKit কখনো তোমার টাকা রাখে না। সবসময় সরাসরি বিক্রেতাকে পে করো।"
  }
};
function T(key){
  if(TEXT[key] && TEXT[key][currentLang]) return TEXT[key][currentLang];
  if(TEXT[key] && TEXT[key]["English"]) return TEXT[key]["English"];
  return key;
}
function applyLang(){
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    el.textContent = T(el.getAttribute("data-i18n"));
  });
  var l = document.getElementById("curLangLabel");
  if(l) l.textContent = currentLang;
  if(currentLang==="Urdu" || currentLang==="Arabic") document.body.dir="rtl";
  else document.body.dir="ltr";
}
function openLang(){
  var box = document.getElementById("langList");
  box.innerHTML = LANGS.map(function(l){
    return '<button onclick="selectLang(\''+l+'\')" class="lang-item '+(l===currentLang?'active':'')+'">'+l+(l===currentLang?' ✅':'')+'</button>';
  }).join('');
  document.getElementById("langModal").classList.remove("hidden");
}
function closeLang(){ document.getElementById("langModal").classList.add("hidden"); }
function selectLang(l){
  currentLang = l;
  localStorage.setItem("tradekit_lang", l);
  applyLang(); closeLang();
}
document.addEventListener("DOMContentLoaded", applyLang);
