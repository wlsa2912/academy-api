/* eslint-disable padded-blocks */
/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
import { Account } from '@entities/Account';
import { AccountRegister } from '@typs/Account';
import { registerValidate } from '@validation/Account';
import AccountStorage from '@storage/Account';
import Log from '@controllers/Log';
import { validateCPF } from '@helpers/validateCPF';

export default async function accountRegister(data: AccountRegister): Promise<Account> {
  Log.info('Checando se os dados enviados estão validos!');
  const validate = await registerValidate.isValid(data);

  if (validate) {
    Log.success('Dados validados com sucesso!');
    if (validateCPF(data.cpf)) {
      const storage = new AccountStorage();
      return await storage.accountRegister(data);
    }
  }

  Log.error('Dados invalidos!');
  return <Account>undefined;
}
