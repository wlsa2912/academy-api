/* eslint-disable no-var */
/* eslint-disable no-extend-native */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import {
  differenceInDays,
} from 'date-fns';

function addDays(Cdate, days) {
  const date = new Date(Cdate);
  date.setDate(date.getDate() + days);
  return date;
}

const fetchClassesByDate = async (date: any, dateend: any) => {
  var dataInicio = new Date(date);
  var dataFinal = new Date(dateend);
  const weekSelected = dataInicio.getDay();
  const differenceDays = differenceInDays(dataFinal, dataInicio);
  const raw = [];
  for (let i = 0; i < differenceDays; i++) {
    dataInicio = addDays(dataInicio, 1);
    if (dataInicio.getDay() === weekSelected) {
      raw.push(dataInicio);
    }
  }
  return raw;
};

export default fetchClassesByDate;
