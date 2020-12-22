import React, { createContext, useState, useContext } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const useLanguageContext = () => {
  const d = useContext(LanguageContext);
  if (!d) throw new Error("error");
  return d;
};
export const LanguageContextProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const lang = ["hy", "en"];
  const [activeLang, setActiveLang] = useState("hy");

  const changeLangTo = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
  };

  const getFieldName = (field) => {
    const f = `${field}_${activeLang}`;
    return f;
  };
  return (
    <LanguageContext.Provider
      value={{ lang, setActiveLang: changeLangTo, activeLang, g: getFieldName }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
