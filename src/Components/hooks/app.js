import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import translations from "./translations.json"; // تأكد من مسار ملف الترجمة

i18next.init({
  lng: "en", // اللغة الافتراضية
  resources: {
    en: { translation: translations.en },
    ar: { translation: translations.ar },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);
