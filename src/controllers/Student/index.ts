/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */

import getUserTransactionsRepository from '@repositories/Student/getUserTransactions';
import getWalletBalanceRepository from '@repositories/Student/getWalletBalance';
import getAllClassesRepository from '@repositories/Student/getAllClasses';

import { GetUserTransactions } from '@typs/Student';

export default class StudentController {
  async getWalletBalance(request: string) {
    return await getWalletBalanceRepository(request);
  }

  async getUserTransactions(request: GetUserTransactions) {
    return await getUserTransactionsRepository(request);
  }

  async getAllClasses() {
    return await getAllClassesRepository();
  }
}
