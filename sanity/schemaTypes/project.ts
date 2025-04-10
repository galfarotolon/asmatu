// /sanity/schemaTypes/project.ts
import { defineType, defineField } from "sanity";
import slugObject from "./slugObject";

export default defineType({
  name: "project",
  title: "Proyecto",
  type: "document",
  fields: [
    // Allow multiple categories via references
    defineField({
      name: "categories",
      title: "Categorías",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    // Main image
    defineField({
      name: "img",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
    }),
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
    // Localized slug
    defineField({
      name: "slug",
      title: "Slug",
      type: "slugObject",
    }),
    // Localized description (for card display)
    defineField({
      name: "description",
      title: "Descripción",
      type: "object",
      fields: [
        { name: "es", title: "Descripción (Español)", type: "blockContent" },
        { name: "eu", title: "Deskribapena (Euskera)", type: "blockContent" },
      ],
    }),
    // Detailed information as rich text
    defineField({
      name: "detailedInfo",
      title: "Información Detallada",
      type: "object",
      fields: [
        { name: "es", title: "Información Detallada (Español)", type: "blockContent" },
        { name: "eu", title: "Xehetasunak (Euskera)", type: "blockContent" },
      ],
    }),
    // Quote
    defineField({
      name: "quote",
      title: "Cita",
      type: "object",
      fields: [
        { name: "es", title: "Cita (Español)", type: "string" },
        { name: "eu", title: "Aipamena (Euskera)", type: "string" },
      ],
    }),
    // Value
    defineField({
      name: "value",
      title: "Valor",
      type: "object",
      fields: [
        { name: "es", title: "Valor (Español)", type: "string" },
        { name: "eu", title: "Balioa (Euskera)", type: "string" },
      ],
    }),
    // Client
    defineField({
      name: "client",
      title: "Cliente",
      type: "object",
      fields: [
        { name: "es", title: "Cliente (Español)", type: "string" },
        { name: "eu", title: "Bezeroa (Euskera)", type: "string" },
      ],
    }),
    // Architect
    defineField({
      name: "architect",
      title: "Arquitecto",
      type: "object",
      fields: [
        { name: "es", title: "Arquitecto (Español)", type: "string" },
        { name: "eu", title: "Arkitektoa (Euskera)", type: "string" },
      ],
    }),
    // Location
    defineField({
      name: "location",
      title: "Ubicación",
      type: "object",
      fields: [
        { name: "es", title: "Ubicación (Español)", type: "string" },
        { name: "eu", title: "Kokapena (Euskera)", type: "string" },
      ],
    }),
    // Completion Date
    defineField({
      name: "completionDate",
      title: "Fecha de Finalización",
      type: "object",
      fields: [
        { name: "es", title: "Fecha de Finalización (Español)", type: "string" },
        { name: "eu", title: "Amaierako Data (Euskera)", type: "string" },
      ],
    }),
    // Square Footage
    defineField({
      name: "squareFootage",
      title: "Superficie (m²)",
      type: "object",
      fields: [
        { name: "es", title: "Superficie (Español)", type: "string" },
        { name: "eu", title: "Azalera (Euskera)", type: "string" },
      ],
    }),
    // Media Blocks
    defineField({
      name: "media",
      title: "Media Adicional",
      type: "array",
      of: [{ type: "mediaBlock" }],
    }),
    // SEO field (embedded SEO document)
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title.es",
      media: "img",
    },
  },
});
