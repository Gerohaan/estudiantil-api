'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Person.hasMany(models.Teacher, { as: "persona", foreignKey: "id_person" });
      Person.hasMany(models.User, { as: "usuarios", foreignKey: "id_person" });
    }
  }
  Person.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    gender: DataTypes.STRING,
    document: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'El documento se encuentra registrado'
      }
    },
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    birthDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};