/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
// @ts-ignore
import AdminStorage from '@storage/Admin';
import { GetAllGroups } from '@typs/Admin';
import { getAllGroupsValidate } from '@validation/Admin';

export default async function getAllGroups(data: GetAllGroups) {
  const validate = await getAllGroupsValidate.isValid(data);
  if (validate) {
    const storage = new AdminStorage();
    return await storage.getAllGroups(data);
  }
  return <null>{};
}
