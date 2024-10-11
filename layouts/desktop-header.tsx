// components/DesktopHeader.tsx
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import { MenuItem } from "@/sanity/lib/sanity-utils"; // Asegúrate de ajustar la ruta

export default function DesktopHeader() {
  const { language, switchLanguage, headerData } = useLanguage();
  const [isToggled, setToggled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

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

  /**
   * Renderiza un elemento de menú, manejando rutas anidadas para submenús.
   * @param item - El elemento de menú actual.
   * @param parentPath - La ruta base del elemento padre.
   * @returns Un elemento <li> con el enlace correspondiente.
   */
  const renderMenuItem = (item: MenuItem, parentPath: string = "") => {
    // Determinar la URL base según el idioma
    const basePath = language === "es" ? "/" : "/eu";

    // Construir la ruta actual del elemento
    let currentPath: string;

    if (!item.slug) {
      // Caso especial para 'Inicio'
      currentPath = language === "es" ? "/" : "/eu";
    } else {
      if (parentPath === "") {
        // Elemento de menú principal con slug
        currentPath = `${basePath}${basePath.endsWith("/") ? "" : "/"}${item.slug}`;
      } else {
        // Submenú: anidar el slug al parentPath
        currentPath = `${parentPath}${parentPath.endsWith("/") ? "" : "/"}${item.slug}`;
      }
    }

    // Asegurarse de que currentPath sea una cadena
    currentPath = String(currentPath);

    // Asignar href basado en currentPath
    const href: string = currentPath;

    // Generar una clave única para el elemento de la lista
    // Es preferible usar un identificador único como _key o _id de Sanity
    const key =
      item._key ||
      item.slug ||
      item.title ||
      Math.random().toString(36).substr(2, 9);

    return (
      <li
        key={key}
        className={
          item.subItems && item.subItems.length > 0
            ? "menu-item-has-children"
            : ""
        }
      >
        <Link href={href}>{item.title}</Link>
        {item.subItems && item.subItems.length > 0 && (
          <ul className="sub-menu">
            {item.subItems.map((subItem) =>
              subItem ? renderMenuItem(subItem, currentPath) : null
            )}
          </ul>
        )}
      </li>
    );
  };

  const toggleLanguageDropdown = () => setToggled(!isToggled);

  // Actualizar handleLanguageChange para aceptar el evento y detener la propagación
  const handleLanguageChange = (
    newLang: "es" | "eu",
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.stopPropagation(); // Prevenir que el evento burbujee hacia arriba al div padre
    switchLanguage(newLang);
    setToggled(false);
  };

  if (!headerData) {
    return <div>Loading...</div>;
  }

  return (
    <div ref={headerRef} className="industify_fn_header">
      <div className="header_inner">
        <div className="menu_logo">
          <Link href={language === "es" ? "/" : "/eu"}>
            <Image
              className="desktop_logo"
              src={headerData.logos.light.url || "/img/logotipo-asmatu.png"}
              alt="Asmatu Logo"
              width={120}
              height={80}
              priority
            />
            <Image
              className="desktop_logo_dark"
              src={headerData.logos.dark.url || "/img/logotipo-asmatu.png"}
              alt="Asmatu Logo"
              width={120}
              height={80}
              priority
            />
          </Link>
        </div>
        <div className="menu_nav">
          <ul className="industify_fn_main_nav vert_nav">
            {headerData.menuItems.map((item) =>
              item ? renderMenuItem(item) : null
            )}
          </ul>
        </div>
        <div className="toll_free_lang">
          <div
            onClick={toggleLanguageDropdown}
            className={`nice-select ${isToggled ? "open" : ""}`}
            role="button"
            aria-haspopup="listbox"
            aria-expanded={isToggled}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleLanguageDropdown();
              }
            }}
          >
            <span className="current">{language.toUpperCase()}</span>
            <ul className="list" role="listbox">
              <li
                onClick={(e) => handleLanguageChange("es", e)}
                className={`option ${language === "es" ? "selected focus" : ""}`}
                role="option"
                aria-selected={language === "es"}
                tabIndex={-1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleLanguageChange("es", e as any);
                  }
                }}
              >
                ESP
              </li>
              <li
                onClick={(e) => handleLanguageChange("eu", e)}
                className={`option ${language === "eu" ? "selected focus" : ""}`}
                role="option"
                aria-selected={language === "eu"}
                tabIndex={-1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleLanguageChange("eu", e as any);
                  }
                }}
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
