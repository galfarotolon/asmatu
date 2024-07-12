export interface Logo {
    name: string;
    src: string;
}

export interface PublicEntity {
    name: string;
    src: string;
}

export interface CalidadData {
    section1: {
        title: string;
        content: string;
    };
    section2: {
        title: string;
        bulletPoints: string[];
        content: string;
    };
    logos: Logo[];
    publicEntities: PublicEntity[];
}

const calidadData: CalidadData = {
    section1: {
        title: "Calidad",
        content: "La búsqueda de los más altos estándares de calidad y el respeto por el medio ambiente son dos de los principales objetivos de ASMATU dentro de su proceso de mejora continua. Los clientes satisfechos a lo largo de nuestros más de 25 años de trayectoria son nuestro mejor aval. ASMATU SLP., con el fin de alcanzar un destacado nivel en la calidad de todas sus actividades y consciente de la necesidad de colaborar en la protección ambiental, asume el compromiso de la mejora constante de la eficacia del Sistema de Gestión mediante el enfoque basado en la gestión de riesgos y la puesta en marcha de las medidas adecuadas para minimizarlos, conforme a los siguientes principios de actuación:"
    },
    section2: {
        title: "POLÍTICA INTEGRAL DE CALIDAD",
        bulletPoints: [
            "Conseguir la satisfacción de los clientes y partes interesadas, adaptándose a sus necesidades y proponiendo mejoras ambientales adecuadas a cada proyecto y realizando una labor de colaboración e implicación continua con el cliente en todas y cada una de las fases de desarrollo de los trabajos.",
            "Observar el cumplimiento de los requisitos legales aplicables, y de otros requisitos suscritos por la organización.",
            "Buscar una mejora continua del desempeño ambiental de los proyectos así como la prevención de la contaminación durante todo el ciclo de vida del proyecto.",
            "Garantizar el nivel de participación, formación, motivación y los medios técnicos necesarios para la eficiente realización de sus actividades, potenciando el desarrollo humano y profesional de todos ellos.",
            "Compromiso de mejora continua de los proyectos, eco-diseñados, y su desempeño ambiental desde el diseño y desarrollo, a partir del conocimiento de los aspectos ambientales de sus ciclos de vida (materiales, soluciones constructivas, fin de vida…) sin trasladar impactos ambientales de una etapa del ciclo de vida a otra, a menos que tenga una reducción neta de los impactos ambientales negativos a lo largo del ciclo de vida del proyecto."
        ],
        content: "Por todo ello hemos documentado e implantado un <strong>Sistema Integral</strong> en conformidad con los requisitos de las normas <strong>UNE-EN-ISO 9001; UNE-EN-ISO 14001</strong> y <strong>UNE-EN ISO 14006</strong>, enfocado hacia la <strong>Mejora Constante</strong> y que es conocido, entendido y aplicado por todas y cada una de las personas que integramos <strong>ASMATU SLP</strong>. Se establecerán objetivos que garanticen el cumplimiento de la <strong>Política Integral</strong>. La consecución de estos objetivos es responsabilidad de todos, siendo necesaria la participación y colaboración de todo el personal de <strong>ASMATU SLP</strong>, para lo cual, la Dirección de la Empresa difunde la <strong>Política Integral</strong> establecida."
    },
    logos: [
        { name: "Calidad 1", src: "/img/calidad/1.jpg" },
        { name: "Calidad 2", src: "/img/calidad/2.jpg" },
        { name: "Calidad 3", src: "/img/calidad/3.jpg" }
    ],
    publicEntities: [
        { name: "Logo 1", src: "/logo1.png" },
        { name: "Logo 2", src: "/logo2.png" },
        { name: "Logo 3", src: "/logo3.png" },
        { name: "Logo 4", src: "/logo4.png" },
        { name: "Logo 5", src: "/logo5.png" }
    ]
};

export default calidadData;
