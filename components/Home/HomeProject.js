import ProjectItem from "./ProjectItem";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Proyecto y dirección de obra de la mejora del acceso marítimo al puerto de Mutriku",
        description:
            "Superamos la inspección, prueba y certificación de productos; somos un proveedor de aseguramiento de calidad total para industrias en todo el mundo.",
        imageUrl: "/img/portfolio/obra-destacada-asmatu.jpg",
        link: "/portfolio/portfolioSinglePage1"
    },
    {
        id: 2,
        title: "Asmatu Proyecto de Energía Solar",
        description:
            "Superamos la inspección, prueba y certificación de productos; somos un proveedor de aseguramiento de calidad total para industrias en todo el mundo.",
        imageUrl: "/img/portfolio/obra-destacada-asmatu.jpg",
        link: "/portfolio/portfolioSinglePage2"
    },
    {
        id: 3,
        title: "Asmatu Proyecto de Energía Solar",
        description:
            "Superamos la inspección, prueba y certificación de productos; somos un proveedor de aseguramiento de calidad total para industrias en todo el mundo.",
        imageUrl: "/img/portfolio/obra-destacada-asmatu.jpg",
        link: "/portfolio/portfolioSinglePage3"
    },
    {
        id: 4,
        title: "Asmatu Proyecto de Energía Solar",
        description:
            "Superamos la inspección, prueba y certificación de productos; somos un proveedor de aseguramiento de calidad total para industrias en todo el mundo.",
        imageUrl: "/img/portfolio/obra-destacada-asmatu.jpg",
        link: "/portfolio/portfolioSinglePage4"
    }
];

export default function HomeProject() {
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
                            {projects.map((project) => (
                                <ProjectItem
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.imageUrl}
                                    link={project.link}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
