"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export default function DesktopHeader() {
  const { language, switchLanguage, t } = useLanguage();
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  const [isSelect, setSelect] = useState(language);

  const handleLanguageChange = (lang: "ESP" | "EU") => {
    setSelect(lang);
    switchLanguage(lang);
  };

  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          // Adjust this value as needed
          headerRef.current.classList.add("nav-scrolled");
        } else {
          headerRef.current.classList.remove("nav-scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={headerRef}
      className="industify_fn_header sticky top-0 bg-white shadow-md z-50"
    >
      <div className="header_inner">
        <div className="menu_logo">
          <Link href="/">
            <Image
              className="desktop_logo"
              src="/img/logotipo-blanco-asmatu.png"
              alt="Asmatu Logo"
              width={120}
              height={80}
            />
            <Image
              className="desktop_logo_dark"
              src="/img/logo-dark.png"
              alt="Asmatu Logo"
              width={200}
              height={80}
            />
          </Link>
        </div>
        <div className="menu_nav">
          <ul className="industify_fn_main_nav vert_nav">
            <li>
              <Link href="/">{t("home")}</Link>
            </li>
            <li>
              <Link href="/projects">{t("projects")}</Link>
            </li>
            <li className="menu-item-has-children">
              <Link href="/services">{t("services")}</Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/services/civil-engineering">
                    {t("civilEngineering")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/urbanism">{t("urbanism")}</Link>
                </li>
                <li>
                  <Link href="/services/building">{t("building")}</Link>
                </li>
                <li>
                  <Link href="/services/environment">{t("environment")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog">{t("blog")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>
        <div className="toll_free_lang">
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
      </div>
    </div>
  );
}
