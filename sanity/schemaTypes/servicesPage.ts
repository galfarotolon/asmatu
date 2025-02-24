// /sanity/schemaTypes/servicesPage.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    // Header Title with translations
    defineField({
      name: "headerTitle",
      title: "Header Title",
      type: "object",
      fields: [
        { name: "es", title: "Título (Español)", type: "string" },
        { name: "eu", title: "Izenburua (Euskera)", type: "string" },
      ],
    }),
    // Introduction Text with translations
    defineField({
      name: "introText",
      title: "Introduction Text",
      type: "object",
      fields: [
        { name: "es", title: "Introducción (Español)", type: "text" },
        { name: "eu", title: "Sarrera (Euskera)", type: "text" },
      ],
    }),
    // Link Label with translations
    defineField({
      name: "linkLabel",
      title: "Link Label",
      type: "object",
      fields: [
        { name: "es", title: "Etiqueta de Enlace (Español)", type: "string" },
        { name: "eu", title: "Esteka Etiket (Euskera)", type: "string" },
      ],
    }),
    // Optionally reference service documents if desired:
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    
    // (Optional) Add SEO fields if needed:
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo", // Or "reference" to the SEO doc if you prefer
    }),

  ],
});
