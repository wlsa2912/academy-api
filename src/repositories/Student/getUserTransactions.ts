/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
// @ts-ignore
import StudentStorage from '@storage/Student';
import { GetUserTransactions } from '@typs/Student';
import { getUserTransactionsValidate } from '@validation/Student';

export default async function getUserTransactions(data: GetUserTransactions) {
  const validate = await getUserTransactionsValidate.isValid(data);
  if (validate) {
    const storage = new StudentStorage();
    return await storage.getUserTransactions(data);
  }
  return <null>{};
}
