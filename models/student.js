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
      Student.belongsTo(models.Person, { as: "persona", foreignKey: "id_person" });
    }
  }
  Student.init({
    id_person: {
      type: DataTypes.INTEGER,
      allowNull : false,
      unique: {
        msg : 'id se encuentra registrado'
      }
    },
    representative: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};