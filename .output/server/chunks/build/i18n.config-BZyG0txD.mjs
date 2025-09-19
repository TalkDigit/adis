const generalTr = {
  searchResult: "Arama Sonucu",
  searchFound: "Adet sonu\xE7 bulundu",
  searchNotFound: "Arama sonu\xE7lar\u0131nda herhangi bir sonu\xE7 bulunamad\u0131. L\xFCtfen farkl\u0131 terimler deneyin.",
  home: "AnaSayfa",
  goHome: "Sayfaya Git",
  kvkk: "Ki\u015Fisel Verilerin Korunmas\u0131 Ayd\u0131nlatma Metnini okudum, kabul ediyorum.",
  iletisimeGec: "\u0130leti\u015Fime Ge\xE7",
  contactUs: "\u0130leti\u015Fime Ge\xE7",
  telephone: "Telefon",
  adres: "Adres*",
  email: "E-posta*",
  ad: "Ad*",
  soyad: "Soyad*",
  konu: "Konu*",
  email: "E-posta*",
  phone: "+90*",
  mesaj: "Mesaj*",
  send: "G\xF6nder",
  hakkimizda: "Hakk\u0131m\u0131zda",
  projeler: "Projeler",
  iletisim: "\u0130leti\u015Fim",
  hakkimizdaLink: "/hakkimizda",
  projelerLink: "/projeler",
  iletisimLink: "/iletisim"
};
const generalEn = {
  searchResult: "Search Result",
  searchFound: "Results found",
  searchNotFound: "No results were found for your search. Please try different terms.",
  home: "Home",
  goHome: "Go to Page",
  kvkk: "I have read and accept the Personal Data Protection Information Text.",
  iletisimeGec: "Contact Us",
  contactUs: "Contact Us",
  telephone: "Phone",
  adres: "Address",
  email: "E-mail",
  ad: "Your name",
  konu: "Subject",
  soyad: "Your surname",
  email: "Your Email Address",
  phone: "+90",
  message: "Your message",
  send: "Send",
  hakkimizda: "About Us",
  hakkimizdaLink: "/en/aboutus",
  projeler: "Projects",
  projelerLink: "/en/projects",
  iletisim: "Contact",
  iletisimLink: "/en/contact"
};
const i18n_config = () => ({
  legacy: false,
  locales: ["tr", "en"],
  defaultLocale: "tr",
  messages: {
    tr: {
      ...generalTr
    },
    en: {
      ...generalEn
    }
  }
});

export { i18n_config as default };
//# sourceMappingURL=i18n.config-BZyG0txD.mjs.map
