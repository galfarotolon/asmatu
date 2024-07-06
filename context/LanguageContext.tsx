// context/LanguageContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import translations from "../app/utils/translations";

type Language = "ESP" | "EU";

interface LanguageContextProps {
  language: Language;
  switchLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ESP");

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
