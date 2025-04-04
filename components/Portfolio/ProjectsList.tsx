"use client";

import { Arrow_r } from "@/public/svg/icon";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Breadcrumb from "@/layouts/breadcrumb";

interface CategoryRef {
  _id: string;
  name: { es: string; eu: string };
  slug: { current: string };
}

interface Project {
  _id: string;
  categories: CategoryRef[];
  img: { asset: { url: string } } | null;
  title: { es: string; eu: string };
  slug: { es: { current: string }; eu: { current: string } };
}

interface ProjectsListData {
  headerTitle?: { es: string; eu: string };
  introText?: { es: string; eu: string };
  linkLabel?: { es: string; eu: string };
  projects: Project[];
  categories: CategoryRef[];
}

interface ProjectsListProps {
  data: ProjectsListData;
  lang: "es" | "eu";
  baseRoute: string;
}

export default function ProjectsList({
  data,
  lang,
  baseRoute,
}: ProjectsListProps) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [filterKey, setFilterKey] = useState("");
  // Set the default category label based on language:
  const defaultCategoryLabel =
    lang === "es" ? "TODOS LOS PROYECTOS" : "PROYEKTU GUZTIRA";
  const [selectedCategoryLabel, setSelectedCategoryLabel] =
    useState(defaultCategoryLabel);
  const isotope = useRef<Isotope | null>(null);

  // Toggle dropdown
  const handleClick = () => {
    setIsDropdown(!isDropdown);
  };

  // Initialize Isotope
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".industify_fn_portfolio_list", {
        filter: "",
        itemSelector: ".portfolio_item",
        percentPosition: true,
        masonry: {
          columnWidth: ".portfolio_item",
        },
        transitionDuration: "0.75s",
      });
    }, 1000);
  }, []);

  // When filterKey changes, update Isotope filtering
  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({ filter: filterKey ? `.${filterKey}` : "" });
    }
  }, [filterKey]);

  // Update filter and selected label when a category is chosen
  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
    if (key === "") {
      setSelectedCategoryLabel(defaultCategoryLabel);
    } else {
      // Find the category object from the data
      const cat = data.categories.find((c) => c.slug.current === key);
      setSelectedCategoryLabel(cat ? cat.name[lang] : key);
    }
  };

  const pageTitle =
    data?.headerTitle?.[lang] || (lang === "es" ? "Proyectos" : "Proiektuak");

  return (
    <>
      <Breadcrumb firstChild={pageTitle} />
      <div className="industify_fn_portfolio_page">
        <div className="portfolio_list">
          <div className="container">
            <div className="filter">
              {/* Button shows the currently selected category label */}
              <a onClick={handleClick}>{selectedCategoryLabel}</a>
              <span className="spinner"></span>
              <ul
                className={isDropdown ? "fn_filter opened" : "fn_filter"}
                onClick={handleClick}
              >
                <li>
                  <a
                    className={filterKey === "" ? "active" : ""}
                    onClick={handleFilterKeyChange("")}
                    style={{ cursor: "pointer" }}
                  >
                    {defaultCategoryLabel}
                  </a>
                </li>
                {data.categories?.map((cat) => (
                  <li key={cat._id}>
                    <a
                      className={filterKey === cat.slug.current ? "active" : ""}
                      onClick={handleFilterKeyChange(cat.slug.current)}
                      style={{ cursor: "pointer" }}
                    >
                      {cat.name[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="list_in">
              <ul className="industify_fn_portfolio_list">
                {data.projects?.map((project) => {
                  const categoryClasses = project.categories
                    ?.map((c) => c.slug.current)
                    .join(" ");
                  return (
                    <li
                      key={project._id}
                      className={`portfolio_item ${categoryClasses} h-[400px]`}
                    >
                      <div className="item h-[400px]">
                        <div className="item_in h-[400px]">
                          <Link
                            href={`/${lang}/${baseRoute}/${project.slug[lang].current}`}
                          />
                          <div className="img_holder h-[400px]">
                            <img src="img/thumb/560-375.jpg" alt="" />
                            <div
                              className="img_abs h-[400px]"
                              style={{
                                backgroundImage:
                                  project.img && project.img.asset
                                    ? `url(${project.img.asset.url})`
                                    : "none",
                              }}
                            ></div>
                          </div>
                          <div className="title_holder">
                            <h3>{project.title[lang]}</h3>
                            <p>
                              Ver Más
                              <Arrow_r className="fn__svg" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
