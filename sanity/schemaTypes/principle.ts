import { defineType, defineField } from "sanity";

export default defineType({
  name: "principle",
  title: "Principio",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        { name: "es", title: "Title (Spanish)", type: "string" },
        { name: "eu", title: "Title (Basque)", type: "string" },
      ],
    }),
    defineField({
      name: "anchor",
      title: "Anchor",
      type: "object",
      fields: [
        { name: "es", title: "Anchor (Spanish)", type: "string", description: "ID for in-page linking (without #)" },
        { name: "eu", title: "Anchor (Basque)", type: "string", description: "ID for in-page linking (without #)" },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        { name: "es", title: "Description (Spanish)", type: "text" },
        { name: "eu", title: "Description (Basque)", type: "text" },
      ],
    }),
    defineField({
      name: "number",
      title: "Number",
      type: "string",
      description: "Display number (e.g., '01')",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slugObject"  // assuming you have a shared slugObject schema
    }),
  ],
});
