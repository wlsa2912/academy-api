import { DataTypes, Model } from 'sequelize';
// @ts-ignore
class Group extends Model {
  static init(sequelize) {
    // @ts-ignore
    super.init({
      uuid: DataTypes.STRING,
      title: DataTypes.STRING,
    }, { sequelize });
  }
}

export default Group;
