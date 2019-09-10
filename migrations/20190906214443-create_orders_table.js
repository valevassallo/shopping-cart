'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      code: {
        type: Sequelize.STRING(5),
        unique: true
      }
    })
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};
