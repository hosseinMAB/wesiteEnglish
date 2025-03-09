import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import trans from "./Components/Json/trans.json";
import LanguageContextProvider from "./Components/Context/LanguageContext.jsx";
import NewsPapareProvaider from "./Components/Context/NewsPapareProvaider.jsx";

// استرجاع اللغة من localStorage
const storedLanguage = localStorage.getItem("language") || "en"; // تعيين 'en' كقيمة افتراضية إذا لم تكن موجودة

i18next.init({
  lng: storedLanguage,
  resources: {
    en: { translation: trans.en },
    ar: { translation: trans.ar },
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewsPapareProvaider>
      <I18nextProvider i18n={i18next}>
        <LanguageContextProvider>
          <App />
        </LanguageContextProvider>
      </I18nextProvider>
    </NewsPapareProvaider>
  </StrictMode>
);
