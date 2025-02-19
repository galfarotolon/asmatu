"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  labelESP: string;
  labelEU: string;
  slugESP?: string;
  slugEU?: string;
  submenu?: NavItem[];
}

export default function MobileHeader({ navigation }: { navigation?: any }) {
  const router = useRouter();
  const pathname = usePathname();
  const { language, switchLanguage, t } = useLanguage();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null); // Track which submenu is open
  const [isToggled, setToggled] = useState(false); // for your "nice-select"
  const [selectedLang, setSelectedLang] = useState(language);

  // Toggle the mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Toggle a particular submenu by index
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

  // ============== Same handleLanguageChange logic as Desktop ================
  const handleLanguageChange = async (newLang: "es" | "eu") => {
    // Remove the current language prefix from pathname
    const currentPath = pathname
      .replace(/^\/(es|eu)(\/|$)/, "")
      .replace(/^\/+|\/+$/g, "")
      .toLowerCase();

    // Determine the source lang from the URL or fallback to context
    const urlLangMatch = pathname.match(/^\/(es|eu)(\/|$)/);
    const sourceLangFromUrl = urlLangMatch
      ? (urlLangMatch[1] as "es" | "eu")
      : language;

    console.log(
      "[MobileHeader] Current path:",
      currentPath,
      "Source lang:",
      sourceLangFromUrl,
      "New lang:",
      newLang
    );

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
      console.log("[MobileHeader] Alternate slug:", alternateSlug);

      switchLanguage(newLang);
      setSelectedLang(newLang);

      // Build new URL from alternate slug or fallback to homepage
      const newPath = alternateSlug
        ? `/${newLang}/${alternateSlug}`
        : `/${newLang}`;
      console.log("[MobileHeader] Redirecting to:", newPath);
      router.push(newPath);
    } catch (error) {
      console.error("[MobileHeader] Error in language switch:", error);
      router.push(`/${newLang}`);
    }
  };
  // ==========================================================================

  // Build link from slug
  const buildLink = (item: NavItem) => {
    // Now we use the slug value directly.
    const rawSlug = language === "es" ? item.slugESP : item.slugEU;
    const slug = rawSlug ? rawSlug.replace(/^\//, "") : "";
    return slug ? `/${language}/${slug}` : `/${language}`;
  };

  return (
    <div className="industify_fn_header displayed">
      {/* LOGO & HAMBURGER */}
      <div
        className="bg-white-opacity-90 backdrop-blur-lg p-4 items-center justify-between w-full flex px-10"
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
            {/* Map over navigation items from prop */}
            {navigation?.menuItems?.map((item: NavItem, index: number) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const linkHref = buildLink(item);

              return (
                <li key={index} className="py-2 relative">
                  {/* Parent link row */}
                  <div className="flex justify-between items-center">
                    {/* Link itself (click navigates) */}
                    <Link
                      href={linkHref}
                      className="nav-text"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {language === "es" ? item.labelESP : item.labelEU}
                    </Link>
                    {/* Submenu arrow if needed */}
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
                  {/* Submenu list */}
                  {hasSubmenu && (
                    <ul
                      className={`transition-max-height overflow-y-auto ${
                        openSubmenuIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu?.map((sub, subIdx) => {
                        const subHref = buildLink(sub);
                        return (
                          <li key={subIdx} style={{ padding: "0 1rem" }}>
                            <Link
                              href={subHref}
                              className="nav-text"
                              style={{ fontSize: "0.8rem" }}
                              onClick={() => setMobileMenuOpen(false)}
                            >
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

            {/* Language Switcher (unchanged classes) */}
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
