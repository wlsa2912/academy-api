/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
// @ts-ignore
import AdminStorage from '@storage/Admin';
import { GetAllTransactions } from '@typs/Admin';
import { getAllTransactionsValidate } from '@validation/Admin';

export default async function getAllTransactions(data: GetAllTransactions) {
  const validate = await getAllTransactionsValidate.isValid(data);
  if (validate) {
    const storage = new AdminStorage();
    return await storage.getAllTransactions(data);
  }
  return <null>{};
}
