/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-await */
import AdminStorage from '@storage/Admin';
import { CreateAPlan } from '@typs/Admin';
import { createAPlanValidate } from '@validation/Admin';

export default async function createAPlan(data: CreateAPlan) {
  const validate = await createAPlanValidate.isValid(data);
  if (validate) {
    const storage = new AdminStorage();
    return await storage.createAPlan(data);
  }
  return <null>{};
}
