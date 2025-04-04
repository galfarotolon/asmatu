// /sanity/schemaTypes/homepageTestimonial.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "homepageTestimonial",
  title: "Sección de Testimonios",
  type: "object",
  fields: [
    defineField({
      name: "backgroundImage",
      title: "Imagen de Fondo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "quote",
      title: "Cita",
      type: "object",
      fields: [
        { name: "es", title: "Cita (Español)", type: "text" },
        { name: "eu", title: "Cita (Euskera)", type: "text" },
      ],
    }),
    defineField({
      name: "name",
      title: "Nombre",
      type: "object",
      fields: [
        { name: "es", title: "Nombre (Español)", type: "string" },
        { name: "eu", title: "Izena (Euskera)", type: "string" },
      ],
    }),
    defineField({
      name: "position",
      title: "Posición",
      type: "object",
      fields: [
        { name: "es", title: "Posición (Español)", type: "string" },
        { name: "eu", title: "Posizioa (Euskera)", type: "string" },
      ],
    }),
  ],
});
