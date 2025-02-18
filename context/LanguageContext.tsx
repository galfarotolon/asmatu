// context/LanguageContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import translations from "../app/utils/translations";

type Language = "es" | "eu";

interface LanguageContextProps {
  language: Language;
  switchLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export const LanguageProvider = ({
  children,
  initialLanguage = "es",
}: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
    document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
  };

  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
