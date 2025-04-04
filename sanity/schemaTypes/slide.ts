// /sanity/schemaTypes/slide.ts

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'slide',
  title: 'Diapositiva',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Tipo de Medio',
      type: 'string',
      options: {
        list: [
          { title: 'Video', value: 'video' },
          { title: 'Imagen', value: 'image' },
        ],
        layout: 'dropdown',
      },
      description: 'Selecciona si esta diapositiva será un video o una imagen',
      initialValue: 'image',
    }),
    defineField({
      name: 'videoFile',
      title: 'Archivo de Video',
      type: 'file',
      hidden: ({ parent }) => parent?.mediaType !== 'video',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Imagen de Fondo',
      type: 'image',
      hidden: ({ parent }) => parent?.mediaType !== 'image',
      options: { hotspot: true },
    }),
    // Localized fields for titles and texts
    defineField({
      name: 'title',
      title: 'Título',
      type: 'object',
      fields: [
        defineField({ name: 'ESP', title: 'Español', type: 'string' }),
        defineField({ name: 'EU', title: 'Euskera', type: 'string' }),
      ],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'object',
      fields: [
        defineField({ name: 'ESP', title: 'Español', type: 'string' }),
        defineField({ name: 'EU', title: 'Euskera', type: 'string' }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'object',
      fields: [
        defineField({ name: 'ESP', title: 'Español', type: 'text' }),
        defineField({ name: 'EU', title: 'Euskera', type: 'text' }),
      ],
    }),
    // Slug field for Enlace with custom source and slugify function
    defineField({
      name: 'link',
      title: 'Enlace',
      type: 'object',
      fields: [
        defineField({
          name: 'ESP',
          title: 'Español',
          type: 'slug',
          options: {
            maxLength: 96,
            source: (doc, context) => (context.parent as any)?.title?.ESP || '',
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
          },
        }),
        defineField({
          name: 'EU',
          title: 'Euskera',
          type: 'slug',
          options: {
            maxLength: 96,
            source: (doc, context) => (context.parent as any)?.title?.EU || '',
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      mediaType: 'mediaType',
      titleESP: 'title.ESP',
      backgroundImage: 'backgroundImage',
      videoFile: 'videoFile',
    },
    prepare(selection) {
      const { mediaType, titleESP, backgroundImage } = selection;
      const title = titleESP || '(Sin título)';
      const subtitle = mediaType === 'video' ? 'Video' : 'Imagen';
      const media = mediaType === 'image' ? backgroundImage : undefined;
      return {
        title,
        subtitle,
        media,
      };
    },
  },
  validation: (Rule) =>
    Rule.custom((slide) => {
      const type = slide?.mediaType;
      if (type === 'video') {
        if (!slide?.videoFile) {
          return 'Debes subir un archivo de video para una diapositiva de tipo Video.';
        }
      } else if (type === 'image') {
        if (!slide?.backgroundImage) {
          return 'Debes seleccionar una imagen para una diapositiva de tipo Imagen.';
        }
      } else {
        return 'Debes seleccionar el tipo de medio (Video o Imagen).';
      }
      return true;
    }),
});
