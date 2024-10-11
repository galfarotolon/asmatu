"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import { SubmenuServices } from "@/data/services";

export default function MobileHeader() {
  const { language, switchLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAreasOpen, setAreasOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);
  const [isSelect, setSelect] = useState(language);
  const [isToggled, setToggled] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleAreas = () => setAreasOpen(!isAreasOpen);
  const toggleLang = () => setLangOpen(!isLangOpen);

  const handleLanguageChange = (lang: "ESP" | "EU") => {
    setSelect(lang);
    switchLanguage(lang);
    setLangOpen(false); // Close the language dropdown after selecting a language
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
          className={`hamburger hamburger--collapse-r ${
            isMobileMenuOpen ? "is-active" : ""
          }`}
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
          <ul className="flex flex-col ">
            <li className="py-2">
              <Link href="/" className="nav-text" onClick={toggleMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/proyectos"
                className="nav-text"
                onClick={toggleMobileMenu}
              >
                Proyectos
              </Link>
            </li>
            <li className="py-2 relative">
              <div
                className="flex justify-between items-center  nav-text"
                onClick={toggleAreas}
              >
                <span>Areas de actividad</span>
                <span
                  className={`transition-transform ${
                    isAreasOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              <ul
                className={`transition-max-height overflow-y-auto ${
                  isAreasOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {SubmenuServices.map((service, index) => (
                  <li key={index} style={{ padding: "0 1rem" }}>
                    <Link
                      href={service.linkEs}
                      className="nav-text"
                      onClick={toggleMobileMenu}
                      style={{ fontSize: "0.8rem" }}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="py-2">
              <Link
                href="/blog"
                className="nav-text"
                onClick={toggleMobileMenu}
              >
                blog
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/contact"
                className="nav-text"
                onClick={toggleMobileMenu}
              >
                contacto
              </Link>
            </li>
            <div className="toll_free_lang " style={{ marginLeft: 0 }}>
              <div
                onClick={() => setToggled(!isToggled)}
                className={`nice-select ${isToggled ? "open" : ""}`}
              >
                <span className="current">{isSelect}</span>
                <ul className="list">
                  <li
                    onClick={() => handleLanguageChange("ESP")}
                    className={`option ${
                      isSelect === "ESP" ? "selected focus" : ""
                    }`}
                  >
                    ESP
                  </li>
                  <li
                    onClick={() => handleLanguageChange("EU")}
                    className={`option ${
                      isSelect === "EU" ? "selected focus" : ""
                    }`}
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
