/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import 'source-map-support/register';

import {
  Response200, Response400, ValidatedEventAPIGatewayProxyEvent,
} from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import StudentController from '@controllers/Student';
import Auth from 'src/auth/Auth';

const getAllClasses: ValidatedEventAPIGatewayProxyEvent<any> = async (event: any) => {
  const verifyToken = await Auth(event.headers.token);
  if (verifyToken) {
    const studentController = new StudentController();
    const classes = await studentController.getAllClasses();
    return Response200(<any>classes);
  }
  return Response400({
    message: 'Erro, token invalido.',
  });
};
export const main = middyfy(getAllClasses);
