// /sanity/schemaTypes/homepage.ts
import { defineType, defineField } from "sanity";
import slide from "./slide";

export default defineType({
  name: "homepage",
  title: "Página de Inicio",
  type: "document",
  fields: [
    defineField({
      name: "slides",
      title: "Diapositivas del Slider",
      type: "array",
      of: [{ type: "slide" }],
    }),
    defineField({
      name: "principles",
      title: "Principios",
      type: "array",
      of: [{ type: "principle" }],
    }),
    defineField({
      name: "about",
      title: "Sección About",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Título",
          type: "object",
          fields: [
            { name: "es", title: "Título (Español)", type: "string" },
            { name: "eu", title: "Izenburua (Euskera)", type: "string" },
          ],
        }),
        // Rich text fields for each language
        defineField({
          name: "bodyEs",
          title: "Cuerpo (Español)",
          type: "blockContent",
        }),
        defineField({
          name: "bodyEu",
          title: "Cuerpo (Euskera)",
          type: "blockContent",
        }),
        defineField({
          name: "signName",
          title: "Nombre (Firma)",
          type: "object",
          fields: [
            { name: "es", title: "Nombre (Español)", type: "string" },
            { name: "eu", title: "Izena (Euskera)", type: "string" },
          ],
        }),
        defineField({
          name: "signPosition",
          title: "Posición (Firma)",
          type: "object",
          fields: [
            { name: "es", title: "Posición (Español)", type: "string" },
            { name: "eu", title: "Posizioa (Euskera)", type: "string" },
          ],
        }),
        defineField({
          name: "rightImage",
          title: "Imagen Derecha",
          type: "imageObject", // Assuming you update this to use your reusable image object
        }),
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Sección de Servicios',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título (Servicios)',
          type: 'object',
          fields: [
            { name: 'es', title: 'Título (Español)', type: 'string' },
            { name: 'eu', title: 'Izenburua (Euskera)', type: 'string' },
          ],
        }),
        defineField({
          name: 'text',
          title: 'Texto (Servicios)',
          type: 'object',
          fields: [
            { name: 'es', title: 'Texto (Español)', type: 'string' },
            { name: 'eu', title: 'Testua (Euskera)', type: 'string' },
          ],
        }),
        
      ],
    }),
    // Add a services reference field so you can choose which services to display
    defineField({
      name: "services",
      title: "Servicios Destacados",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "whyChooseUs",
      title: "Sección – ¿Por qué elegir nuestros servicios?",
      type: "homepageWhyChooseUs",
    }),
    defineField({
      name: "clientsSection",
      title: "Sección de Clientes",
      type: "object",
      fields: [
        defineField({
          name: "header",
          title: "Encabezado",
          type: "object",
          fields: [
            { name: "es", title: "Español", type: "string" },
            { name: "eu", title: "Euskera", type: "string" },
          ],
        }),
        defineField({
          name: "subheader",
          title: "Subencabezado",
          type: "object",
          fields: [
            { name: "es", title: "Español", type: "string" },
            { name: "eu", title: "Euskera", type: "string" },
          ],
        }),
        defineField({
          name: "clients",
          title: "Clientes Destacados",
          type: "array",
          of: [{ type: "reference", to: [{ type: "client" }] }],
        }),
      ],
    }),
    defineField({
      name: "ctaSection",
      title: "Sección CTA",
      type: "homeCTASection",
    }),
    defineField({
      name: "testimonialSection",
      title: "Sección Testimonios",
      type: "homepageTestimonial",
    }),
    defineField({
      name: "projectsSection",
      title: "Sección de Proyectos",
      type: "object",
      fields: [
        defineField({
          name: "header",
          title: "Título de la Sección",
          type: "object",
          fields: [
            { name: "es", title: "Título (Español)", type: "string" },
            { name: "eu", title: "Izenburua (Euskera)", type: "string" },
          ],
        }),
        defineField({
          name: "description",
          title: "Descripción",
          type: "object",
          fields: [
            { name: "es", title: "Descripción (Español)", type: "blockContent" },
            { name: "eu", title: "Deskribapena (Euskera)", type: "blockContent" },
          ],
        }),
        defineField({
          name: "projectsLink",
          title: "Enlace a Proyectos",
          type: "slugObject", // Reusable slug object with es and eu
        }),
      ],
    }),
    // Reference for the featured projects
    defineField({
      name: "featuredProjects",
      title: "Proyectos Destacados",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    }),
    defineField({
      name: "blogSection",
      title: "Sección de Blog",
      type: "blogSection",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo", // Or "reference" to the SEO doc if you prefer
    }),
  ],
  preview: {
    select: {
      slides: "slides",
      principles: "principles",
    },
    prepare(selection) {
      const { principles } = selection;
      const count = principles ? principles.length : 0;
      return {
        title: "Página de Inicio",
        subtitle: `${count} principios`,
      };
    },
  },
});
