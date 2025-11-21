// src/context/LanguageContext.jsx
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [from, setFrom] = useState("hi");
  const [to, setTo] = useState("kn");

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <LanguageContext.Provider value={{ from, to, setFrom, setTo, swap }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
