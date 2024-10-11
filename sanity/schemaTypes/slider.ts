// schemas/slider.js
export default {
    name: 'slider',
    title: 'Carrusel principal de imágenes',
    type: 'document',
    fields: [
      {
        name: 'slides',
        title: 'Slides',
        type: 'array',
        of: [{ type: 'sliderItem' }],
        validation: Rule => Rule.min(1).error('Debe haber al menos un slide en el slider.'),
      },
    ],
    preview: {
      select: {
        slideCount: 'slides.length',
      },
      prepare(selection) {
        const { slideCount } = selection;
        return {
          title: 'Slider',
          subtitle: `${slideCount} slide${slideCount !== 1 ? 's' : ''}`,
        };
      },
    },
  };