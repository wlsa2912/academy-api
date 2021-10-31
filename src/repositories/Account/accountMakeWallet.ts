/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
import AccountStorage from '@storage/Account';

export default async function accountMakeWallet(uuid: string) : Promise<string> {
  const storage = new AccountStorage();
  return await storage.accountMakeWallet(uuid);
}
