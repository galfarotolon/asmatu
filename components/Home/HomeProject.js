'use client'
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import projects from "@/data/projects";
import { useLanguage } from "../../context/LanguageContext";

export default function HomeProject() {
    const { language } = useLanguage();
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <div className="fn_cs_project_sticky_full">
            <div className="inner">
                <div className="left_part">
                    <div className="fn_cs_sticky_section">
                        <h3>Nuestros últimos proyectos.</h3>
                        <p>
                            En Asmatu, nos basamos en la honestidad, la disciplina y el
                            trabajo duro, y creemos que nuestro éxito se debe a mantener un
                            conjunto simple de valores fundamentales que se remontan al
                            comienzo de la empresa.
                        </p>
                        <p>
                            Asmatu es una firma de diseño-construcción integrada que ofrece
                            servicios de ingeniería, arquitectura y construcción a clientes
                            nacionales e internacionales. Lo que hace única a Asmatu es el
                            hecho de que realizamos todas las disciplinas internamente en un
                            entorno colaborativo.
                        </p>
                        <Link href="/portfolio">Ver Todos los Proyectos</Link>
                    </div>
                </div>
                <div className="right_part">
                    <div className="fn_cs_sticky_section">
                        <ul>
                            {featuredProjects.map((project) => (
                                <ProjectItem
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.img}
                                    link={`/${language === "ESP" ? "proyectos" : "proiektuak"}/${language === "ESP" ? project.slugEs : project.slugEu}`}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
