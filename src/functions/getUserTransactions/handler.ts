/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import 'source-map-support/register';

import {
  Response200, Response400, Response404, ValidatedEventAPIGatewayProxyEvent,
} from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import StudentController from '@controllers/Student';
import Auth from 'src/auth/Auth';

const getUserTransactions: ValidatedEventAPIGatewayProxyEvent<any> = async (event: any) => {
  const verifyToken = await Auth(event.headers.token);
  if (verifyToken) {
    const studentController = new StudentController();
    try {
      const res = await studentController.getUserTransactions(event.pathParameters);
      if (Object.keys(res).length > 0) {
        return Response200(<any>res);
      }
      return Response404({
        message: 'Esse usuario não tem transações ou ele não existe.',
      });
    } catch {
      return Response400({
        message: 'Erro ao completar a transação.',
      });
    }
  }
  return Response400({
    message: 'Erro, token invalido.',
  });
};
export const main = middyfy(getUserTransactions);
