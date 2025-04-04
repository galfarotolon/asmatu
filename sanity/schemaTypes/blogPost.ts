// /sanity/schemaTypes/blogPost.ts
import { defineType, defineField } from "sanity";
import slugObject from "./slugObject"; // Reusable slug object

export default defineType({
  name: "blogPost",
  title: "Publicación de Blog",
  type: "document",
  fields: [
    // Localized title
    defineField({
      name: "title",
      title: "Título",
      type: "object",
      fields: [
        { name: "es", title: "Título (Español)", type: "string" },
        { name: "eu", title: "Izenburua (Euskera)", type: "string" },
      ],
    }),
    // Slug using slugObject (stores final slug)
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
    // Summary for blog card
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
    // Description for blog card (localized)
    defineField({
      name: "description",
      title: "Descripción",
      type: "object",
      fields: [
        { name: "es", title: "Descripción (Español)", type: "string" },
        { name: "eu", title: "Deskribapena (Euskera)", type: "string" },
      ],
      description: "Una breve descripción o resumen del post.",
    }),
    // Category, authorUrl, location, etc.
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
    // List Items as localized objects
    defineField({
      name: "listItems",
      title: "Elementos de Lista",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "es", title: "Elemento (Español)", type: "string" },
            { name: "eu", title: "Elementu (Euskera)", type: "string" },
          ],
        },
      ],
    }),
    // Quote as localized object
    defineField({
      name: "quote",
      title: "Cita",
      type: "object",
      fields: [
        { name: "es", title: "Cita (Español)", type: "string" },
        { name: "eu", title: "Zitat (Euskera)", type: "string" },
      ],
    }),
    // Tags as localized objects (optional)
    defineField({
      name: "tags",
      title: "Etiquetas",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "es", title: "Etiqueta (Español)", type: "string" },
            { name: "eu", title: "Etiketa (Euskera)", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "location",
      title: "Ubicación",
      type: "string",
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "string",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo", // Or "reference" to the SEO doc if you prefer
    }),
  ],
  preview: {
    select: {
      title: "title.es",
      media: "mainImage",
    },
  },
});
