// /sanity/schemaTypes/project.ts
import { defineType, defineField } from "sanity";
import slugObject from "./slugObject";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    // Instead of a single reference, we allow an array for multiple categories:
    defineField({
      name: "categories",
      title: "Categorías",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "img",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
    }),
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
      name: "description",
      title: "Descripción",
      type: "object",
      fields: [
        { name: "es", title: "Descripción (Español)", type: "blockContent" },
        { name: "eu", title: "Deskribapena (Euskera)", type: "blockContent" },
      ],
    }),
    // Detailed info, quote, etc. omitted for brevity
    // ...
  ],
  preview: {
    select: {
      title: "title.es",
      media: "img",
    },
  },
});
