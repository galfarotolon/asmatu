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

      // Build new URL: if API returns a non-empty alternate slug, use it; otherwise, fallback to the language homepage.
      const newPath = alternateSlug
        ? `/${newLang}/${alternateSlug}`
        : `/${newLang}`;
      console.log("[Header] Redirecting to:", newPath);
      router.push(newPath);
    } catch (error) {
      console.error("[Header] Error in language switch:", error);
      router.push(`/${newLang}`);
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

  // Updated renderLink function with arrow for submenu items
  const renderLink = (item: any, isSubmenu = false) => {
    // Get the appropriate slug based on the current language.
    const rawSlug = language === "es" ? item.slugESP : item.slugEU;
    const slug = rawSlug ? rawSlug.replace(/^\//, "") : "";
    // Build the href: if slug is empty, just use the language prefix.
    const href = slug ? `/${language}/${slug}` : `/${language}`;
    return (
      <Link href={href} className={isSubmenu ? "submenu-link" : ""}>
        {language === "es" ? item.labelESP : item.labelEU}
      </Link>
    );
  };

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
              const hasSubmenu =
                item.submenu &&
                Array.isArray(item.submenu) &&
                item.submenu.length > 0;
              // Get the href for the parent link.
              const rawSlug = language === "es" ? item.slugESP : item.slugEU;
              const slug = rawSlug ? rawSlug.replace(/^\//, "") : "";
              const href = slug ? `/${language}/${slug}` : `/${language}`;
              return (
                <li key={index} className={hasSubmenu ? "has-submenu" : ""}>
                  <Link href={href}>
                    {language === "es" ? item.labelESP : item.labelEU}
                    {hasSubmenu && <span className="arrow">▼</span>}
                  </Link>
                  {hasSubmenu && (
                    <ul className="sub-menu">
                      {item.submenu.map((sub: any, idx: number) => {
                        const subRawSlug =
                          language === "es" ? sub.slugESP : sub.slugEU;
                        const subSlug = subRawSlug
                          ? subRawSlug.replace(/^\//, "")
                          : "";
                        const subHref = subSlug
                          ? `/${language}/${subSlug}`
                          : `/${language}`;
                        return (
                          <li key={idx}>
                            <Link href={subHref} className="submenu-link">
                              {language === "es" ? sub.labelESP : sub.labelEU}
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
