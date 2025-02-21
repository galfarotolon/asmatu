"use client";

import ProjectItem from "./ProjectItem";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export interface ProjectRef {
  _id: string;
  title: { es: string; eu: string };
  slug: { es: { current: string }; eu: { current: string } };
  description: { es: any[]; eu: any[] }; // rich text (Portable Text)
  img: { asset: { url: string } };
}

export interface ProjectsSectionData {
  header: { es: string; eu: string };
  description: { es: any[]; eu: any[] };
  projectsLink: { es: { current: string }; eu: { current: string } };
}

interface HomeProjectProps {
  projectsSection: ProjectsSectionData;
  featuredProjects: ProjectRef[];
  baseprojectPath: string;
  lang: "es" | "eu";
}

export default function HomeProject({
  projectsSection,
  featuredProjects,
  baseprojectPath,
  lang,
}: HomeProjectProps) {
  // Build the "View All Projects" link using the projectsLink field.
  const allProjectsLink = `${lang}/${baseprojectPath}`;

  return (
    <div className="fn_cs_project_sticky_full">
      <div className="inner">
        <div className="left_part">
          <div className="fn_cs_sticky_section">
            <h3>{projectsSection.header[lang]}</h3>
            <PortableText value={projectsSection.description[lang]} />
            <Link href={allProjectsLink}>
              {lang === "es"
                ? "Ver Todos los Proyectos"
                : "Proiektu guztiak ikusi"}
            </Link>
          </div>
        </div>
        <div className="right_part">
          <div className="fn_cs_sticky_section">
            <ul>
              {featuredProjects.map((project) => {
                const slug =
                  lang === "es"
                    ? project.slug.es.current
                    : project.slug.eu.current;
                const link = `/${allProjectsLink}/${slug}`;
                return (
                  <ProjectItem
                    key={project._id}
                    title={project.title[lang]}
                    description={project.description[lang]}
                    imageUrl={project.img.asset.url}
                    link={link}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
