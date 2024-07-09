"use client";
import { Arrow_r } from "@/public/svg/icon";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import projects from "@/data/projects";
import { useInView } from "react-intersection-observer";

export default function PortfolioList() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [filterKey, setFilterKey] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 6));
  const [hasMore, setHasMore] = useState(true);
  const isotope = useRef<Isotope | null>(null);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && hasMore) {
      loadMoreProjects();
    }
  }, [inView]);

  const loadMoreProjects = () => {
    const currentLength = visibleProjects.length;
    const moreProjects = projects.slice(currentLength, currentLength + 6);
    if (moreProjects.length === 0) {
      setHasMore(false);
    } else {
      setVisibleProjects(visibleProjects.concat(moreProjects));
    }
    setTimeout(() => {
      if (isotope.current) {
        isotope.current.reloadItems();
        isotope.current.arrange();
      }
    }, 500);
  };

  const handleClick = () => {
    setIsDropdown(!isDropdown);
  };

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".industify_fn_portfolio_list", {
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

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
    const filteredProjects = key
      ? projects.filter((project) => project.category === key)
      : projects;
    setVisibleProjects(filteredProjects.slice(0, 6));
    setHasMore(filteredProjects.length > 6);
  };

  return (
    <div className="industify_fn_portfolio_page">
      <div className="portfolio_list">
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
                  className={filterKey === "gestion-proyectos" ? "active" : ""}
                  onClick={handleFilterKeyChange("gestion-proyectos")}
                >
                  Gestión de Proyectos
                </a>
              </li>
            </ul>
          </div>
          <div className="list_in">
            <ul className="industify_fn_portfolio_list">
              {visibleProjects.map((project, i) => (
                <li className={`portfolio_item ${project.category}`} key={i}>
                  <div className="item">
                    <div className="item_in">
                      <Link href={`/proyectos/${project.slug}`}></Link>
                      <div className="img_holder">
                        <img src="img/thumb/560-375.jpg" alt="" />
                        <div
                          className="img_abs"
                          style={{ backgroundImage: `url(${project.img})` }}
                        ></div>
                      </div>
                      <div className="title_holder">
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
            {hasMore && (
              <div ref={ref} className="loading">
                <p>Cargando más proyectos...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
