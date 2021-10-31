/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
// @ts-ignore
import { Wallet } from '@entities/Wallet';
import StudentStorage from '@storage/Student';

export default async function getWalletBalance(account_uuid: string) : Promise<Wallet> {
  const storage = new StudentStorage();
  return await storage.getWalletBalance(account_uuid);
}
