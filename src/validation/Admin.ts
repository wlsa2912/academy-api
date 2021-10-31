/* eslint-disable import/prefer-default-export */
const yup = require('yup');

export const addCreditsToStudentValidate = yup.object().shape({
  uuid: yup.string().required(),
  method: yup.string().required(),
  credits: yup.number().required(),
  price: yup.number().required(),
});

export const refundCreditsBoughtValidate = yup.object().shape({
  uuid: yup.string().required(),
  id: yup.string().required(),
});

export const getAllTransactionsValidate = yup.object().shape({
  collectionsPerPage: yup.number().required(),
  page: yup.number().required(),
});

export const getAllGroupsValidate = yup.object().shape({
  collectionsPerPage: yup.number().required(),
  page: yup.number().required(),
});

export const createAClassValidate = yup.object().shape({
  title: yup.string().required(),
  modality: yup.string().required(),
  date: yup.date().required(),
  price: yup.number().required(),
  status: yup.string().required(),
  vacancies: yup.number().required(),
});

export const createAPlanValidate = yup.object().shape({
  title: yup.string().required(),
  modality: yup.string().required(),
  date: yup.date().required(),
  enddate: yup.date().required(),
  price: yup.number().required(),
  status: yup.string().required(),
  vacancies: yup.number().required(),
});
