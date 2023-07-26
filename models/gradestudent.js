'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GradeStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GradeStudent.belongsTo(models.Grade, { as: "grade", foreignKey: "id_grade" });
      GradeStudent.belongsTo(models.Student, { as: "student", foreignKey: "id_student" });
    }
  }
  GradeStudent.init({
    id_grade: {
      type : DataTypes.INTEGER,
      allowNull : false,
      unique : {
        msg : 'Id ya se encuentra registrado'
      } 
    },
    id_student: {
      type : DataTypes.INTEGER,
      allowNull : false,
      unique : {
        msg : 'Id ya se encuentra registrado'
      } 
    }
  }, {
    sequelize,
    modelName: 'GradeStudent',
  });
  return GradeStudent;
};