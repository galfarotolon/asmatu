// /sanity/schemaTypes/homepage.ts

import { defineType, defineField } from 'sanity'
import slide from './slide'

export default defineType({
  name: 'homepage',
  title: 'Página de Inicio',
  type: 'document',
  fields: [
    defineField({
      name: 'slides',
      title: 'Diapositivas del Slider',
      type: 'array',
      of: [{ type: 'slide' }],
    }),
    // Agrega más campos aquí si lo deseas...
  ],
  preview: {
    select: {
      slides: 'slides',
    },
    prepare(selection) {
      const { slides } = selection
      const count = slides ? slides.length : 0

      return {
        title: 'Página de Inicio',
        subtitle: `${count} diapositiva${count === 1 ? '' : 's'}`,
      }
    },
  },
})
