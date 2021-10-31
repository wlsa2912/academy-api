export default {
  type: 'object',
  properties: {
    full_name: { type: 'string' },
    full_address: { type: 'string' },
    cellphone: { type: 'string' },
    email: { type: 'string' },
    birthday: { type: 'string' },
    cpf: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['full_name', 'full_address', 'cellphone', 'email', 'birthday', 'cpf', 'password'],
} as const;
