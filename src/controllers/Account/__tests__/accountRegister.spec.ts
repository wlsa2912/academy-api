/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */

import { accountRegisterMock } from '@mocks/Account';
import accountRegister from '@repositories/Account/accountRegister';
import { AccountRegister } from '@typs/Account';

/* eslint-disable no-undef */
describe('AccountRegister', () => {
  it('Passando dados validos deve retornar os dados enviados e ter cadastrado no banco de dados.', async () => {
    const register = await accountRegister(<AccountRegister>accountRegisterMock);
    return expect(register).toHaveProperty('cpf');
  });

  it('Isso deve acusar erro pois não foi passado os dados corretamente.', async () => {
    const register = await accountRegister(<any>{});
    return expect(register).toBe(undefined);
  });
});
