import { DataTypes, Model } from 'sequelize';

// @ts-ignore
class Account extends Model {
  static init(sequelize) {
    // @ts-ignore
    super.init({
      uuid: DataTypes.STRING,
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      full_address: DataTypes.STRING,
      wallet: DataTypes.STRING,
      cellphone: DataTypes.STRING,
      cpf: DataTypes.STRING,
      birthday: DataTypes.DATE,
      creation: DataTypes.DATE,
      permission: { type: DataTypes.STRING, defaultValue: 'student' },
    }, { sequelize });
  }
}

export default Account;
