// /sanity/schemaTypes/projectPage.js
import { defineType, defineField } from "sanity";

export default defineType({
  name: "projectPage",
  title: "Project Page",
  type: "document",
  fields: [
    defineField({
      name: "headerTitle",
      title: "Header Title",
      type: "object",
      fields: [
        { name: "es", title: "Header Title (Español)", type: "string" },
        { name: "eu", title: "Header Title (Basque)", type: "string" },
      ],
    }),
    defineField({
      name: "introText",
      title: "Introduction Text",
      type: "object",
      fields: [
        { name: "es", title: "Introduction (Español)", type: "string" },
        { name: "eu", title: "Introduction (Basque)", type: "string" },
      ],
    }),
    // (Optional: Add a linkLabel if you need a call-to-action on the page.)
    defineField({
      name: "linkLabel",
      title: "Link Label",
      type: "object",
      fields: [
        { name: "es", title: "Link Label (Español)", type: "string" },
        { name: "eu", title: "Link Label (Basque)", type: "string" },
      ],
    }),
  ],
});
