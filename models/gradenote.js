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
      GradeNote.belongsTo(models.Grade, { as: "grade", foreignKey: "id_grade" });
      GradeNote.belongsTo(models.Subject, { as: "subject", foreignKey: "id_subject" });
      GradeNote.belongsTo(models.Student, { as: "student", foreignKey: "id_student" });
      GradeNote.belongsTo(models.Lapse, { as: "lapse", foreignKey: "id_lapse" });
    }
  }
  GradeNote.init({
    id_grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_subject: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_student: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_lapse: {
      type: DataTypes.INTEGER,
      allowNull: false,
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