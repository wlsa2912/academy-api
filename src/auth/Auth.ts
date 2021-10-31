/* eslint-disable no-return-await */
/* eslint-disable import/no-unresolved */
// @ts-ignore
import Log from '@controllers/Log';
import jwt from 'jsonwebtoken';

export default async function Auth(token: string): Promise<boolean> {
  Log.info('Autenticando Token');
  if (!token) {
    Log.error('Token não encontrado');
    return false;
  }
  return await jwt.verify(token, 'athlete_payload_token_@vap', (err) => {
    if (err) {
      Log.error('Token invalido!');
      return false;
    }
    return true;
  });
}
