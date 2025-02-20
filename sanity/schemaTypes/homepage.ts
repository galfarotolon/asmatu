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
    // Add a services reference field so you can choose which services to display
    defineField({
      name: "services",
      title: "Servicios Destacados",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
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
