/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
// @ts-ignore
import AdminStorage from '@storage/Admin';
import { RefundCreditsBought } from '@typs/Admin';
import { refundCreditsBoughtValidate } from '@validation/Admin';

export default async function refundCreditsBought(data: RefundCreditsBought) {
  const validate = await refundCreditsBoughtValidate.isValid(data);
  if (validate) {
    const storage = new AdminStorage();
    return await storage.refundCreditsBought(data);
  }
  return <null>{};
}
