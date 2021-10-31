export default {
  type: 'object',
  properties: {
    title: { type: 'string' },
    modality: { type: 'string' },
    price: { type: 'number' },
    date: { type: 'Date' },
    enddate: { type: 'Date' },
    status: { type: 'string' },
    vacancies: { type: 'number' },
  },
  required: ['title', 'modality', 'date', 'enddate', 'status', 'vacancies', 'price'],
} as const;
