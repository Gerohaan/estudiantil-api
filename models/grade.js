'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grade.init({
    name: DataTypes.STRING,
    id_teacher: {
      type: DataTypes.INTEGER,
      allowNull : false,
      unique: {
        msg : 'id se encuentra registrado'
      }
    },
    id_section: {
      type: DataTypes.INTEGER,
      allowNull : false,
      unique: {
        msg : 'id se encuentra registrado'
      }
    },
    turn: DataTypes.STRING,
    amount_in_tuition: DataTypes.INTEGER,
    limit: DataTypes.INTEGER,
    status: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Grade',
  });
  return Grade;
};