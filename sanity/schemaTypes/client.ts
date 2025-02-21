import { defineType, defineField } from 'sanity'
import imageObject from './imageObject' // Reusable image object that includes asset and alt text

export default defineType({
  name: 'client',
  title: 'Client',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo.asset',
    },
  },
})
