export default {
  type: 'object',
  properties: {
    id: { type: 'number' },
    uuid: { type: 'string' },
  },
  required: ['uuid', 'id'],
} as const;
