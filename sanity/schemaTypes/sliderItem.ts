// schemas/sliderItem.js
export default {
    name: 'sliderItem',
    title: 'Slider Item',
    type: 'object',
    fields: [
      {
        name: 'mediaType',
        title: 'Tipo de Medio',
        type: 'string',
        options: {
          list: [
            { title: 'Imagen', value: 'image' },
            { title: 'Video', value: 'video' },
          ],
          layout: 'radio',
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'image',
        title: 'Imagen',
        type: 'image',
        options: {
          hotspot: true,
        },
        hidden: ({ parent }) => parent.mediaType !== 'image',
        fields: [
          {
            name: 'alt',
            title: 'Texto Alternativo (Español)',
            type: 'string',
            description: 'Descripción alternativa para la imagen en español.',
            validation: Rule => Rule.required().max(150),
          },
          {
            name: 'alt_eu',
            title: 'Texto Alternativo (Euskera)',
            type: 'string',
            description: 'Descripción alternativa para la imagen en euskera.',
            validation: Rule => Rule.required().max(150),
          },
        ],
        validation: Rule => Rule.custom((field, context) => {
          if (context.parent.mediaType === 'image' && !field) {
            return 'Debe seleccionar una imagen.';
          }
          return true;
        }),
        preview: {
          select: {
            title_es: 'alt',
            title_eu: 'alt_eu',
            media: 'asset',
          },
          prepare(selection) {
            const { title_es, title_eu, media } = selection;
            return {
              title: title_es || title_eu || 'Imagen',
              media: media,
            };
          },
        },
      },
      {
        name: 'video',
        title: 'Video',
        type: 'file',
        options: {
          accept: 'video/*',
        },
        hidden: ({ parent }) => parent.mediaType !== 'video',
        validation: Rule => Rule.custom((field, context) => {
          if (context.parent.mediaType === 'video' && !field) {
            return 'Debe seleccionar un video.';
          }
          return true;
        }),
        preview: {
          select: {
            mediaType: 'mediaType',
            media: 'asset',
          },
          prepare(selection) {
            const { mediaType, media } = selection;
            return {
              title: mediaType === 'video' ? 'Video' : 'Media',
              media: media,
            };
          },
        },
      },
      {
        name: 'serviceTitle',
        title: 'Título del Servicio',
        type: 'object',
        fields: [
          {
            name: 'es',
            title: 'Español',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'eu',
            title: 'Euskera',
            type: 'string',
            validation: Rule => Rule.required(),
          },
        ],
      },
      {
        name: 'subHeader',
        title: 'Subtítulo',
        type: 'object',
        fields: [
          {
            name: 'es',
            title: 'Español',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'eu',
            title: 'Euskera',
            type: 'string',
            validation: Rule => Rule.required(),
          },
        ],
      },
      {
        name: 'description',
        title: 'Descripción',
        type: 'object',
        fields: [
          {
            name: 'es',
            title: 'Español',
            type: 'text',
            validation: Rule => Rule.required(),
          },
          {
            name: 'eu',
            title: 'Euskera',
            type: 'text',
            validation: Rule => Rule.required(),
          },
        ],
      },
    ],
    preview: {
      select: {
        mediaType: 'mediaType',
        serviceTitleEs: 'serviceTitle.es',
        serviceTitleEu: 'serviceTitle.eu',
      },
      prepare(selection) {
        const { mediaType, serviceTitleEs, serviceTitleEu } = selection;
        return {
          title: serviceTitleEs || serviceTitleEu || 'Sin título',
          subtitle: mediaType === 'image' ? 'Imagen' : 'Video',
          media: mediaType === 'image' ? undefined : undefined, // Optionally add a video icon or thumbnail
        };
      },
    },
  };
  