"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function DesktopHeader({ navigation }) {
  const { language, switchLanguage, t } = useLanguage();
  const [isToggled, setToggled] = useState(false);
  const [isSelect, setSelect] = useState(language);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const toggleTrueFalse = () => setToggled(!isToggled);
  const handleLanguageChange = (lang: "ESP" | "EU") => {
    setSelect(lang);
    switchLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
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
            />
            <Image
              className="desktop_logo_dark"
              src="/img/logotipo-asmatu.png"
              alt="Asmatu Logo"
              width={120}
              height={80}
            />
          </Link>
        </div>
        <div className="menu_nav">
          <ul className="industify_fn_main_nav vert_nav">
            {navigation?.menuItems?.map((item, index) => (
              <li key={index}>
                <Link
                  href={
                    language === "ESP"
                      ? item.slugESP?.current || "#"
                      : item.slugEU?.current || "#"
                  }
                >
                  {language === "ESP" ? item.labelESP : item.labelEU}
                </Link>
                {item.submenu && item.submenu.length > 0 && (
                  <ul className="sub-menu">
                    {item.submenu.map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          href={
                            language === "ESP"
                              ? sub.slugESP?.current || "#"
                              : sub.slugEU?.current || "#"
                          }
                        >
                          {language === "ESP" ? sub.labelESP : sub.labelEU}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
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
                className={`option ${isSelect === "ESP" ? "selected focus" : ""}`}
              >
                ESP
              </li>
              <li
                onClick={() => handleLanguageChange("EU")}
                className={`option ${isSelect === "EU" ? "selected focus" : ""}`}
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
