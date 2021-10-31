/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
// @ts-ignore
import AdminStorage from '@storage/Admin';
import { AddCreditsToStudent } from '@typs/Admin';
import { addCreditsToStudentValidate } from '@validation/Admin';

export default async function addCreditsToStudent(data: AddCreditsToStudent) {
  const validate = await addCreditsToStudentValidate.isValid(data);
  if (validate) {
    const storage = new AdminStorage();
    return await storage.addCreditsToStudent(data);
  }
  return <null>{};
}
