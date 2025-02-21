import { defineType, defineField } from "sanity";
import slugObject from "./slugObject"; // Reusable slug object

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    // Localized category
    defineField({
      name: "category",
      title: "Categoría",
      type: "object",
      fields: [
        { name: "es", title: "Categoría (Español)", type: "string" },
        { name: "eu", title: "Kategori (Euskera)", type: "string" },
      ],
    }),
    // Image field (non-localized)
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
    // Localized slug using our slugObject
    defineField({
      name: "slug",
      title: "Slug",
      type: "slugObject",
    }),
    // Localized description as rich text (blockContent)
    defineField({
      name: "description",
      title: "Descripción",
      type: "object",
      fields: [
        { name: "es", title: "Descripción (Español)", type: "blockContent" },
        { name: "eu", title: "Deskribapena (Euskera)", type: "blockContent" },
      ],
    }),
    // Localized detailed info as rich text
    defineField({
      name: "detailedInfo",
      title: "Información Detallada",
      type: "object",
      fields: [
        { name: "es", title: "Información Detallada (Español)", type: "blockContent" },
        { name: "eu", title: "Xehetasunak (Euskera)", type: "blockContent" },
      ],
    }),
    // Localized quote
    defineField({
      name: "quote",
      title: "Cita",
      type: "object",
      fields: [
        { name: "es", title: "Cita (Español)", type: "string" },
        { name: "eu", title: "Aipamena (Euskera)", type: "string" },
      ],
    }),
    // Localized value
    defineField({
      name: "value",
      title: "Valor",
      type: "object",
      fields: [
        { name: "es", title: "Valor (Español)", type: "string" },
        { name: "eu", title: "Balioa (Euskera)", type: "string" },
      ],
    }),
    // Localized client name
    defineField({
      name: "client",
      title: "Cliente",
      type: "object",
      fields: [
        { name: "es", title: "Cliente (Español)", type: "string" },
        { name: "eu", title: "Bezeroa (Euskera)", type: "string" },
      ],
    }),
    // Localized architect
    defineField({
      name: "architect",
      title: "Arquitecto",
      type: "object",
      fields: [
        { name: "es", title: "Arquitecto (Español)", type: "string" },
        { name: "eu", title: "Arkitektoa (Euskera)", type: "string" },
      ],
    }),
    // Localized location
    defineField({
      name: "location",
      title: "Ubicación",
      type: "object",
      fields: [
        { name: "es", title: "Ubicación (Español)", type: "string" },
        { name: "eu", title: "Kokapena (Euskera)", type: "string" },
      ],
    }),
    // Localized completion date
    defineField({
      name: "completionDate",
      title: "Fecha de Finalización",
      type: "object",
      fields: [
        { name: "es", title: "Fecha de Finalización (Español)", type: "string" },
        { name: "eu", title: "Amaierako Data (Euskera)", type: "string" },
      ],
    }),
    // Localized square footage
    defineField({
      name: "squareFootage",
      title: "Superficie (m²)",
      type: "object",
      fields: [
        { name: "es", title: "Superficie (Español)", type: "string" },
        { name: "eu", title: "Azalera (Euskera)", type: "string" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title.es",
      media: "img",
    },
  },
});
