/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
import AdminStorage from '@storage/Admin';

export default async function editAPlan(uuid: string, data: any) {
  const storage = new AdminStorage();
  return await storage.editAPlan(uuid, data);
}
