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

const refundCreditsBought: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event: any) => {
  const verifyToken = await AuthAdmin(event.headers.token);
  if (verifyToken) {
    const adminController = new AdminController();
    try {
      const res = await adminController.refundCreditsBought(event.body);
      if (Object.keys(res).length > 0) {
        return Response200(<any>res);
      }
      return Response400({
        message: 'Transação não encontrada!',
      });
    } catch {
      return Response400({
        message: 'Erro ao realizar o reembolso da transação.',
      });
    }
  }
  return Response400({
    message: 'Erro, token invalido.',
  });
};
export const main = middyfy(refundCreditsBought);
