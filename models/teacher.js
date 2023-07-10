'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teacher.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    documentNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'El documento se encuentra registrado'
      }
    }
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};