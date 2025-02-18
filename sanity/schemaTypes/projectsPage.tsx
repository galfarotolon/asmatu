import { defineType, defineField } from "sanity";

export default defineType({
  name: "projectPage",
  title: "Project Page",
  type: "document",
  fields: [
    defineField({
      name: "titleESP",
      title: "Title (Spanish)",
      type: "string",
    }),
    defineField({
      name: "titleEU",
      title: "Title (Basque)",
      type: "string",
    }),
    defineField({
      name: "slugESP",
      title: "Slug (Spanish)",
      type: "slug",
      options: {
        source: "titleESP",
        maxLength: 96,
      },
    }),
    defineField({
      name: "slugEU",
      title: "Slug (Basque)",
      type: "slug",
      options: {
        source: "titleEU",
        maxLength: 96,
      },
    }),
    // You can add additional fields (e.g., content) here as needed.
  ],
});
