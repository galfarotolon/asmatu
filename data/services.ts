export interface Service {
    id: number;
    slugEs: string;
    slugEu: string;
    title: string;
    description: string;
    summary: string;
    image: string;
    features: string[];
  }
  
  const services: Service[] = [
    {
      id: 1,
      slugEs: "construccion-ingenieria",
      slugEu: "eraikuntza-ingeniaritza",
      title: "Construcción e Ingeniería",
      description: `
        Asegure la solidez, integridad y conformidad de sus procesos y productos de construcción e ingeniería utilizando los servicios especializados de Asmatu.
        Los sectores de la construcción y la ingeniería enfrentan un conjunto único de desafíos, como garantizar que los proyectos se completen a tiempo, que los productos utilizados sean seguros y de alta calidad, que los costos no se excedan, que se cumplan los estándares de responsabilidad social corporativa y que se aplique una gestión de riesgos efectiva en cada paso del proceso.
        En Asmatu, ofrecemos a su organización la orientación que necesita para fortalecer sus planes vitales de construcción e ingeniería. Ayudamos a nuestros clientes a optimizar y asegurar sus cadenas de suministro y procesos de fabricación, permitiendo la optimización de productos y proyectos. Además, nuestros programas y servicios pueden otorgar reconocimiento y validación a su negocio dentro de la industria.
        Somos su socio en la garantía de que sus productos y procesos sean sólidos, viables y estén preparados para cumplir con las demandas del mercado, dondequiera que haga negocios.
      `,
      summary: `
        Asegure la solidez y conformidad de sus procesos de construcción e ingeniería con los servicios especializados de Asmatu. Enfrente desafíos como la calidad de productos, costos, y gestión de riesgos. Optimice productos y proyectos, y gane reconocimiento dentro de la industria.
      `,
      image: "/img/service/single/apartado-area-edificacion.jpg",
      features: [
        "Preconstrucción y Consultoría",
        "Proyectos Pequeños y Mantenimiento",
        "Edificación Verde y Leed",
        "Diseño y Construcción",
        "Reutilización Adaptativa",
        "Nueva Construcción",
        "Interiores",
      ],
    },
    {
      id: 2,
      slugEs: "energia-renovable",
      slugEu: "energia-berriztagarria",
      title: "Energía Renovable",
      description: `
        Aumente la eficiencia y sostenibilidad de sus proyectos energéticos con nuestros servicios especializados en energías renovables.
        <br /><br />
        En Asmatu, estamos comprometidos con el desarrollo y la implementación de soluciones de energía renovable que no solo sean eficientes sino también sostenibles. Ayudamos a nuestros clientes a identificar, desarrollar y gestionar proyectos de energía renovable que maximicen la producción y minimicen los impactos ambientales.
        <br /><br />
        Nuestros servicios abarcan desde la consultoría y planificación hasta la implementación y mantenimiento de proyectos de energía solar, eólica, hidroeléctrica y de biomasa. Nos aseguramos de que cada proyecto cumpla con las normativas y estándares internacionales, proporcionando un enfoque integral y sostenible a sus necesidades energéticas.
      `,
      summary: `
        Mejore la eficiencia y sostenibilidad de sus proyectos energéticos con nuestros servicios especializados. Ofrecemos consultoría, planificación, implementación y mantenimiento de proyectos de energía solar, eólica, hidroeléctrica y de biomasa.
      `,
      image: "/img/service/single/energia-renovable.jpg",
      features: [
        "Consultoría en Energía Renovable",
        "Implementación de Proyectos Solares",
        "Desarrollo de Parques Eólicos",
        "Soluciones Hidroeléctricas",
        "Proyectos de Biomasa",
        "Mantenimiento de Instalaciones",
        "Optimización de Producción Energética",
      ],
    },
    {
      id: 3,
      slugEs: "arquitectura-sostenible",
      slugEu: "arkitektura-iraunkorra",
      title: "Arquitectura Sostenible",
      description: `
        Diseño y construcción de edificios sostenibles que respetan el medio ambiente y optimizan el uso de recursos.
        En Asmatu, nos especializamos en arquitectura sostenible, integrando prácticas y materiales ecológicos en todos nuestros proyectos. Nuestro objetivo es crear espacios que no solo sean funcionales y estéticamente agradables, sino también respetuosos con el medio ambiente.
        Desde la fase de diseño hasta la construcción final, consideramos factores como la eficiencia energética, el uso de materiales reciclables, la gestión del agua y la reducción de residuos. Trabajamos estrechamente con nuestros clientes para garantizar que cada proyecto no solo cumpla con sus expectativas, sino que también contribuya positivamente al entorno natural.
      `,
      summary: `
        Diseño y construcción de edificios sostenibles que respetan el medio ambiente. Integramos prácticas y materiales ecológicos en nuestros proyectos, considerando eficiencia energética, uso de materiales reciclables, gestión del agua y reducción de residuos.
      `,
      image: "/img/service/single/arquitectura-sostenible.jpg",
      features: [
        "Diseño Ecológico",
        "Uso de Materiales Reciclables",
        "Eficiencia Energética",
        "Gestión del Agua",
        "Reducción de Residuos",
        "Integración de Energías Renovables",
        "Certificaciones LEED",
      ],
    },
    // Add more services as needed
  ];
  
  export default services;
  
  

  const service1 = "/img/service/single/areas-actividad.jpg";
  const service2 = "/img/service/single/molinos-viento.jpg";
  const service3 = "/img/service/single/proyecto-urbanismo-asmatu.jpg";
  const service4 = "/img/service/single/area-internacional-asmatu.jpg";
  const service5 = "/img/service/single/apartado-area-edificacion.jpg";
export const SubmenuServices = [
    {
        link: "/servicios/construccion-ingenieria",
        img: "img/thumb/480-700.jpg",
        bg: service1,
        title: "Ingeniería Civil y Edificación"
    },
    {
        link: "/services/serviceSinglePage2",
        img: "img/thumb/480-700.jpg",
        bg: service2,
        title: "Consultoría Ambiental"
    },
    {
        link: "/services/serviceSinglePage3",
        img: "img/thumb/480-700.jpg",
        bg: service3,
        title: "Planificación y Diseño Urbano"
    },
    {
        link: "/services/serviceSinglePage4",
        img: "img/thumb/480-700.jpg",
        bg: service4,
        title: "Consultoría Internacional"
    },
    {
        link: "/services/serviceSinglePage5",
        img: "img/thumb/480-700.jpg",
        bg: service5,
        title: "Gestión de Proyectos"
    },
];
