/* eslint-disable import/prefer-default-export */
const yup = require('yup');

export const registerValidate = yup.object().shape({
  full_name: yup.string().required(),
  full_address: yup.string().required(),
  cellphone: yup.string().required(),
  email: yup.string().email().required(),
  birthday: yup.date().required(),
  cpf: yup.string().required(),
  password: yup.string().required(),
});

export const loginValidate = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
