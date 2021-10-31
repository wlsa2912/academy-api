/* eslint-disable max-len */
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
import AdminController from '@controllers/Admin';
import AuthAdmin from 'src/auth/AuthAdmin';
import schema from './schema';

const createAClass: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event: any) => {
  const verifyToken = await AuthAdmin(event.headers.token);
  if (verifyToken) {
    const adminController = new AdminController();
    try {
      const res = await adminController.createAClass(event.body);
      return Response200(<any>res);
    } catch {
      return Response400({ message: 'Erro ao criar a aula.' });
    }
  }
  return Response400({
    message: 'Erro, token invalido.',
  });
};
export const main = middyfy(createAClass);
