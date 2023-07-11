'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    documentNumber: {
      type: DataTypes.STRING,
      allowNull : false,
      unique: {
        msg : 'El documento se encuentra registrado'
      } 
    }
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};