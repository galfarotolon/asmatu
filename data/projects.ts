export interface Project {
    id: number;
    category: string;
    img: string;
    title: string;
    slugEs: string;
    slugEu: string;
    description: string;
    detailedInfo: string;
    quote: string;
    value: string;
    client: string;
    architect: string;
    location: string;
    completionDate: string;
    squareFootage: string;
    featured?: boolean;
  }
  
  const projects: Project[] = [
    {
      id: 1,
      category: "ingenieria-civil",
      img: "/img/portfolio/single/1/1.jpg",
      title: "Proyecto de obras de infraestructura para la Central de Oleaje en el Puerto de Mutriku",
      slugEs: "proyecto-de-obras-de-infraestructura-para-la-central-de-oleaje-en-el-puerto-de-mutriku",
      slugEu: "mutriku-ko-portuko-olatuen-zentralerako-azpiegitura-lanen-proiektua",
      description: "Descripción detallada del proyecto para la Central de Oleaje en el Puerto de Mutriku.",
      detailedInfo: "Información detallada sobre el proyecto, los métodos utilizados, y los beneficios esperados para la región.",
      quote: "Este proyecto representa un avance significativo en la infraestructura marítima.",
      value: "$2,900,000,000",
      client: "Servitas",
      architect: "PGAL Architects",
      location: "Diseñador Constructor",
      completionDate: "Agosto 2017",
      squareFootage: "2,200,000",
      featured: true
    },
    {
      id: 2,
      category: "consultoria-ambiental",
      img: "/img/portfolio/obra-destacada-asmatu.jpg",
      title: "Evaluación de impacto ambiental para la construcción de una nueva planta industrial",
      slugEs: "evaluacion-de-impacto-ambiental-para-la-construccion-de-una-nueva-planta-industrial",
      slugEu: "industria-planta-berri-bat-eraikitzeko-eragin-ambientalaren-ebaluazioa",
      description: "Descripción detallada de la evaluación de impacto ambiental para la nueva planta industrial.",
      detailedInfo: "Información detallada sobre los estudios ambientales realizados y las medidas de mitigación propuestas.",
      quote: "Este proyecto asegura un desarrollo industrial sostenible.",
      value: "$1,500,000,000",
      client: "EcoPlan",
      architect: "Green Architects",
      location: "Bilbao",
      completionDate: "Junio 2019",
      squareFootage: "1,800,000",
      featured: true
    },
    {
      id: 3,
      category: "planificacion-urbana",
      img: "/img/portfolio/molinos-viento.jpg",
      title: "Planificación y diseño urbano para el nuevo barrio residencial en Donostia",
      slugEs: "planificacion-y-diseno-urbano-para-el-nuevo-barrio-residencial-en-donostia",
      slugEu: "donostian-auzo-erresidential-berri-batentzako-hirigintza-eta-diseinu-urbanoa",
      description: "Descripción detallada de la planificación y diseño urbano para el nuevo barrio residencial en Donostia.",
      detailedInfo: "Información sobre el diseño urbano, los servicios públicos y las áreas verdes del nuevo barrio.",
      quote: "Este proyecto redefine el concepto de vida urbana.",
      value: "$3,200,000,000",
      client: "UrbanPlan",
      architect: "City Architects",
      location: "Donostia",
      completionDate: "Marzo 2020",
      squareFootage: "3,500,000",
      featured: true
    },
    {
      id: 4,
      category: "consultoria-internacional",
      img: "/img/portfolio/single/4/4.jpg",
      title: "Consultoría internacional para la expansión de infraestructuras en América Latina",
      slugEs: "consultoria-internacional-para-la-expansion-de-infraestructuras-en-america-latina",
      slugEu: "amerikako-latina-azpiegituren-hedapenerako-aholkularitza-nazionala",
      description: "Descripción detallada de la consultoría internacional para la expansión de infraestructuras en América Latina.",
      detailedInfo: "Detalles sobre los proyectos de infraestructura y las colaboraciones internacionales.",
      quote: "Nuestra experiencia global al servicio del desarrollo regional.",
      value: "$4,500,000,000",
      client: "LatAm Infra",
      architect: "Global Architects",
      location: "América Latina",
      completionDate: "Diciembre 2021",
      squareFootage: "4,000,000",
      featured: true
    },
    {
      id: 5,
      category: "gestion-proyectos",
      img: "/img/portfolio/single/5/5.jpg",
      title: "Gestión integral de proyectos de construcción en la región norte de España",
      slugEs: "gestion-integral-de-proyectos-de-construccion-en-la-region-norte-de-espana",
      slugEu: "espainiako-iparraldeko-eskualdean-eraikuntzako-proiektuen-kudeaketa-osagarria",
      description: "Descripción detallada de la gestión integral de proyectos de construcción en la región norte de España.",
      detailedInfo: "Información sobre la coordinación, planificación y ejecución de proyectos de gran escala.",
      quote: "Lideramos con excelencia cada fase del proyecto.",
      value: "$5,000,000,000",
      client: "ConstruPlan",
      architect: "North Architects",
      location: "Norte de España",
      completionDate: "Enero 2022",
      squareFootage: "5,500,000",
      featured: true
    }
  ];
  
  export default projects;
  