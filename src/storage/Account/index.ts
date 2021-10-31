/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */

import { Sequelize } from 'sequelize';
import jwt from 'jsonwebtoken';

import AccountModel from '@models/Account';
import WalletModel from '@models/Wallet';

import Log from '@controllers/Log';
import { Account } from '@entities/Account';
import hashPassword from '@helpers/hashPassword';
import { AccountRegister, AccountLogin } from '@typs/Account';

import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import accountMakeWallet from '@repositories/Account/accountMakeWallet';
//@ts-ignore
import decodeHashPassword from '@helpers/decodeHashPassword';
//@ts-ignore
import accountSign from '@repositories/Account/accountSign';
//@ts-ignore
import SequelizeConfig from '../../config/database';

export default class AccountStorage {
  async accountRegister(data: AccountRegister): Promise<Account> {
    Log.info('Criando um Account<accounts> no banco de dados');
    const {
      full_name, birthday, cpf, email, password, cellphone, full_address,
    } = data;

    const uuid = uuidv4();
    Log.success(`Criado uuid ${uuid} pro usuário ${full_name}`);
    const connection = new Sequelize(SequelizeConfig);
    AccountModel.init(connection);

    const userAlreadyExistsCheck = await AccountModel.findOne({ where: { email } });

    if (!userAlreadyExistsCheck) {
      const wallet = await accountMakeWallet(uuid);
      await AccountModel.create({
        uuid,
        full_name,
        email,
        password: hashPassword(password),
        full_address,
        wallet,
        cellphone,
        cpf,
        birthday,
        creation: new Date(),
        permission: 'student',
      });
      Log.success('Conta criada com sucesso!');
      connection.close();

      return <Account>data;
    }
    connection.close();
    return <Account>undefined;
  }

  async accountLogin(data: AccountLogin): Promise<string> {
    const connection = new Sequelize(SequelizeConfig);
    AccountModel.init(connection);

    const user = await AccountModel.findOne({ where: { email: data.email } });

    if (user) {
      //@ts-ignore
      const checkPassword = decodeHashPassword(data.password, user.password);
      if (checkPassword) {
        const token = accountSign({
          //@ts-ignore
          full_name: user.full_name,
          //@ts-ignore
          permission: user.permission,
          //@ts-ignore
          uuid: user.uuid,
        });
        return <any>token;
      }
    }

    connection.close();
    return <string>undefined;
  }

  async accountMakeWallet(uuid: string): Promise<string> {
    const connection = new Sequelize(SequelizeConfig);
    WalletModel.init(connection);

    Log.info(`Criando uma wallet pro uuid ${uuid}`);
    if (uuidValidate(uuid)) {
      Log.success('UUID Valido para criação da Wallet');
      const wallet = uuidv4();
      await WalletModel.create({
        uuid,
        wallet,
        balance: 0,
      });
      Log.success(`Wallet ${wallet} criada com sucesso pro uuid ${uuid}`);
      connection.close();
      return wallet;
    }
    Log.error('Erro ao criar wallet uuid invalido!');
    connection.close();
    return undefined;
  }
}
