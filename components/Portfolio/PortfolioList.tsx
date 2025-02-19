"use client";
import { Arrow_r } from "@/public/svg/icon";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import projects from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function PortfolioList() {
  const { language } = useLanguage();
  const [isDropdown, setIsDropdown] = useState(false);

  const handleClick = () => {
    setIsDropdown(!isDropdown);
  };

  const [filterKey, setFilterKey] = useState("");
  const isotope = useRef<Isotope | null>(null);

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".industify_fn_portfolio_list", {
        filter: "",
        itemSelector: ".portfolio_item",
        percentPosition: true,
        masonry: {
          columnWidth: ".portfolio_item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === ""
        ? isotope.current.arrange({ filter: "" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <div className="industify_fn_portfolio_page">
        {/* PORTFOLIO LIST */}
        <div className="portfolio_list ">
          <div className="container">
            <div className="filter">
              <a onClick={handleClick}>Todos los Proyectos</a>
              <span className="spinner"></span>
              <ul
                className={isDropdown ? "fn_filter opened" : "fn_filter"}
                onClick={handleClick}
              >
                <li>
                  <a
                    className={filterKey === "" ? "active" : ""}
                    onClick={handleFilterKeyChange("")}
                  >
                    Todos los Proyectos
                  </a>
                </li>
                <li>
                  <a
                    className={filterKey === "ingenieria-civil" ? "active" : ""}
                    onClick={handleFilterKeyChange("ingenieria-civil")}
                  >
                    Ingeniería Civil y Edificación
                  </a>
                </li>
                <li>
                  <a
                    className={
                      filterKey === "consultoria-ambiental" ? "active" : ""
                    }
                    onClick={handleFilterKeyChange("consultoria-ambiental")}
                  >
                    Consultoría Ambiental
                  </a>
                </li>
                <li>
                  <a
                    className={
                      filterKey === "planificacion-urbana" ? "active" : ""
                    }
                    onClick={handleFilterKeyChange("planificacion-urbana")}
                  >
                    Planificación y Diseño Urbano
                  </a>
                </li>
                <li>
                  <a
                    className={
                      filterKey === "consultoria-internacional" ? "active" : ""
                    }
                    onClick={handleFilterKeyChange("consultoria-internacional")}
                  >
                    Consultoría Internacional
                  </a>
                </li>
                <li>
                  <a
                    className={
                      filterKey === "gestion-proyectos" ? "active" : ""
                    }
                    onClick={handleFilterKeyChange("gestion-proyectos")}
                  >
                    Gestión de Proyectos
                  </a>
                </li>
              </ul>
            </div>
            <div className="list_in">
              <ul className="industify_fn_portfolio_list ">
                {projects.map((project, i) => (
                  <li
                    className={`portfolio_item ${project.category} h-[400px]`}
                    key={i}
                  >
                    <div className="item h-[400px]">
                      <div className="item_in h-[400px]">
                        <Link
                          href={`/${language === "es" ? "proyectos" : "proiektuak"}/${project.slugEs}`}
                        ></Link>
                        <div className="img_holder h-[400px]">
                          <img src="img/thumb/560-375.jpg" alt="" />
                          <div
                            className="img_abs h-[400px]"
                            style={{ backgroundImage: `url(${project.img})` }}
                          ></div>
                        </div>
                        <div className="title_holder ">
                          <h3>{project.title}</h3>
                          <p>
                            Ver Más
                            <Arrow_r className="fn__svg" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* /PORTFOLIO LIST */}
      </div>
    </>
  );
}
