import { DataTypes, Model } from 'sequelize';
// @ts-ignore
class Transaction extends Model {
  static init(sequelize) {
    // @ts-ignore
    super.init({
      uuid: DataTypes.STRING,
      method: DataTypes.STRING,
      credits: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      date: DataTypes.DATE,
    }, { sequelize });
  }
}

export default Transaction;
