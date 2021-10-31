/* eslint-disable padded-blocks */
/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
import { AccountLogin } from '@typs/Account';
import { loginValidate } from '@validation/Account';
import AccountStorage from '@storage/Account';
import Log from '@controllers/Log';

export default async function accountLogin(data: AccountLogin): Promise<string> {
  Log.info('Checando se os dados enviados estão validos!');
  const validate = await loginValidate.isValid(data);

  if (validate) {
    Log.success('Dados validados com sucesso!');
    const storage = new AccountStorage();
    return await storage.accountLogin(data);
  }

  Log.error('Dados invalidos!');
  return <string>undefined;
}
