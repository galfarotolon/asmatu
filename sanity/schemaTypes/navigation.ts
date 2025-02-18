import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navegación',
  type: 'document',
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Elementos del Menú',
      type: 'array',
      of: [
        defineField({
          name: 'menuItem',
          title: 'Elemento del Menú',
          type: 'object',
          fields: [
            defineField({
              name: 'labelESP',
              title: 'Etiqueta (Español)',
              type: 'string'
            }),
            defineField({
              name: 'labelEU',
              title: 'Etiqueta (Euskera)',
              type: 'string'
            }),
            defineField({
              name: 'slugESP',
              title: 'Enlace (Español)',
              type: 'slug',
              options: {
                source: 'labelESP',
                maxLength: 96,
              },
            }),
            defineField({
              name: 'slugEU',
              title: 'Enlace (Euskera)',
              type: 'slug',
              options: {
                source: 'labelEU',
                maxLength: 96,
              },
            }),
            defineField({
              name: 'submenu',
              title: 'Submenú',
              type: 'array',
              of: [
                defineField({
                  name: 'submenuItem',
                  title: 'Elemento de Submenú',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'labelESP',
                      title: 'Etiqueta (Español)',
                      type: 'string'
                    }),
                    defineField({
                      name: 'labelEU',
                      title: 'Etiqueta (Euskera)',
                      type: 'string'
                    }),
                    defineField({
                      name: 'slugESP',
                      title: 'Enlace (Español)',
                      type: 'slug',
                      options: {
                        source: 'labelESP',
                        maxLength: 96,
                      },
                    }),
                    defineField({
                      name: 'slugEU',
                      title: 'Enlace (Euskera)',
                      type: 'slug',
                      options: {
                        source: 'labelEU',
                        maxLength: 96,
                      },
                    }),
                  ],
                  preview: {
                    select: {
                      labelESP: 'labelESP',
                      labelEU: 'labelEU'
                    },
                    prepare(selection) {
                      const { labelESP, labelEU } = selection;
                      return {
                        title: labelESP || labelEU || 'Sin etiqueta'
                      }
                    }
                  }
                })
              ]
            }),
          ],
          preview: {
            select: {
              labelESP: 'labelESP',
              labelEU: 'labelEU'
            },
            prepare(selection) {
              const { labelESP, labelEU } = selection;
              return {
                title: labelESP || labelEU || 'Sin etiqueta'
              }
            }
          }
        })
      ]
    })
  ],
  preview: {
    select: {
      menuItems: 'menuItems'
    },
    prepare(selection) {
      const count = selection.menuItems ? selection.menuItems.length : 0;
      return {
        title: 'Navegación',
        subtitle: `${count} elemento${count === 1 ? '' : 's'}`
      }
    }
  }
});
