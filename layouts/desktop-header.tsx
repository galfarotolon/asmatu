"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

// Helper function to search navigation items for a matching slug
function findAlternateSlug(
  navigation: any,
  currentPath: string,
  sourceLang: "es" | "eu",
  targetLang: "es" | "eu"
): string {
  if (!navigation || !navigation.menuItems) return "";

  for (const item of navigation.menuItems) {
    if (item[sourceLang] && item[sourceLang].current === currentPath) {
      return item[targetLang] ? item[targetLang].current : "";
    }
    if (item.submenu && Array.isArray(item.submenu)) {
      for (const sub of item.submenu) {
        if (sub[sourceLang] && sub[sourceLang].current === currentPath) {
          return sub[targetLang] ? sub[targetLang].current : "";
        }
      }
    }
  }
  return "";
}

export default function DesktopHeader({ navigation }: { navigation?: any }) {
  const router = useRouter();
  const pathname = usePathname(); // e.g. "/eu/proyectos"
  const { language, switchLanguage } = useLanguage();
  const [isToggled, setToggled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const toggleTrueFalse = () => setToggled((prev) => !prev);

  // Extract source language from URL
  const urlLangMatch = pathname.match(/^\/(es|eu)(\/|$)/);
  const sourceLangFromUrl = urlLangMatch
    ? (urlLangMatch[1] as "es" | "eu")
    : language;

  // When language changes, compute alternate slug from navigation data
  const handleLanguageChange = (newLang: "es" | "eu") => {
    // Only run on the client
    if (typeof window !== "undefined") {
      const currentPath = pathname
        .replace(/^\/(es|eu)(\/|$)/, "")
        .replace(/^\/+|\/+$/g, "")
        .toLowerCase();
      const alternateSlug = findAlternateSlug(
        navigation,
        currentPath,
        sourceLangFromUrl,
        newLang
      );
      switchLanguage(newLang);
      const newPath = alternateSlug
        ? `/${newLang}/${alternateSlug}`
        : `/${newLang}`;
      router.push(newPath);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && typeof window !== "undefined") {
        headerRef.current.classList.toggle("nav-scrolled", window.scrollY > 50);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div ref={headerRef} className="industify_fn_header">
      <div className="header_inner">
        <div className="menu_logo">
          <Link href="/">
            <Image
              className="desktop_logo"
              src="/img/logotipo-blanco-asmatu.png"
              alt="Asmatu Logo"
              width={120}
              height={80}
              priority
            />
            <Image
              className="desktop_logo_dark"
              src="/img/logotipo-asmatu.png"
              alt="Asmatu Logo"
              width={120}
              height={80}
              priority
            />
          </Link>
        </div>
        <div className="menu_nav">
          <ul className="industify_fn_main_nav vert_nav">
            {navigation?.menuItems?.map((item: any, index: number) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const baseRawSlug = item[language]?.current || "";
              const baseSlug = baseRawSlug.replace(/^\//, "");
              const href = baseSlug
                ? `/${language}/${baseSlug}`
                : `/${language}`;
              return (
                <li key={index} className={hasSubmenu ? "has-submenu" : ""}>
                  <Link href={href}>
                    {item.title ? item.title[language] : ""}
                    {hasSubmenu && <span className="arrow">▼</span>}
                  </Link>
                  {hasSubmenu && (
                    <ul className="sub-menu">
                      {item.submenu.map((sub: any, idx: number) => {
                        const serviceSlug = sub?.slug?.[language]?.current;
                        const subHref = serviceSlug
                          ? `/${language}/${baseSlug}/${serviceSlug}`
                          : `/${language}`;
                        return (
                          <li key={idx}>
                            <Link href={subHref} className="submenu-link">
                              {sub?.title ? sub.title[language] : ""}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="toll_free_lang">
          <div
            className={`nice-select ${isToggled ? "open" : ""}`}
            onClick={toggleTrueFalse}
          >
            <span className="current">{language.toUpperCase()}</span>
            <ul className="list">
              <li
                onClick={() => handleLanguageChange("es")}
                className={`option ${language === "es" ? "selected focus" : ""}`}
              >
                ES
              </li>
              <li
                onClick={() => handleLanguageChange("eu")}
                className={`option ${language === "eu" ? "selected focus" : ""}`}
              >
                EU
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
