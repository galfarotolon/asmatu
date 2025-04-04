import { defineType, defineField } from "sanity";

export default defineType({
  name: "blogSection",
  title: "Sección de Blog (Pagina inicio)",
  type: "object",
  fields: [
    defineField({
      name: "sectionData",
      title: "Datos de la Sección",
      type: "object",
      fields: [
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
          name: "leadText",
          title: "Texto de Introducción",
          type: "object",
          fields: [
            { name: "es", title: "Texto (Español)", type: "string" },
            { name: "eu", title: "Testua (Euskera)", type: "string" },
          ],
        }),
      ],
    }),
    defineField({
      name: "featuredBlogs",
      title: "Blogs Destacados",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogPost" }] }],
    }),
  ],
});
