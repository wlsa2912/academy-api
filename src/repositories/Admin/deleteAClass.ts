/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
import AdminStorage from '@storage/Admin';

export default async function deleteClass(uuid : string) {
  const storage = new AdminStorage();
  return await storage.deleteClass(uuid);
}
