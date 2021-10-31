import { DataTypes, Model } from 'sequelize';
// @ts-ignore
class Class extends Model {
  static init(sequelize) {
    // @ts-ignore
    super.init({
      uuid: DataTypes.STRING,
      title: DataTypes.STRING,
      modality: DataTypes.STRING,
      date: DataTypes.DATE,
      price: DataTypes.INTEGER,
      status: DataTypes.STRING,
      vacancies: DataTypes.INTEGER,
      group: DataTypes.STRING,
    }, { sequelize });
  }
}

export default Class;
