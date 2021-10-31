/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const bcrypt = require('bcryptjs');

export default function decodeHashPassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}
