"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export default function MobileHeader() {
  const { language, switchLanguage, headerData } = useLanguage(); // Use language and headerData from context
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleLang = () => setLangOpen(!isLangOpen);

  const handleLanguageChange = (lang: "es" | "eu") => {
    switchLanguage(lang);
    setLangOpen(false); // Close the language dropdown after selecting a language
  };

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  // Disable background scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !document
          .getElementById("mobile-menu")
          ?.contains(event.target as Node) &&
        !document
          .getElementById("hamburger-icon")
          ?.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Render the mobile menu items based on headerData
  const renderMobileMenuItem = (item, parentPath = "", keyPrefix = "") => {
    const basePath = language === "es" ? "/" : "/eu";
    let currentPath;

    if (!item.slug) {
      currentPath = language === "es" ? "/" : "/eu";
    } else {
      currentPath = `${basePath}${basePath.endsWith("/") ? "" : "/"}${item.slug}`;
    }

    const hasSubItems = item.subItems && item.subItems.length > 0;
    const submenuKey = keyPrefix + item.slug;

    return (
      <li key={submenuKey} className="py-2 relative">
        <div
          className="flex justify-between items-center nav-text"
          onClick={() => hasSubItems && toggleSubmenu(submenuKey)}
        >
          <Link href={currentPath} onClick={toggleMobileMenu}>
            {item.title}
          </Link>
          {hasSubItems && (
            <span
              className={`transition-transform ${
                openSubmenus[submenuKey] ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          )}
        </div>

        {hasSubItems && (
          <ul
            className={`transition-max-height overflow-y-auto ${
              openSubmenus[submenuKey]
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {item.subItems.map((subItem, subIndex) =>
              subItem ? (
                <li key={subIndex} style={{ padding: "0 1rem" }}>
                  <Link
                    href={`${currentPath}/${subItem.slug}`}
                    className="nav-text"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.8rem" }}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        )}
      </li>
    );
  };

  if (!headerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="industify_fn_header displayed">
      {/* LOGO & HAMBURGER */}
      <div
        className="bg-white-opacity-90 backdrop-blur-lg p-4 items-center justify-between w-full flex px-10"
        style={{ justifyContent: "space-between", padding: "0 5%" }}
      >
        <div className="menu_logo">
          <Link href={language === "es" ? "/" : "/eu"}>
            <Image
              src={headerData.logos.light.url || "/img/logotipo-asmatu.png"}
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
            {headerData.menuItems.map((item, index) =>
              item ? renderMobileMenuItem(item, "", `menu-item-${index}`) : null
            )}

            {/* Language switch */}
            <div className="toll_free_lang" style={{ marginLeft: 0 }}>
              <div
                onClick={() => setToggled(!isToggled)}
                className={`nice-select ${isToggled ? "open" : ""}`}
              >
                <span className="current">{language.toUpperCase()}</span>
                <ul className="list">
                  <li
                    onClick={() => handleLanguageChange("es")}
                    className={`option ${language === "es" ? "selected focus" : ""}`}
                  >
                    ESP
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
          </ul>
        </nav>
      </div>
    </div>
  );
}
