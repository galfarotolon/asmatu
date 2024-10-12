export default {
    name: 'principle',
    title: 'Principio',
    type: 'object', // Still an object because it's part of an array
    fields: [
      {
        name: 'title',
        title: 'Título',
        type: 'object',
        fields: [
          {
            name: 'es',
            title: 'Título (Español)',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'eu',
            title: 'Título (Euskera)',
            type: 'string',
            validation: (Rule) => Rule.required(),
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
            title: 'Descripción (Español)',
            type: 'text',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'eu',
            title: 'Descripción (Euskera)',
            type: 'text',
            validation: (Rule) => Rule.required(),
          },
        ],
      },
      {
        name: 'number',
        title: 'Número',
        type: 'number',
        validation: (Rule) => Rule.min(1).max(99).required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'object',
        fields: [
          {
            name: 'es',
            title: 'Slug (Español)',
            type: 'slug',
            options: {
              source: 'title.es',
              maxLength: 96,
              slugify: (input) => input.toLowerCase().replace(/\s+/g, '').slice(0, 96),
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'eu',
            title: 'Slug (Euskera)',
            type: 'slug',
            options: {
              source: 'title.eu',
              maxLength: 96,
              slugify: (input) => input.toLowerCase().replace(/\s+/g, '').slice(0, 96),
            },
            validation: (Rule) => Rule.required(),
          },
        ],
      },
    ],
  };
  