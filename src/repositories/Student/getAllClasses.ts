/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
// @ts-ignore
import StudentStorage from '@storage/Student';

export default async function getAllClasses() {
  const storage = new StudentStorage();
  return await storage.getAllClasses();
}
