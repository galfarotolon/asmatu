export default {
    name: 'principles',
    title: 'Principios',
    type: 'document',
    fields: [
      {
        name: 'principles',
        title: 'Principios',
        type: 'array',
        of: [{ type: 'principle' }], // Reference to the individual principles
      },
    ],
  };