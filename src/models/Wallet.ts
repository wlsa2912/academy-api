import { DataTypes, Model } from 'sequelize';
// @ts-ignore
class Wallet extends Model {
  static init(sequelize) {
    // @ts-ignore
    super.init({
      uuid: DataTypes.STRING,
      wallet: DataTypes.STRING,
      balance: DataTypes.INTEGER,
    }, { sequelize });
  }
}

export default Wallet;
