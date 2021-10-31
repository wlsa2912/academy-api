/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */

import accountLoginRepository from '@repositories/Account/accountLogin';
import accountMakeWalletRepository from '@repositories/Account/accountMakeWallet';
import accountRegisterRepository from '@repositories/Account/accountRegister';
import { AccountLogin, AccountRegister } from '@typs/Account';

export default class AccountController {
  async accountLogin(request: AccountLogin) {
    return await accountLoginRepository(request);
  }

  async accountRegister(request: AccountRegister) {
    return await accountRegisterRepository(request);
  }

  async accountMakeWallet(uuid: string) {
    return await accountMakeWalletRepository(uuid);
  }
}
