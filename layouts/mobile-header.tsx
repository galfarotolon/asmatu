"use client";
import Link from "next/link";
import { useState } from "react";
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
  const toggleTrueFalse = () => setToggled(!isToggled);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleAreas = () => setAreasOpen(!isAreasOpen);
  const toggleLang = () => setLangOpen(!isLangOpen);

  const handleLanguageChange = (lang: "ESP" | "EU") => {
    setSelect(lang);
    switchLanguage(lang);
    setLangOpen(false); // Close the language dropdown after selecting a language
  };

  return (
    <div className="industify_fn_header z-50 displayed">
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
        className={`transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "block" : "hidden"
        } backdrop-blur-lg header_mobile`}
      >
        <nav className="p-4 text-lg">
          <ul className="flex flex-col">
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
                Projects
              </Link>
            </li>
            <li className="py-2 relative">
              <div
                className="flex justify-between items-center cursor-pointer nav-text"
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
                className={`transition-max-height overflow-hidden ${
                  isAreasOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {SubmenuServices.map((service, index) => (
                  <li key={index} style={{ padding: "0 2.5rem" }}>
                    <Link
                      href={service.link}
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
                {t("blog")}
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/contact"
                className="nav-text"
                onClick={toggleMobileMenu}
              >
                {t("contact")}
              </Link>
            </li>
            <div className="toll_free_lang " style={{ marginLeft: 0 }}>
              <div
                onClick={toggleTrueFalse}
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
