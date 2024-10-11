// context/LanguageContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { getHeaderData, HeaderData, MenuItem } from "@/sanity/lib/sanity-utils";

type Language = "es" | "eu";

interface LanguageContextProps {
  language: Language;
  switchLanguage: (targetLang: Language) => void;
  headerData: HeaderData | null;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>("es");
  const [headerDataEs, setHeaderDataEs] = useState<HeaderData | null>(null);
  const [headerDataEu, setHeaderDataEu] = useState<HeaderData | null>(null);

  // Fetch header data for both languages once
  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const [esData, euData] = await Promise.all([
          getHeaderData("es"),
          getHeaderData("eu"),
        ]);
        setHeaderDataEs(esData);
        setHeaderDataEu(euData);
        console.log("Fetched header data for both languages.");
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };

    fetchHeaderData();
  }, []);

  // Sync language state with URL
  useEffect(() => {
    const segments = pathname?.split("/").filter(Boolean);
    const langFromUrl = segments[0];
    const newLang: Language = langFromUrl === "eu" ? "eu" : "es";
    setLanguage(newLang);
    console.log(`Language set to '${newLang}' based on URL.`);
  }, [pathname]);

  // Helper function to find menu item by slug
  const findMenuItemBySlug = (
    menuItems: MenuItem[],
    slug: string
  ): MenuItem | undefined => {
    for (const item of menuItems) {
      if (language === "es" && item.slug === slug) return item;
      if (language === "eu" && item.slug === slug) return item;
      if (item.subItems) {
        const found = findMenuItemBySlug(item.subItems, slug);
        if (found) return found;
      }
    }
    return undefined;
  };

  const switchLanguage = (targetLang: Language) => {
    if (targetLang === language) {
      console.warn(`Already in '${targetLang}' language.`);
      return;
    }

    const segments = pathname.split("/").filter(Boolean);
    console.log(`Current pathname segments:`, segments);

    let newPathSegments: string[] = [];

    if (targetLang === "eu") {
      if (segments[0] !== "eu") {
        // Add 'eu' prefix only once
        newPathSegments.push("eu");
        console.log("Added 'eu' prefix to the URL.");
      } else {
        console.warn("URL already contains 'eu' prefix.");
      }
    } else if (targetLang === "es") {
      if (segments[0] === "eu") {
        // Remove 'eu' prefix if present
        segments.shift();
        console.log("Removed 'eu' prefix from the URL.");
      }
    }

    // Determine the slugs to map
    const slugs =
      targetLang === "es" && segments[0] === "eu"
        ? segments.slice(1)
        : segments;

    slugs.forEach((slug) => {
      const currentHeader = language === "es" ? headerDataEs : headerDataEu;
      const targetHeader = targetLang === "es" ? headerDataEs : headerDataEu;

      if (!currentHeader || !targetHeader) {
        console.error("Header data missing for current or target language.");
        return;
      }

      const currentMenuItem = findMenuItemBySlug(currentHeader.menuItems, slug);
      if (currentMenuItem) {
        const indexOfMenuItem =
          currentHeader.menuItems.indexOf(currentMenuItem);
        const targetMenuItem = targetHeader.menuItems[indexOfMenuItem];
        if (targetMenuItem && targetMenuItem.slug) {
          newPathSegments.push(targetMenuItem.slug);
          console.log(
            `Mapped slug '${slug}' to '${targetMenuItem.slug}' for language '${targetLang}'.`
          );
        }
      } else {
        // If slug not found in menu, keep it as is
        newPathSegments.push(slug);
        console.warn(`Slug '${slug}' not found in menu items.`);
      }
    });

    // Construct the new pathname
    let newPathname = "/";

    newPathname += newPathSegments.join("/");

    console.log(`Navigating to new pathname: '${newPathname}'`);

    // Push to new path without setting language directly
    router.push(newPathname);
  };

  // Determine current header data based on language
  const headerData = language === "es" ? headerDataEs : headerDataEu;

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, headerData }}>
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
