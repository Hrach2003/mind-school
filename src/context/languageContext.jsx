import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const useLanguageContext = () => {
  const d = useContext(LanguageContext);
  if (!d) throw new Error("error");
  return d;
};
// eslint-disable-next-line react/prop-types
export const LanguageContextProvider = ({ children }) => {
  const lang = ["hy", "en"];
  const [activeLang, setActiveLang] = useState("hy");

  const getFieldName = (field) => {
    const f = `${field}_${activeLang}`;
    return f;
  };
  return (
    <LanguageContext.Provider
      value={{ lang, setActiveLang, activeLang, g: getFieldName }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
