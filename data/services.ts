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
      slugEs: "ingenieria-civil-edificacion",
      slugEu: "ingenieritza-zibila-eraikuntza",
      title: "Ingeniería Civil y Edificación",
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
      slugEs: "consultoria-ambiental",
      slugEu: "aholkularitza-ingurumena",
      title: "Consultoría Ambiental",
      description: `
          Proporcione soluciones sostenibles y respetuosas con el medio ambiente con nuestros servicios de consultoría ambiental.
          En Asmatu, estamos comprometidos con el desarrollo y la implementación de soluciones ambientales que no solo sean eficientes sino también sostenibles. Ayudamos a nuestros clientes a identificar, desarrollar y gestionar proyectos ambientales que maximicen la sostenibilidad y minimicen los impactos negativos.
          Nuestros servicios abarcan desde la consultoría y planificación hasta la implementación y mantenimiento de proyectos ambientales. Nos aseguramos de que cada proyecto cumpla con las normativas y estándares internacionales, proporcionando un enfoque integral y sostenible a sus necesidades ambientales.
      `,
      summary: `
          Mejore la sostenibilidad de sus proyectos con nuestros servicios especializados en consultoría ambiental. Ofrecemos consultoría, planificación, implementación y mantenimiento de proyectos ambientales.
      `,
      image: "/img/service/single/molinos-viento.jpg",
      features: [
          "Consultoría en Sostenibilidad",
          "Evaluaciones de Impacto Ambiental",
          "Gestión de Residuos",
          "Protección de la Biodiversidad",
          "Soluciones para el Cambio Climático",
          "Gestión del Agua",
          "Educación y Concienciación Ambiental",
      ],
  },
  {
      id: 3,
      slugEs: "planificacion-diseno-urbano",
      slugEu: "hirigintza-plangintza-diseinua",
      title: "Planificación y Diseño Urbano",
      description: `
          Diseñe y planifique ciudades sostenibles y funcionales con nuestros servicios de planificación y diseño urbano.
          En Asmatu, nos especializamos en la creación de espacios urbanos que no solo sean funcionales y estéticamente agradables, sino también sostenibles. Consideramos factores como la eficiencia energética, la movilidad, la gestión de residuos y la integración de espacios verdes.
          Trabajamos estrechamente con nuestros clientes para garantizar que cada proyecto no solo cumpla con sus expectativas, sino que también contribuya positivamente al entorno urbano y a la calidad de vida de sus habitantes.
      `,
      summary: `
          Diseñe y planifique ciudades sostenibles con nuestros servicios especializados en planificación y diseño urbano. Integramos prácticas sostenibles y consideramos la eficiencia energética, movilidad y gestión de residuos.
      `,
      image: "/img/service/single/proyecto-urbanismo-asmatu.jpg",
      features: [
          "Diseño Urbano Sostenible",
          "Movilidad Urbana",
          "Integración de Espacios Verdes",
          "Gestión de Residuos",
          "Eficiencia Energética",
          "Desarrollo de Infraestructuras",
          "Participación Ciudadana",
      ],
  },
  {
      id: 4,
      slugEs: "consultoria-internacional",
      slugEu: "aholkularitza-nazionala",
      title: "Consultoría Internacional",
      description: `
          Expanda sus operaciones a nivel global con nuestros servicios de consultoría internacional.
          En Asmatu, proporcionamos a nuestros clientes la orientación y el apoyo necesarios para expandir sus operaciones a nivel internacional. Ayudamos a nuestros clientes a navegar por los desafíos y oportunidades del mercado global.
          Nuestros servicios incluyen la identificación de oportunidades de mercado, el desarrollo de estrategias de entrada al mercado, la gestión de riesgos y la conformidad con las normativas internacionales. Nos aseguramos de que cada proyecto se realice de manera eficiente y conforme a los estándares internacionales.
      `,
      summary: `
          Expanda sus operaciones globalmente con nuestros servicios especializados en consultoría internacional. Ofrecemos orientación y apoyo en la identificación de oportunidades de mercado, estrategias de entrada y gestión de riesgos.
      `,
      image: "/img/service/single/area-internacional-asmatu.jpg",
      features: [
          "Estrategias de Entrada al Mercado",
          "Identificación de Oportunidades de Mercado",
          "Gestión de Riesgos",
          "Conformidad con Normativas Internacionales",
          "Desarrollo de Negocios Internacionales",
          "Análisis de Competencia",
          "Asesoramiento en Inversiones",
      ],
  },
  {
      id: 5,
      slugEs: "gestion-proyectos",
      slugEu: "proiektu-kudeaketa",
      title: "Gestión de Proyectos",
      description: `
          Asegure el éxito de sus proyectos con nuestros servicios especializados en gestión de proyectos.
          En Asmatu, ofrecemos una gestión integral de proyectos desde la planificación hasta la ejecución y el cierre. Ayudamos a nuestros clientes a alcanzar sus objetivos de manera eficiente y efectiva, garantizando la calidad y el cumplimiento de plazos y presupuestos.
          Nuestros servicios incluyen la planificación de proyectos, la gestión de recursos, la supervisión de la ejecución y la evaluación de resultados. Trabajamos estrechamente con nuestros clientes para asegurar el éxito de cada proyecto.
      `,
      summary: `
          Asegure el éxito de sus proyectos con nuestros servicios especializados en gestión de proyectos. Ofrecemos planificación, gestión de recursos, supervisión de la ejecución y evaluación de resultados.
      `,
      image: "/img/service/single/areas-actividad.jpg",
      features: [
          "Planificación de Proyectos",
          "Gestión de Recursos",
          "Supervisión de la Ejecución",
          "Evaluación de Resultados",
          "Cumplimiento de Plazos y Presupuestos",
          "Control de Calidad",
          "Gestión de Riesgos",
      ],
  },
];

export default services;

export const SubmenuServices = services.map(service => ({
  linkEs: `/servicios/${service.slugEs}`,
  linkEu: `/services/${service.slugEu}`,
  img: "img/thumb/480-700.jpg",
  bg: service.image,
  title: service.title
}));
