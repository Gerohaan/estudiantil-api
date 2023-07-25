'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GradeSubject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GradeSubject.belongsTo(models.Grade, { as: "grade", foreignKey: "id_grade" });
      GradeSubject.belongsTo(models.Subject, { as: "subject", foreignKey: "id_subject" });
    }
  }
  GradeSubject.init({
    id_grade: {
      type : DataTypes.INTEGER,
      allowNull : false,
      unique : {
        msg : 'Id ya se encuentra registrado'
      }
    },
    id_subject: {
      type : DataTypes.INTEGER,
      allowNull : false,
      unique : {
        msg : 'Id ya se encuentra registrado'
      }
    }
  }, {
    sequelize,
    modelName: 'GradeSubject',
  });
  return GradeSubject;
};