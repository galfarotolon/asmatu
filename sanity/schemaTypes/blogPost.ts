// /sanity/schemaTypes/blogPost.ts
import { defineType, defineField } from "sanity";
import slugObject from "./slugObject"; // We'll reuse slugObject for full blog posts

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    // Localized title (existing)
    defineField({
      name: "title",
      title: "Título",
      type: "object",
      fields: [
        { name: "es", title: "Título (Español)", type: "string" },
        { name: "eu", title: "Izenburua (Euskera)", type: "string" },
      ],
    }),
    // Slug (using slugObject)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slugObject",
    }),
    // Publication date
    defineField({
      name: "date",
      title: "Fecha de Publicación",
      type: "datetime",
    }),
    // Main image
    defineField({
      name: "mainImage",
      title: "Imagen Principal",
      type: "image",
      options: { hotspot: true },
    }),
    // Summary (for blog card)
    defineField({
      name: "summary",
      title: "Resumen",
      type: "object",
      fields: [
        { name: "es", title: "Resumen (Español)", type: "string" },
        { name: "eu", title: "Laburpena (Euskera)", type: "string" },
      ],
    }),
    // Full content (portable text)
    defineField({
      name: "content",
      title: "Contenido",
      type: "object",
      fields: [
        { name: "es", title: "Contenido (Español)", type: "blockContent" },
        { name: "eu", title: "Edukia (Euskera)", type: "blockContent" },
      ],
    }),
    // New fields:
    defineField({
      name: "description",
      title: "Descripción",
      type: "string",
      description: "Una breve descripción o resumen del post.",
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
    }),
    defineField({
      name: "authorUrl",
      title: "URL del Autor",
      type: "url",
    }),
    defineField({
      name: "listItems",
      title: "Elementos de Lista",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "quote",
      title: "Cita",
      type: "string",
    }),
    defineField({
      name: "tags",
      title: "Etiquetas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "location",
      title: "Ubicación",
      type: "string",
    }),
    // Author name (if not already present)
    defineField({
      name: "author",
      title: "Autor",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title.es",
      media: "mainImage",
    },
  },
});
