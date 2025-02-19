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
    // Agrega más campos aquí si lo deseas...
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
