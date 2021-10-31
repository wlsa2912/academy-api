/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */

import addCreditsToStudentRepository from '@repositories/Admin/addCreditsToStudent';
import refundCreditsBoughtRepository from '@repositories/Admin/refundCreditsBought';
import getAllTransactionsRepository from '@repositories/Admin/getAllTransactions';
import createAClassRepository from '@repositories/Admin/createAClass';
import deleteClassRepository from '@repositories/Admin/deleteAClass';
import deleteAPlanRepository from '@repositories/Admin/deleteAPlan';
import editAClassRepository from '@repositories/Admin/editAClass';
import createAPlanRepository from '@repositories/Admin/createAPlan';
import getAllGroupsRepository from '@repositories/Admin/getAllGroups';
import editAPlanRepository from '@repositories/Admin/editAPlan';

import {
  AddCreditsToStudent, CreateAClass, CreateAPlan, GetAllTransactions, RefundCreditsBought,
} from '@typs/Admin';

export default class AdminController {
  async addCreditsToStudent(data: AddCreditsToStudent) {
    return await addCreditsToStudentRepository(data);
  }

  async refundCreditsBought(data: RefundCreditsBought) {
    return await refundCreditsBoughtRepository(data);
  }

  async getAllTransactions(data: GetAllTransactions) {
    return await getAllTransactionsRepository(data);
  }

  async createAClass(data: CreateAClass) {
    return await createAClassRepository(data);
  }

  async createAPlan(data: CreateAPlan) {
    return await createAPlanRepository(data);
  }

  async deleteAClass(uuid: string) {
    return await deleteClassRepository(uuid);
  }

  async deleteAPlan(uuid: string) {
    return await deleteAPlanRepository(uuid);
  }

  async editAClass(uuid: string, data: any) {
    return await editAClassRepository(uuid, data);
  }

  async editAPlan(uuid: string, data: any) {
    return await editAPlanRepository(uuid, data);
  }

  async getAllGroups(data: any) {
    return await getAllGroupsRepository(data);
  }
}
