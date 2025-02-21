import { defineType, defineField } from "sanity";
import slugObject from "./slugObject"; // our reusable slug object
import blockContent from "./blockContent"; // your portable text type

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
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
    defineField({
      name: "slug",
      title: "Slug",
      type: "slugObject",
    }),
    defineField({
      name: "date",
      title: "Fecha de Publicación",
      type: "datetime",
    }),
    defineField({
      name: "mainImage",
      title: "Imagen Principal",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "summary",
      title: "Resumen",
      type: "object",
      fields: [
        { name: "es", title: "Resumen (Español)", type: "string" },
        { name: "eu", title: "Laburpena (Euskera)", type: "string" },
      ],
    }),
    defineField({
      name: "content",
      title: "Contenido",
      type: "object",
      fields: [
        { name: "es", title: "Contenido (Español)", type: "blockContent" },
        { name: "eu", title: "Edukia (Euskera)", type: "blockContent" },
      ],
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "string",
    }),
    // Additional fields such as category, tags, etc. can be added here.
  ],
  preview: {
    select: {
      title: "title.es",
      media: "mainImage",
    },
  },
});
