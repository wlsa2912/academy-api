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
  const account = await accountController.accountRegister(event.body);
  if (account) {
    return Response200({
      message: 'OK.',
    });
  }
  return Response404({
    message: 'Erro, dados invalidos ou conta já existente.',
  });
};
export const main = middyfy(accountRegister);
