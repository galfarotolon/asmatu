import { defineType, defineField } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navegación",
  type: "document",
  fields: [
    defineField({
      name: "menuItems",
      title: "Elementos del Menú",
      type: "array",
      of: [
        {
          type: "object",
          title: "Elemento del Menú",
          fields: [
            defineField({
              name: "key",
              title: "Key (Internal)",
              type: "string",
              hidden: true,
            }),
            defineField({
              name: "title",
              title: "Título",
              type: "object",
              fields: [
                { name: "es", title: "Título (Español)", type: "string" },
                { name: "eu", title: "Título (Euskera)", type: "string" },
              ],
            }),
            // Base route slug for the main item
            defineField({
              name: "es",
              title: "Slug (Spanish)",
              type: "slug",
              options: {
                maxLength: 96,
                source: (doc, { parent }) => (parent as any).title?.es,
                slugify: (input) =>
                  input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, "-").slice(0, 96),
              },
            }),
            defineField({
              name: "eu",
              title: "Slug (Basque)",
              type: "slug",
              options: {
                maxLength: 96,
                source: (doc, { parent }) => (parent as any).title?.eu,
                slugify: (input) =>
                  input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, "-").slice(0, 96),
              },
            }),
            // Submenu as a pure reference array—NO extra fields!
            defineField({
              name: "submenu",
              title: "Submenú",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{ type: "service" }],
                },
              ],
            }),
          ],
          preview: {
            select: {
              titleEs: "title.es",
              titleEu: "title.eu",
              key: "key",
            },
            prepare(selection) {
              const { titleEs, titleEu, key } = selection;
              return { title: titleEs || titleEu || "Sin título", subtitle: key ? `(${key})` : "" };
            },
          },
        },
      ],
    }),
    defineField({
      name: "footerItems",
      title: "Elementos del pie de pagina",
      type: "array",
      of: [
        {
          type: "object",
          title: "Elemento del pie de pagina",
          fields: [
            defineField({
              name: "key",
              title: "Key (Internal)",
              type: "string",
              hidden: true,
            }),
            defineField({
              name: "title",
              title: "Título",
              type: "object",
              fields: [
                { name: "es", title: "Título (Español)", type: "string" },
                { name: "eu", title: "Título (Euskera)", type: "string" },
              ],
              preview: {
                select: {
                  titleEs: "title.es",
                  titleEu: "title.eu",
                  key: "key",
                },
                prepare(selection) {
                  const { titleEs, titleEu, key } = selection;
                  return { title: titleEs || titleEu || "Sin título", subtitle: key ? `(${key})` : "" };
                },
              },
            }),
            
            // Base route slug for the main item
            defineField({
              name: "es",
              title: "Slug (Spanish)",
              type: "slug",
              options: {
                maxLength: 96,
                source: (doc, { parent }) => (parent as any).title?.es,
                slugify: (input) =>
                  input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, "-").slice(0, 96),
              },
            }),
            defineField({
              name: "eu",
              title: "Slug (Basque)",
              type: "slug",
              options: {
                maxLength: 96,
                source: (doc, { parent }) => (parent as any).title?.eu,
                slugify: (input) =>
                  input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, "-").slice(0, 96),
              },
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { menuItems: "menuItems"},
    prepare(selection) {
      const count = selection.menuItems ? selection.menuItems.length : 0;
      return { title: "Navegación", subtitle: `${count} elemento${count === 1 ? "" : "s"}` };
    },
  },
});
