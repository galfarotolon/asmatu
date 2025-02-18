"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function DesktopHeader({ navigation }: { navigation?: any }) {
  const router = useRouter();
  const pathname = usePathname(); // e.g. "/eu/proiektuak"
  const { language, switchLanguage } = useLanguage();
  const [isToggled, setToggled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const toggleTrueFalse = () => setToggled(!isToggled);

  // Extract source language from URL
  const urlLangMatch = pathname.match(/^\/(es|eu)(\/|$)/);
  const sourceLangFromUrl = urlLangMatch
    ? (urlLangMatch[1] as "es" | "eu")
    : language;

  const handleLanguageChange = async (newLang: "es" | "eu") => {
    // Remove the language prefix from the pathname
    const currentPath = pathname
      .replace(/^\/(es|eu)(\/|$)/, "")
      .replace(/^\/+|\/+$/g, "")
      .toLowerCase();
    console.log(
      "[Header] Current path after cleaning:",
      currentPath,
      "Source lang:",
      sourceLangFromUrl,
      "New lang:",
      newLang
    );

    try {
      const response = await fetch(
        `/api/get-alternate-slug?path=${encodeURIComponent(currentPath)}&sourceLang=${sourceLangFromUrl}&lang=${newLang}`
      );
      if (!response.ok) {
        console.error("[Header] API response not OK:", response.status);
      }
      const data = await response.json();
      console.log("[Header] API response:", data);
      const alternateSlug = data.alternateSlug;
      console.log("[Header] Alternate slug:", alternateSlug);

      // Update language context AFTER API call.
      switchLanguage(newLang);

      // Build new URL: if API returns a non-empty alternate slug, use it; otherwise, fallback to currentPath.
      const newPath = alternateSlug
        ? `/${newLang}/${alternateSlug}`
        : currentPath
          ? `/${newLang}/${currentPath}`
          : `/${newLang}`;
      console.log("[Header] Redirecting to:", newPath);
      router.push(newPath);
    } catch (error) {
      console.error("[Header] Error in language switch:", error);
      router.push(`/${newLang}/${currentPath}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle("nav-scrolled", window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to render links (unchanged)
  const renderLink = (item: any, isSubmenu = false) => (
    <Link
      href={`/${language}/${
        language === "es"
          ? item.slugESP?.replace(/^\//, "")
          : item.slugEU?.replace(/^\//, "")
      }`}
      className={isSubmenu ? "submenu-link" : ""}
    >
      {language === "es" ? item.labelESP : item.labelEU}
    </Link>
  );

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
            {navigation?.menuItems?.map((item: any, index: number) => (
              <li key={index}>
                {renderLink(item)}
                {item.submenu?.length > 0 && (
                  <ul className="sub-menu">
                    {item.submenu.map((sub: any, idx: number) => (
                      <li key={idx}>{renderLink(sub, true)}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
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
