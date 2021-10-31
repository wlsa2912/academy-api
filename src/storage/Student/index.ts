/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */

import { Sequelize } from 'sequelize';
import WalletModel from '@models/Wallet';
import { validate as uuidValidate } from 'uuid';
import { Wallet } from '@entities/Wallet';
//@ts-ignore
import { GetUserTransactions } from '@typs/Student';
import TransactionModel from '@models/Transaction';
import ClassModel from '@models/Class';
//@ts-ignore
import SequelizeConfig from '../../config/database';

export default class StudentStorage {
  async getWalletBalance(account_uuid: string): Promise<Wallet> {
    const validate = uuidValidate(account_uuid);
    if (validate) {
      const connection = new Sequelize(SequelizeConfig);
      WalletModel.init(connection);
      const wallet = await WalletModel.findOne({ where: { uuid: account_uuid }, attributes: ['wallet', 'balance'] });
      connection.close();
      return <any>wallet;
    }
    return <any>undefined;
  }

  async getUserTransactions(data: GetUserTransactions) {
    const connection = new Sequelize(SequelizeConfig);
    TransactionModel.init(connection);
    //@ts-ignore
    const transactions = await TransactionModel.findAll({ offset: data.page, limit: data.transactionsPerPage, uuid: data.uuid });
    connection.close();
    return transactions;
  }

  async getAllClasses() {
    const connection = new Sequelize(SequelizeConfig);
    ClassModel.init(connection);
    const classes = await ClassModel.findAll();
    connection.close();
    return classes;
  }
}
