import { defineType, defineField } from "sanity";

export default defineType({
  name: "calidadPage",
  title: "Página de Calidad",
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
      name: "section1",
      title: "Section 1",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Section 1 Title",
          type: "object",
          fields: [
            { name: "es", title: "Title (Español)", type: "string" },
            { name: "eu", title: "Title (Basque)", type: "string" },
          ],
        }),
        defineField({
          name: "content",
          title: "Section 1 Content",
          type: "object",
          fields: [
            { name: "es", title: "Content (Español)", type: "blockContent" },
            { name: "eu", title: "Content (Basque)", type: "blockContent" },
          ],
        }),
      ],
    }),
    defineField({
      name: "section2",
      title: "Section 2",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Section 2 Title",
          type: "object",
          fields: [
            { name: "es", title: "Title (Español)", type: "string" },
            { name: "eu", title: "Title (Basque)", type: "string" },
          ],
        }),
        defineField({
          name: "bulletPoints",
          title: "Bullet Points",
          type: "object",
          fields: [
            {
              name: "es",
              title: "Bullet Points (Español)",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "eu",
              title: "Bullet Points (Basque)",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        }),
        defineField({
          name: "content",
          title: "Section 2 Content",
          type: "object",
          fields: [
            { name: "es", title: "Content (Español)", type: "blockContent" },
            { name: "eu", title: "Content (Basque)", type: "blockContent" },
          ],
        }),
      ],
    }),
    defineField({
        name: "logos",
        title: "Logos",
        type: "array",
        of: [
          defineField({
            name: "logo",
            title: "Logo",
            type: "object",
            fields: [
              {
                name: "src",
                title: "Logo Image",
                type: "image",
                options: { hotspot: true },
              },
              {
                name: "altText",
                title: "Alt Text",
                type: "object",
                fields: [
                  { name: "es", title: "Alt Text (Español)", type: "string" },
                  { name: "eu", title: "Alt Text (Basque)", type: "string" },
                ],
              },
            ],
          }),
        ],
      }),
    // Note: No "clients" field here; we'll fetch all client documents separately.
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
