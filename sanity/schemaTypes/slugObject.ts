import { SanityDocument } from "next-sanity";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "slugObject",
  title: "Slug",
  type: "object",
  fields: [
    defineField({
      name: "es",
      title: "Slug (Spanish)",
      type: "slug",
      options: {
        maxLength: 96,
        source: (doc: SanityDocument) => doc.title?.es,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
    }),
    defineField({
      name: "eu",
      title: "Slug (Basque)",
      type: "slug",
      options: {
        maxLength: 96,
        source: (doc: SanityDocument) => doc.title?.eu,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
    }),
  ],
});
