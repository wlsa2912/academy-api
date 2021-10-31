/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import 'source-map-support/register';

import { Response200, Response404, ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import AccountController from '@controllers/Account';
import schema from './schema';

const accountRegister: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event: any) => {
  const accountController = new AccountController();
  const account = await accountController.accountLogin(event.body);
  if (account) {
    return Response200(<any>account);
  }
  return Response404({
    message: 'Erro, email ou senha incorretos.',
  });
};
export const main = middyfy(accountRegister);
