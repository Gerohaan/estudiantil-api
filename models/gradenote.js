'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GradeNote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GradeNote.init({
    id_grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: {
        msg : 'id se encuentra registrado'
      }
    },
    id_student: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: {
        msg : 'id se encuentra registrado'
      }
    },
    id_lapse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: {
        msg : 'id se encuentra registrado'
      }
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING
    },
    appreciation: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'GradeNote',
  });
  return GradeNote;
};