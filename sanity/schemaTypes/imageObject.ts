import { defineType, defineField } from "sanity";

export default defineType({
  name: "imageObject",
  title: "Image Object",
  type: "object",
  fields: [
    defineField({
      name: "asset",
      title: "Image Asset",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "alt",
      title: "Alternative Text",
      type: "object",
      fields: [
        { name: "es", title: "Alt Text (Spanish)", type: "string" },
        { name: "eu", title: "Alt Text (Euskera)", type: "string" },
      ],
    }),
  ],
});
