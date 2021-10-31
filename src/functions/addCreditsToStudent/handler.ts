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
import AdminController from '@controllers/Admin';
import AuthAdmin from 'src/auth/AuthAdmin';
import schema from './schema';

const addCreditsToStudent: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event: any) => {
  const verifyToken = await AuthAdmin(event.headers.token);
  if (verifyToken) {
    const adminController = new AdminController();
    try {
      const res = await adminController.addCreditsToStudent(event.body);
      if (Object.keys(res).length > 0) {
        return Response200(res);
      }
      return Response404({
        message: 'Usuario não encontrado',
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
export const main = middyfy(addCreditsToStudent);
