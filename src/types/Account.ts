/* eslint-disable import/no-unresolved */
import { Account } from '@entities/Account';

export type AccountRegister = Pick<Account, 'full_name' | 'email' | 'password' | 'cpf' | 'birthday' | 'full_address' | 'cellphone'>
export type AccountLogin = Pick<Account, 'email' | 'password'>
