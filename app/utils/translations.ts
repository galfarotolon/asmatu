// utils/translations.ts
interface Translations {
    [key: string]: {
        [key: string]: string;
    };
}

const translations: Translations = {
    es: {
        home: "Inicio",
        projects: "Proyectos",
        services: "Áreas de Actividad",
        civilEngineering: "Ingeniería Civil",
        urbanism: "Urbanismo",
        building: "Edificación",
        environment: "Medio Ambiente",
        pages: "Páginas",
        blog: "Noticias",
        contact: "Contacto",
    },
    eu: {
        home: "Hasiera",
        projects: "Proiektuak",
        services: "Jarduera Eremuak",
        civilEngineering: "Zibil Ingeniaritza",
        urbanism: "Hirigintza",
        building: "Eraikuntza",
        environment: "Ingurumena",
        pages: "Orrialdeak",
        blog: "Bloga",
        contact: "Harremana",
    },
};

export default translations;
