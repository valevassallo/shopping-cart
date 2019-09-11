/* eslint-disable */
"use strict";

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert("Carts", [{}], {});
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("Carts", null, {});
  }
};
