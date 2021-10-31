/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const bcrypt = require('bcryptjs');

export default function hashPassword(password: string) : string {
  return bcrypt.hashSync(password, 8);
}
