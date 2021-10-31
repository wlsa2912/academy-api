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
import AdminController from '@controllers/Admin';
import AuthAdmin from 'src/auth/AuthAdmin';

const getAllGroups: ValidatedEventAPIGatewayProxyEvent<any> = async (event: any) => {
  const verifyToken = await AuthAdmin(event.headers.token);
  if (verifyToken) {
    const adminController = new AdminController();
    const groups = await adminController.getAllGroups(event.pathParameters);
    if (Object.keys(groups).length > 0) {
      return Response200(<any>groups);
    }
    return Response404({
      message: 'Erro, planos não encontrados!',
    });
  }
  return Response400({
    message: 'Erro, token invalido.',
  });
};
export const main = middyfy(getAllGroups);
