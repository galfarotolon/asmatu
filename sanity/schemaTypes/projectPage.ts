// sanity/schema/projectPage.js
import { defineType, defineField } from "sanity";

export default defineType({
  name: "projectPage",
  title: "Project Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        defineField({
          name: "es",
          title: "Title (Spanish)",
          type: "string",
        }),
        defineField({
          name: "eu",
          title: "Title (Basque)",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slugObject",
    }),
    // Additional fields as needed...
  ],
});
