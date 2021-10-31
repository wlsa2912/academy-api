/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import 'source-map-support/register';

import {
  Response200, Response404, Response400, ValidatedEventAPIGatewayProxyEvent,
} from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import StudentController from '@controllers/Student';
import Auth from 'src/auth/Auth';

const getWalletBalance: ValidatedEventAPIGatewayProxyEvent<any> = async (event: any) => {
  const verifyToken = await Auth(event.headers.token);
  if (verifyToken) {
    const { uuid } = event.pathParameters;

    const studentController = new StudentController();
    const wallet = await studentController.getWalletBalance(uuid);
    if (wallet) {
      return Response200(<any>wallet);
    }
    return Response404({
      message: 'Erro, dados invalidos ou usuário inexistente.',
    });
  }
  return Response400({
    message: 'Erro, token invalido.',
  });
};
export const main = middyfy(getWalletBalance);
