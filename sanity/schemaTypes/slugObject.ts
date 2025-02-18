// sanity/schema/slugObject.js
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
      },
    }),
    defineField({
      name: "eu",
      title: "Slug (Basque)",
      type: "slug",
      options: {
        maxLength: 96,
      },
    }),
  ],
});
