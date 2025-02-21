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
            // Hidden key for internal use (e.g. "blog", "projects", etc.)
            defineField({
              name: "key",
              title: "Key (Internal)",
              type: "string",
        
            }),
            // Nested title object (for localization)
            defineField({
              name: "title",
              title: "Título",
              type: "object",
              fields: [
                { name: "es", title: "Título (Español)", type: "string" },
                { name: "eu", title: "Título (Euskera)", type: "string" },
              ],
            }),
            // Inline slug fields for main menu item
            defineField({
              name: "es",
              title: "Slug (Spanish)",
              type: "slug",
              options: {
                maxLength: 96,
                source: (doc, { parent }) => (parent as any).title?.es,
                slugify: (input) =>
                  input
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .slice(0, 96),
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
                  input
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .slice(0, 96),
              },
            }),
            // Submenu items
            defineField({
              name: "submenu",
              title: "Submenú",
              type: "array",
              of: [
                {
                  type: "object",
                  title: "Elemento de Submenú",
                  fields: [
                    // Hidden key for submenu item (optional)
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
                    defineField({
                      name: "es",
                      title: "Slug (Spanish)",
                      type: "slug",
                      options: {
                        maxLength: 96,
                        source: (doc, { parent }) => (parent as any).title?.es,
                        slugify: (input) =>
                          input
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .slice(0, 96),
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
                          input
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .slice(0, 96),
                      },
                    }),
                  ],
                  preview: {
                    select: {
                      titleEs: "title.es",
                      titleEu: "title.eu",
                    },
                    prepare(selection) {
                      const { titleEs, titleEu } = selection;
                      return { title: titleEs || titleEu || "Sin título" };
                    },
                  },
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
              return {
                title: titleEs || titleEu || "Sin título",
                subtitle: key ? `(${key})` : "",
              };
            },
          },
        },
      ],
    }),
    // Optionally, add footerItems similarly.
  ],
  preview: {
    select: {
      menuItems: "menuItems",
    },
    prepare(selection) {
      const count = selection.menuItems ? selection.menuItems.length : 0;
      return {
        title: "Navegación",
        subtitle: `${count} elemento${count === 1 ? "" : "s"}`,
      };
    },
  },
});
