// /sanity/schemaTypes/seo.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'document',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'object',
      fields: [
        { name: 'es', title: 'Meta Title (Español)', type: 'string' },
        { name: 'eu', title: 'Meta Title (Euskera)', type: 'string' },
      ],
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'object',
      fields: [
        { name: 'es', title: 'Meta Description (Español)', type: 'text' },
        { name: 'eu', title: 'Meta Description (Euskera)', type: 'text' },
      ],
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'object',
      fields: [
        { name: 'es', title: 'OG Title (Español)', type: 'string' },
        { name: 'eu', title: 'OG Title (Euskera)', type: 'string' },
      ],
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'object',
      fields: [
        { name: 'es', title: 'OG Description (Español)', type: 'text' },
        { name: 'eu', title: 'OG Description (Euskera)', type: 'text' },
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'metaTitle.es',
    },
  },
});
