// schemas/header.js
export default {
    name: 'header',
    title: 'Encabezado',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título del Documento',
        type: 'string',
        description: 'Título del documento de encabezado para identificarlo en Sanity Studio.',
        validation: Rule => Rule.required().max(100),
      },
      {
        name: 'logos',
        title: 'Logotipos',
        type: 'object',
        description: 'Logotipos utilizados en el encabezado para temas claros y oscuros.',
        fields: [
          {
            name: 'light',
            title: 'Logotipo Claro',
            type: 'image',
            description: 'Imagen del logotipo para temas claros.',
            options: {
              hotspot: true, // Permite al editor definir el hotspot y crop
            },
            fields: [
              {
                name: 'alt',
                title: 'Texto Alternativo (Español)',
                type: 'string',
                description: 'Descripción alternativa para logotipo claro en español.',
                validation: Rule => Rule.max(150),
              },
              {
                name: 'alt_eu',
                title: 'Texto Alternativo (Euskera)',
                type: 'string',
                description: 'Descripción alternativa para logotipo claro en euskera.',
                validation: Rule => Rule.max(150),
              },
            ],
            preview: {
              select: {
                title_es: 'alt',
                title_eu: 'alt_eu',
                media: 'asset',
              },
              prepare(selection) {
                const { title_es, title_eu, media } = selection;
                return {
                  title: title_es || title_eu || 'Logotipo Claro',
                  media: media,
                };
              },
            },
          },
          {
            name: 'dark',
            title: 'Logotipo Oscuro',
            type: 'image',
            description: 'Imagen del logotipo para temas oscuros.',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                title: 'Texto Alternativo (Español)',
                type: 'string',
                description: 'Descripción alternativa para logotipo oscuro en español.',
                validation: Rule => Rule.max(150),
              },
              {
                name: 'alt_eu',
                title: 'Texto Alternativo (Euskera)',
                type: 'string',
                description: 'Descripción alternativa para logotipo oscuro en euskera.',
                validation: Rule => Rule.max(150),
              },
            ],
            preview: {
              select: {
                title_es: 'alt',
                title_eu: 'alt_eu',
                media: 'asset',
              },
              prepare(selection) {
                const { title_es, title_eu, media } = selection;
                return {
                  title: title_es || title_eu || 'Logotipo Oscuro',
                  media: media,
                };
              },
            },
          },
        ],
        preview: {
          select: {
            lightTitle: 'light.alt',
            lightTitleEu: 'light.alt_eu',
            darkTitle: 'dark.alt',
            darkTitleEu: 'dark.alt_eu',
          },
          prepare(selection) {
            const { lightTitle, lightTitleEu, darkTitle, darkTitleEu } = selection;
            return {
              title: 'Logotipos',
              subtitle: `Claro: ${lightTitle || lightTitleEu || 'N/A'}, Oscuro: ${darkTitle || darkTitleEu || 'N/A'}`,
            };
          },
        },
      },
      {
        name: 'menuItems',
        title: 'Elementos del Menú',
        type: 'array',
        description: 'Lista de elementos que aparecerán en el menú de navegación.',
        of: [
          {
            type: 'object',
            title: 'Elemento de Menú',
            description: 'Elemento principal del menú con posibles subelementos.',
            fields: [
              {
                name: 'title',
                title: 'Título',
                type: 'object',
                description: 'Título del elemento del menú en diferentes idiomas.',
                fields: [
                  {
                    name: 'es',
                    title: 'Español',
                    type: 'string',
                    description: 'Título en español.',
                  },
                  {
                    name: 'eu',
                    title: 'Euskera',
                    type: 'string',
                    description: 'Título en euskera.',
                  },
                ],
              },
              {
                name: 'slug',
                title: 'Slug',
                type: 'object',
                description: 'URL amigable para el elemento del menú en diferentes idiomas.',
                fields: [
                  {
                    name: 'es',
                    title: 'Slug en Español',
                    type: 'slug',
                    options: {
                      source: 'title.es',
                      maxLength: 96,
                    },
                    description: 'Slug generado automáticamente a partir del título en español.',
                  },
                  {
                    name: 'eu',
                    title: 'Slug en Euskera',
                    type: 'slug',
                    options: {
                      source: 'title.eu',
                      maxLength: 96,
                    },
                    description: 'Slug generado automáticamente a partir del título en euskera.',
                  },
                ],
              },
              {
                name: 'subItems',
                title: 'Subelementos del Menú',
                type: 'array',
                description: 'Subelementos anidados dentro del elemento principal del menú.',
                of: [
                  {
                    type: 'object',
                    title: 'Subelemento de Menú',
                    description: 'Elemento anidado dentro de un elemento principal del menú.',
                    fields: [
                      {
                        name: 'title',
                        title: 'Título',
                        type: 'object',
                        description: 'Título del subelemento del menú en diferentes idiomas.',
                        fields: [
                          {
                            name: 'es',
                            title: 'Español',
                            type: 'string',
                            description: 'Título en español.',
                          },
                          {
                            name: 'eu',
                            title: 'Euskera',
                            type: 'string',
                            description: 'Título en euskera.',
                          },
                        ],
                      },
                      {
                        name: 'slug',
                        title: 'Slug',
                        type: 'object',
                        description: 'URL amigable para el subelemento del menú en diferentes idiomas.',
                        fields: [
                          {
                            name: 'es',
                            title: 'Slug en Español',
                            type: 'slug',
                            options: {
                              source: 'title.es',
                              maxLength: 96,
                            },
                            description: 'Slug generado automáticamente a partir del título en español.',
                          },
                          {
                            name: 'eu',
                            title: 'Slug en Euskera',
                            type: 'slug',
                            options: {
                              source: 'title.eu',
                              maxLength: 96,
                            },
                            description: 'Slug generado automáticamente a partir del título en euskera.',
                          },
                        ],
                      },
                    ],
                    preview: {
                      select: {
                        title_es: 'title.es',
                        title_eu: 'title.eu',
                        slug_es: 'slug.es.current',
                        slug_eu: 'slug.eu.current',
                      },
                      prepare(selection) {
                        const { title_es, title_eu, slug_es, slug_eu } = selection;
                        return {
                          title: title_es || title_eu || 'Sin título',
                          subtitle: `Slug ES: ${slug_es || 'N/A'}, Slug EU: ${slug_eu || 'N/A'}`,
                        };
                      },
                    },
                  },
                ],
              },
            ],
            preview: {
              select: {
                title_es: 'title.es',
                title_eu: 'title.eu',
                slug_es: 'slug.es.current',
                slug_eu: 'slug.eu.current',
              },
              prepare(selection) {
                const { title_es, title_eu, slug_es, slug_eu } = selection;
                return {
                  title: title_es || title_eu || 'Sin título',
                  subtitle: `Slug ES: ${slug_es || 'N/A'}, Slug EU: ${slug_eu || 'N/A'}`,
                };
              },
            },
          },
        ],
        preview: {
          select: {
            logoTitle: 'logos.light.alt',
            logoTitleEu: 'logos.light.alt_eu',
            menuCount: 'menuItems.length',
          },
          prepare(selection) {
            const { logoTitle, logoTitleEu, menuCount } = selection;
            return {
              title: 'Encabezado',
              subtitle: `Logotipo Claro: ${logoTitle || logoTitleEu || 'N/A'}, ${menuCount} elementos de menú`,
            };
          },
        },
    }]}