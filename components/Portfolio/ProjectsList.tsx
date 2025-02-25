// components/Portfolio/ProjectsList.tsx
"use client";

import { Arrow_r } from "@/public/svg/icon";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Breadcrumb from "@/layouts/breadcrumb";

// If a project can have multiple categories, each category is in an array
interface CategoryRef {
  _id: string;
  name: { es: string; eu: string };
  slug: { current: string };
}

interface Project {
  _id: string;
  // If your schema allows multiple categories, it's an array:
  categories: CategoryRef[];
  img: { asset: { url: string } };
  title: { es: string; eu: string };
  slug: { es: { current: string }; eu: { current: string } };
  // etc. (description, etc.) if needed for the card
}

// Data shape for the entire page
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
  const isotope = useRef<Isotope | null>(null);

  // Toggles the dropdown
  const handleClick = () => {
    setIsDropdown(!isDropdown);
  };

  // Initialize Isotope once after a short delay
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

  // When filterKey changes, tell Isotope to filter by that class
  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({ filter: filterKey ? `.${filterKey}` : "" });
    }
  }, [filterKey]);

  // For convenience, create a function that sets filterKey
  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

  // Use either the doc’s headerTitle or a default
  const pageTitle =
    data?.headerTitle?.[lang] || (lang === "es" ? "Proyectos" : "Proiektuak");

  return (
    <>
      <Breadcrumb firstChild={pageTitle} />
      <div className="industify_fn_portfolio_page">
        {/* The container that was originally present */}
        <div className="portfolio_list">
          <div className="container">
            {/* Original dropdown code */}
            <div className="filter">
              {/* The “button” text */}
              <a onClick={handleClick}>
                TODOS LOS PROYECTOS
                {/* If your CSS uses a pseudo-element for the arrow, 
                    you don't need an extra span. 
                    If you had an <span className="arrow" /> before, add it here. */}
              </a>
              <span className="spinner"></span>
              <ul
                className={isDropdown ? "fn_filter opened" : "fn_filter"}
                onClick={handleClick}
              >
                {/* “All projects” option */}
                <li>
                  <a
                    className={filterKey === "" ? "active" : ""}
                    onClick={handleFilterKeyChange("")}
                  >
                    Todos los Proyectos
                  </a>
                </li>
                {/* Dynamically map categories for the dropdown */}
                {data.categories?.map((cat) => (
                  <li key={cat._id}>
                    <a
                      className={filterKey === cat.slug.current ? "active" : ""}
                      onClick={handleFilterKeyChange(cat.slug.current)}
                    >
                      {cat.name[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="list_in">
              {/* The original .industify_fn_portfolio_list wrapper */}
              <ul className="industify_fn_portfolio_list">
                {data.projects?.map((project) => {
                  // Combine multiple category slugs into one string
                  const categoryClasses = project.categories
                    ?.map((c) => c.slug.current)
                    .join(" ");

                  return (
                    <li
                      key={project._id}
                      // Use the combined category classes + the original height class
                      className={`portfolio_item ${categoryClasses} h-[400px]`}
                    >
                      <div className="item h-[400px]">
                        <div className="item_in h-[400px]">
                          {/* Link to the detail page using the project’s slug */}
                          <Link
                            href={`/${lang}/${baseRoute}/${project.slug[lang].current}`}
                          />
                          <div className="img_holder h-[400px]">
                            {/* Original placeholder thumb */}
                            <img src="img/thumb/560-375.jpg" alt="" />
                            {/* The actual background image */}
                            <div
                              className="img_abs h-[400px]"
                              style={{
                                backgroundImage: `url(${project.img.asset.url})`,
                              }}
                            ></div>
                          </div>
                          <div className="title_holder ">
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
