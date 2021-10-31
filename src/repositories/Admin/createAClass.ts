/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-await */
import AdminStorage from '@storage/Admin';
import { CreateAClass } from '@typs/Admin';
import { createAClassValidate } from '@validation/Admin';

export default async function createAClass(data: CreateAClass) {
  const validate = await createAClassValidate.isValid(data);
  if (validate) {
    const storage = new AdminStorage();
    return await storage.createAClass(data);
  }
  return <null>{};
}
