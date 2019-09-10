'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("carts", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }
    })
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('carts');
  }
};
