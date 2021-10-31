export default {
  type: 'object',
  properties: {
    uuid: { type: 'string' },
    method: { type: 'string' },
    credits: { type: 'number' },
    price: { type: 'number' },
  },
  required: ['uuid', 'method', 'credits', 'price'],
} as const;
