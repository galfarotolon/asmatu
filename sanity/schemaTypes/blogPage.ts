// /sanity/schemaTypes/blogPage.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  fields: [
    defineField({
      name: "headerTitle",
      title: "Header Title",
      type: "object",
      fields: [
        { name: "es", title: "Título (Español)", type: "string" },
        { name: "eu", title: "Izenburua (Euskera)", type: "string" },
      ],
    }),
    defineField({
      name: "introText",
      title: "Texto de Introducción",
      type: "object",
      fields: [
        { name: "es", title: "Introducción (Español)", type: "text" },
        { name: "eu", title: "Sarrera Testua (Euskera)", type: "text" },
      ],
    }),
    // Optionally, featured posts reference (if you want to control order)
    defineField({
      name: "featuredPosts",
      title: "Publicaciones Destacadas",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogPost" }] }],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo", // Or "reference" to the SEO doc if you prefer
    }),
  ],
  preview: {
    select: {
      title: "headerTitle.es",
    },
  },
});
