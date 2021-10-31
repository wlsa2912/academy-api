/* eslint-disable import/prefer-default-export */
const yup = require('yup');

export const getUserTransactionsValidate = yup.object().shape({
  transactionsPerPage: yup.number().required(),
  page: yup.number().required(),
});
