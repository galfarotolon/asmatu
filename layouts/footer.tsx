"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface FooterProps {
  settings: {
    address?: { es?: string[]; eu?: string[] } | { [key: string]: any };
    phone?: string;
    fax?: string;
    email?: string;
    careersLinkLabel?: { es?: string; eu?: string };
    careersLinkHref?: string;
    workingHours?: {
      weekdays?: { es: string; eu: string };
      saturday?: { es: string; eu: string };
      sunday?: { es: string; eu: string };
    };
  };
  navigation: {
    footerItems?: Array<{
      href: string;
      title: { es: string; eu: string };
    }>;
  };
  baseRoute?: string;
}

export default function Footer({
  settings,
  navigation,
  baseRoute,
}: FooterProps) {
  const { language } = useLanguage(); // "es" or "eu"

  if (!settings || !navigation) return null;

  // Destructure site settings
  const {
    address,
    phone,
    fax,
    email,
    careersLinkLabel,
    careersLinkHref,
    workingHours,
  } = settings;

  // Convert workingHours (object with weekdays, saturday, sunday) into an array
  const officeHours = workingHours
    ? Object.entries(workingHours).map(([key, value]) => ({
        day: key, // key will be "weekdays", "saturday", or "sunday"
        hours: value[language] || "",
      }))
    : [];

  // Get footer items from navigation
  const { footerItems = [] } = navigation;

  return (
    <footer className="industify_fn_footer">
      <div className="top_footer">
        <div
          className="top_footer_img"
          style={{ background: "url(/img/footer/footer.jpg)" }}
        ></div>

        {/* Main Info Section */}
        <div className="footer_widget">
          <div className="container">
            <div className="inner">
              <ul className="widget_area">
                {/* Column 1: Address and Contact Info */}
                <li>
                  <div className="item">
                    <div className="wid-title">
                      <span>
                        {language === "es"
                          ? "Parque Empresarial Zuatzu"
                          : "Zuatzu Enpresa Parkea"}
                      </span>
                    </div>
                    <div className="textwidget">
                      {address?.[language] && Array.isArray(address[language])
                        ? address[language].map((line: string, idx: number) => (
                            <p key={idx}>{line}</p>
                          ))
                        : address?.[language] && <p>{address[language]}</p>}
                      {phone && <p>Tel: {phone}</p>}
                      {fax && <p>Fax: {fax}</p>}
                      {email && <p>Email: {email}</p>}
                      {careersLinkHref && (
                        <Link href={careersLinkHref}>
                          {careersLinkLabel?.[language] ||
                            (language === "es"
                              ? "TRABAJA CON NOSOTROS"
                              : "LANZA ZURE KARRERA")}
                        </Link>
                      )}
                    </div>
                  </div>
                </li>

                {/* Column 2: Office Hours */}
                <li>
                  <div className="item">
                    <div className="wid-title">
                      <span>
                        {language === "es"
                          ? "Horario de Oficina"
                          : "Ostaneko Orduak"}
                      </span>
                    </div>
                    <div className="industify_fn_widget_business_hours">
                      <div>
                        <ul>
                          {officeHours.length > 0 ? (
                            officeHours.reverse().map((oh, idx) => (
                              <li key={idx}>
                                <div className="day_item">
                                  <span className="day">
                                    {oh.day === "weekdays"
                                      ? language === "es"
                                        ? "Lunes-Viernes"
                                        : "Astelehen-Asteosteko"
                                      : oh.day === "saturday"
                                        ? language === "es"
                                          ? "Sábado"
                                          : "Larunbata"
                                        : oh.day === "sunday"
                                          ? language === "es"
                                            ? "Domingo"
                                            : "Igandea"
                                          : oh.day}
                                    :
                                  </span>
                                  <span className="hours">{oh.hours}</span>
                                </div>
                              </li>
                            ))
                          ) : (
                            <li>
                              {language === "es"
                                ? "No se han definido horarios"
                                : "Ez dira orduak zehaztu"}
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Column 3: Useful Links */}
                <li>
                  <div className="item">
                    <div className="wid-title">
                      <span>
                        {language === "es"
                          ? "Enlaces Útiles"
                          : "Esteka Erabilgarriak"}
                      </span>
                    </div>
                    <div className="widget_nav_menu">
                      <ul className="menu">
                        {footerItems.map((item: any, idx: number) => (
                          <li key={idx}>
                            <Link
                              href={`/${language}/${item?.[language].current}`}
                            >
                              {item.title[language]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Main Info Section */}
      </div>

      {/* BOTTOM */}
      <div className="footer_bottom">
        <div className="container">
          <div className="footer_bottom_in">
            <div className="bottom_widget">
              <div className="widget_nav_menu">
                <ul className="menu"></ul>
              </div>
            </div>
            <div className="footer_copyright">
              <p>
                {language === "es"
                  ? "© 2025 Asmatu. Todos los derechos reservados."
                  : "© 2025 Asmatu. Eskubide guztiak erreserbatuta."}
              </p>
            </div>
            <Link href="#" className="industify_fn_totop">
              <span className="top"></span>
              <span className="text">
                {language === "es" ? "Arriba" : "Goian"}
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* /BOTTOM */}
    </footer>
  );
}
