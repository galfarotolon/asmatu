import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepageWhyChooseUs',
  title: 'Homepage – Why Choose Us Section',
  type: 'object',
  fields: [
    // Section Title (localized)
    defineField({
      name: 'title',
      title: 'Título de Sección',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'eu', title: 'Euskera', type: 'string' },
      ],
    }),
    // Section Description as rich text (localized)
    defineField({
      name: 'description',
      title: 'Descripción de Sección',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'blockContent' },
        { name: 'eu', title: 'Euskera', type: 'blockContent' },
      ],
    }),
    // Statistics (an array of stat items)
    defineField({
      name: 'statistics',
      title: 'Estadísticas',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stat',
          title: 'Estadística',
          fields: [
            { name: 'number', title: 'Número', type: 'number' },
            {
              name: 'label',
              title: 'Etiqueta',
              type: 'object',
              fields: [
                { name: 'es', title: 'Español', type: 'string' },
                { name: 'eu', title: 'Euskera', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
    // Badge section (for the leader badge on the right)
    defineField({
      name: 'badge',
      title: 'Sección de Insignia',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título de Insignia',
          type: 'object',
          fields: [
            { name: 'es', title: 'Español', type: 'string' },
            { name: 'eu', title: 'Euskera', type: 'string' },
          ],
        }),
        defineField({
          name: 'description',
          title: 'Descripción de Insignia',
          type: 'object',
          fields: [
            { name: 'es', title: 'Español', type: 'string' },
            { name: 'eu', title: 'Euskera', type: 'string' },
          ],
        }),
        defineField({
          name: 'yearsExperience',
          title: 'Años de Experiencia',
          type: 'number',
        }),
        defineField({
          name: 'badgeImage',
          title: 'Imagen de Insignia',
          type: 'imageObject', // Reusable image object (see your imageObject schema)
        }),
      ],
    }),
    // Features list (each feature is localized)
    defineField({
      name: 'featuresList',
      title: 'Lista de Características',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'featureItem',
          title: 'Elemento de Característica',
          fields: [
            {
              name: 'text',
              title: 'Texto',
              type: 'object',
              fields: [
                { name: 'es', title: 'Español', type: 'string' },
                { name: 'eu', title: 'Euskera', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
