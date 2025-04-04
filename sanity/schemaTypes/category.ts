// /sanity/schemaTypes/category.ts
import { SanityDocument } from "next-sanity";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Categoría",
  type: "document",
  fields: [
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        maxLength: 96,
        source: (doc: SanityDocument, options) => doc.name?.es,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 96),
      },
    }),
  ],
  preview: {
    select: {
      title: "name.es",
    },
  },
});
