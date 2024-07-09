// components/MobileHeader.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import { SubmenuServices } from "@/data/services";

export default function MobileHeader() {
  const { language, switchLanguage, t } = useLanguage();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);

  const [isActive, setIsActive] = useState<{ status: boolean; key: string }>({
    status: false,
    key: "",
  });

  const handleToggle = (key: string) => {
    setIsActive((prevState) => ({
      status: prevState.key !== key,
      key: prevState.key !== key ? key : "",
    }));
  };

  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  const [isSelect, setSelect] = useState(language);

  const handleLanguageChange = (lang: "ESP" | "EU") => {
    setSelect(lang);
    switchLanguage(lang);
  };

  return (
    <div className="industify_fn_mobilemenu_wrap">
      <div className="industify_fn_toppanel"></div>
      {/* TOLL FREE MOBILE */}
      <div className="m_toll_free_lang">
        <div className="lang_switcher">
          <ul>
            <li
              className={isSelect === "ESP" ? "active" : ""}
              onClick={() => handleLanguageChange("ESP")}
            >
              <span>ESP</span>
            </li>
            <li
              className={isSelect === "EU" ? "active" : ""}
              onClick={() => handleLanguageChange("EU")}
            >
              <span>EU</span>
            </li>
          </ul>
        </div>
      </div>
      {/* LOGO & HAMBURGER */}
      <div className="logo_hamb">
        <div className="in">
          <div className="menu_logo">
            <Link href="/">
              <img src="/img/logotipo-blanco-asmatu.png" alt="Asmatu Logo" />
            </Link>
          </div>
          <div
            onClick={MobileMenuTrueFalse}
            className={
              !isMobileMenu
                ? "hamburger hamburger--collapse-r"
                : "hamburger hamburger--collapse-r is-active"
            }
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE DROPDOWN MENU */}
      <div
        className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}
      >
        <div>
          <nav>
            <ul className="mmenu">
              <li>
                <Link
                  href="/"
                  className={`${isActive.key === "1" ? "mm-active" : ""}`}
                  onClick={() => handleToggle("1")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/proyectos">Projects</Link>
              </li>
              <li className="menu-item-has-children">
                <a
                  className={`has-arrow ${
                    isActive.key === "2" ? "mm-active" : ""
                  }`}
                  onClick={() => handleToggle("2")}
                >
                  {t("services")}
                </a>
                <ul
                  className={`mm-collapse ${
                    isActive.key === "2" ? "mm-show" : ""
                  }`}
                >
                  {SubmenuServices.map((service, index) => (
                    <li key={index}>
                      <Link href={service.link}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link href="/blog">{t("blog")}</Link>
              </li>
              <li>
                <Link href="/contact">{t("contact")}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
