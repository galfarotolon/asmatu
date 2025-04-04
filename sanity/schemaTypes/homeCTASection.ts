import { defineType, defineField } from "sanity";
import slugObject from "./slugObject"; // your reusable slug object

export default defineType({
  name: "homeCTASection",
  title: "Sección CTA",
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
        title: "texto",
        type: "object",
        fields: [
          { name: "es", title: "Español", type: "string" },
          { name: "eu", title: "Euskera", type: "string" },
        ],
      }),
    defineField({
      name: "buttonText",
      title: "Texto del Botón",
      type: "object",
      fields: [
        { name: "es", title: "Español", type: "string" },
        { name: "eu", title: "Euskera", type: "string" },
      ],
    }),
    defineField({
      name: "buttonLink",
      title: "Enlace del Botón",
      type: "slugObject", // This gives you es and eu versions.
    }),
  ],
});
