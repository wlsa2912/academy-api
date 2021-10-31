/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */

import WalletModel from '@models/Wallet';
import TransactionModel from '@models/Transaction';
import ClassModel from '@models/Class';
import GroupModel from '@models/Group';

import {
  AddCreditsToStudent, CreateAClass, CreateAPlan, GetAllGroups, GetAllTransactions, RefundCreditsBought,
} from '@typs/Admin';
import { Sequelize } from 'sequelize';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import Log from '@controllers/Log';
import fetchClassesByDate from '@helpers/fetchClassesByDate';
//@ts-ignore
import SequelizeConfig from '../../config/database';

export default class AdminStorage {
  async addCreditsToStudent(data: AddCreditsToStudent) {
    const connection = new Sequelize(SequelizeConfig);
    WalletModel.init(connection);
    TransactionModel.init(connection);
    if (uuidValidate(data.uuid)) {
      const wallet = await WalletModel.findOne({ where: { uuid: data.uuid } });
      if (wallet) {
        try {
          //@ts-ignore
          await wallet.update({ balance: wallet.balance + data.credits });
          await TransactionModel.create({
            uuid: data.uuid,
            method: data.method,
            credits: data.credits,
            price: data.price,
            date: new Date(),
          });
          return { message: 'Transação realizada com sucesso!' };
        } catch (err) {
          Log.error(err);
        }
      }
    }
    return <null>{};
  }

  async refundCreditsBought(data: RefundCreditsBought) {
    const connection = new Sequelize(SequelizeConfig);
    WalletModel.init(connection);
    TransactionModel.init(connection);

    const transaction = await TransactionModel.findOne({ where: { uuid: data.uuid, id: data.id } });

    if (transaction) {
      try {
        const wallet = await WalletModel.findOne({ where: { uuid: data.uuid } });
        //@ts-ignore
        await wallet.update({ balance: wallet.balance - transaction.credits });
        await transaction.destroy();
        connection.close();
        return { message: 'Reembolso realizado com sucesso!.' };
      } catch (err) {
        Log.error(err);
        connection.close();
        return <any>{};
      }
    }

    connection.close();
    return <any>{};
  }

  async getAllTransactions(data: GetAllTransactions) {
    const connection = new Sequelize(SequelizeConfig);
    TransactionModel.init(connection);
    //@ts-ignore
    const transactions = await TransactionModel.findAll({ offset: data.page, limit: data.transactionsPerPage });
    connection.close();
    return transactions;
  }

  async createAClass(data: CreateAClass) {
    const connection = new Sequelize(SequelizeConfig);
    ClassModel.init(connection);
    try {
      const uuid = uuidv4();
      const {
        title, modality, date, status, vacancies, price,
      } = data;
      await ClassModel.create({
        uuid,
        title,
        modality,
        date,
        status,
        vacancies,
        price,
      });
      return { uuid, ...data };
    } catch (err) {
      Log.error(err);
    }
    connection.close();
    return <null>{};
  }

  async createAPlan(data: CreateAPlan) {
    const connection = new Sequelize(SequelizeConfig);
    ClassModel.init(connection);
    GroupModel.init(connection);

    const {
      title, modality, date, enddate, price, status, vacancies,
    } = data;

    const dates = await fetchClassesByDate(date, enddate);

    const groupId = uuidv4();
    try {
      await GroupModel.create({
        uuid: groupId,
        title,
      });
      const classes = [];
      for (const i in dates) {
        const classId = uuidv4();
        const raw_class = {
          uuid: classId,
          title,
          modality,
          date: dates[i],
          price,
          status,
          vacancies,
          group: groupId,
        };
        await ClassModel.create(raw_class);
        classes.push(raw_class);
      }
      return <any>classes;
    } catch {
      connection.close();
      return <null>{};
    }
  }

  async deleteClass(uuid: string) {
    if (uuidValidate(uuid)) {
      const connection = new Sequelize(SequelizeConfig);
      ClassModel.init(connection);
      const _class = await ClassModel.findOne({ where: { uuid } });
      await _class.destroy();
      connection.close();
      return { message: 'Aula deletada com sucesso!' };
    }
    return <null>{};
  }

  async deleteAPlan(uuid: string) {
    if (uuidValidate(uuid)) {
      const connection = new Sequelize(SequelizeConfig);
      ClassModel.init(connection);
      GroupModel.init(connection);
      const plan = await GroupModel.findOne({ where: { uuid } });
      await plan.destroy();
      const classes = await ClassModel.findAll({ where: { group: uuid } });
      await classes.forEach(async (_class) => {
        await _class.destroy();
      });
      connection.close();
      return { message: 'Plano deletado com sucesso!' };
    }
    return <null>{};
  }

  async editAClass(uuid: string, data: any) {
    if (uuidValidate(uuid)) {
      if (Object.keys(data).length > 0) {
        const connection = new Sequelize(SequelizeConfig);
        ClassModel.init(connection);
        const _class = await ClassModel.findOne({ where: { uuid } });
        await _class.update(data);
        return data;
      }
    }
    return <null>{};
  }

  async editAPlan(uuid: string, data: any) {
    if (uuidValidate(uuid)) {
      if (Object.keys(data).length > 0) {
        const connection = new Sequelize(SequelizeConfig);
        ClassModel.init(connection);
        const classes = await ClassModel.findAll({ where: { group: uuid } });
        await classes.forEach(async (_class) => {
          await _class.update(data);
        });
        return data;
      }
    }
    return <null>{};
  }

  async getAllGroups(data: GetAllGroups) {
    const connection = new Sequelize(SequelizeConfig);
    GroupModel.init(connection);
    //@ts-ignore
    const groups = await GroupModel.findAll({ offset: data.page, limit: data.transactionsPerPage });
    connection.close();
    return groups;
  }
}
