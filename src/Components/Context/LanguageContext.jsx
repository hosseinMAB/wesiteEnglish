import React, { createContext, useContext, useState, useEffect } from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

const LanguageContext = createContext({});
const LocalStorgelanguge = localStorage.getItem("language") || "en";
const LanguageContextProvider = ({ children }) => {
  const [isArabic, setIsArabic] = useState(LocalStorgelanguge);

  const handleLanguageChange = () => {
    const newLang = isArabic == "ar" ? "en" : "ar";
    i18next.changeLanguage(newLang);
    setIsArabic(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider value={{ isArabic, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;

export const useLanguage = () => {
  return useContext(LanguageContext);
};
