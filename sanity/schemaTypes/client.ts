import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'client',
  title: 'Cliente',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "altText",
      title: "Texto Alternativo",
      type: "object",
      fields: [
        { name: "es", title: "Texto Alternativo (Español)", type: "string" },
        { name: "eu", title: "Teksto Alternatiboa (Euskera)", type: "string" },
      ],
    }),
    defineField({
      name: "isPublic",
      title: "Es entidad publica",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
