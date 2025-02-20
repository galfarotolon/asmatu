// /sanity/schemaTypes/service.ts
import { defineType, defineField } from "sanity";
import slugObject from "./slugObject";
import imageObject from "./imageObject"; // This should define an image with alt texts for es and eu

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    // Title field with translations
    defineField({
      name: "title",
      title: "Título",
      type: "object",
      fields: [
        { name: "es", title: "Título (Español)", type: "string" },
        { name: "eu", title: "Izenburua (Euskera)", type: "string" },
      ],
    }),
    // Slug field using reusable slug object
    defineField({
      name: "slug",
      title: "Slug",
      type: "slugObject",
    }),
    // Description as rich text (Portable Text) with translations
    defineField({
      name: "description",
      title: "Descripción",
      type: "object",
      fields: [
        { name: "es", title: "Descripción (Español)", type: "blockContent" },
        { name: "eu", title: "Deskribapena (Euskera)", type: "blockContent" },
      ],
    }),
    // Summary as plain text with translations
    defineField({
      name: "summary",
      title: "Resumen",
      type: "object",
      fields: [
        { name: "es", title: "Resumen (Español)", type: "string" },
        { name: "eu", title: "Laburpena (Euskera)", type: "string" },
      ],
    }),
    // Image field using our reusable image object
    defineField({
        name: "image",
        title: "Imagen",
        type: "image",
        options: { hotspot: true },
      }),
      defineField({
        name: "altText",
        title: "Texto Alternativo",
        type: "object",
        fields: [
          { name: "es", title: "Texto Alternativo (Español)", type: "string" },
          { name: "eu", title: "Teksto Alternatiboa (Euskera)", type: "string" },
        ],
      }),
    // Features: an array of objects where each feature is translated
    defineField({
      name: "features",
      title: "Características",
      type: "array",
      of: [
        defineField({
          name: "feature",
          title: "Característica",
          type: "object",
          fields: [
            { name: "es", title: "Característica (Español)", type: "string" },
            { name: "eu", title: "Ezaugarri (Euskera)", type: "string" },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title.es",
      media: "image.image.asset", // Adjust this path based on your imageObject schema
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
});
