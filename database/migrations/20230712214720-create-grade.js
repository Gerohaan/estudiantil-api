'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Grades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_teacher: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_section: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      turn: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amount_in_tuition: {
        allowNull: false,
        type: Sequelize.STRING
      },
      limit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Grades');
  }
};