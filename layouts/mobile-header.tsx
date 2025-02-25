"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  title: { es: string; eu: string };
  es: { current: string };
  eu: { current: string };
  submenu?: NavItem[];
}

export default function MobileHeader({ navigation }: { navigation?: any }) {
  const router = useRouter();
  const pathname = usePathname();
  const { language, switchLanguage } = useLanguage();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const [isToggled, setToggled] = useState(false);
  const [selectedLang, setSelectedLang] = useState(language);

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Toggle a specific submenu by index
  const toggleSubmenu = (idx: number) => {
    setOpenSubmenuIndex((prev) => (prev === idx ? null : idx));
  };

  // Disable body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const hamburgerIcon = document.getElementById("hamburger-icon");
      if (
        isMobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        hamburgerIcon &&
        !hamburgerIcon.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Language switch handling (same logic as DesktopHeader)
  const handleLanguageChange = async (newLang: "es" | "eu") => {
    const currentPath = pathname
      .replace(/^\/(es|eu)(\/|$)/, "")
      .replace(/^\/+|\/+$/g, "")
      .toLowerCase();

    const urlLangMatch = pathname.match(/^\/(es|eu)(\/|$)/);
    const sourceLangFromUrl = urlLangMatch
      ? (urlLangMatch[1] as "es" | "eu")
      : language;

    try {
      const response = await fetch(
        `/api/get-alternate-slug?path=${encodeURIComponent(
          currentPath
        )}&sourceLang=${sourceLangFromUrl}&lang=${newLang}`
      );
      if (!response.ok) {
        console.error("[MobileHeader] API response not OK:", response.status);
      }
      const data = await response.json();
      const alternateSlug = data.alternateSlug;
      switchLanguage(newLang);
      setSelectedLang(newLang);
      const newPath = alternateSlug
        ? `/${newLang}/${alternateSlug}`
        : `/${newLang}`;
      router.push(newPath);
    } catch (error) {
      console.error("[MobileHeader] Error in language switch:", error);
      router.push(`/${newLang}`);
    }
  };

  // Build link from a navigation item using the new structure
  const buildLink = (item: NavItem): string => {
    const rawSlug =
      item[language] && item[language].current ? item[language].current : "";
    const slug = rawSlug.replace(/^\//, "");
    return slug ? `/${language}/${slug}` : `/${language}`;
  };

  return (
    <div className="industify_fn_header displayed">
      {/* LOGO & HAMBURGER */}
      <div
        className="bg-white-opacity-90 backdrop-blur-lg p-4 items-center justify-between w-full flex px-10 h-full"
        style={{ justifyContent: "space-between", padding: "0 5%" }}
      >
        <div className="menu_logo">
          <Link href="/">
            <Image
              src="/img/logotipo-asmatu.png"
              alt="Asmatu Logo"
              width={120}
              height={80}
            />
          </Link>
        </div>
        <div
          id="hamburger-icon"
          onClick={toggleMobileMenu}
          className={`hamburger hamburger--collapse-r ${isMobileMenuOpen ? "is-active" : ""}`}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        id="mobile-menu"
        className={`transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "block" : "hidden"
        } backdrop-blur-lg header_mobile fixed top-0 left-0 right-0 bottom-0 overflow-y-auto`}
      >
        <nav className="p-4 text-lg overflow-y-auto">
          <ul className="flex flex-col">
            {navigation?.menuItems?.map((item: NavItem, index: number) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const linkHref = buildLink(item);
              return (
                <li key={index} className="py-2 relative">
                  <div className="flex justify-between items-center">
                    <Link
                      href={linkHref}
                      className="nav-text"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title ? item.title[language] : ""}
                    </Link>
                    {hasSubmenu && (
                      <span
                        className={`transition-transform cursor-pointer ${
                          openSubmenuIndex === index ? "rotate-180" : "rotate-0"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubmenu(index);
                        }}
                      >
                        ▼
                      </span>
                    )}
                  </div>
                  {hasSubmenu && (
                    <ul
                      className={`transition-max-height overflow-y-auto ${
                        openSubmenuIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu?.map((sub: NavItem, subIdx: number) => {
                        const subHref = buildLink(sub);
                        return (
                          <li key={subIdx} style={{ padding: "0 1rem" }}>
                            <Link
                              href={subHref}
                              className="nav-text"
                              style={{ fontSize: "0.8rem" }}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.title ? sub.title[language] : ""}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}

            {/* Language Switcher */}
            <div className="toll_free_lang" style={{ marginLeft: 0 }}>
              <div
                onClick={() => setToggled(!isToggled)}
                className={`nice-select ${isToggled ? "open" : ""}`}
              >
                <span className="current">{selectedLang.toUpperCase()}</span>
                <ul className="list">
                  <li
                    onClick={() => handleLanguageChange("es")}
                    className={`option ${selectedLang === "es" ? "selected focus" : ""}`}
                  >
                    ES
                  </li>
                  <li
                    onClick={() => handleLanguageChange("eu")}
                    className={`option ${selectedLang === "eu" ? "selected focus" : ""}`}
                  >
                    EU
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
