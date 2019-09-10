'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Products',
      'CartId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Carts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
      .then(() => {
        return queryInterface.addColumn(
          'Carts',
          'OrderId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Orders',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      });
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.removeColumn(
      'Products',
      'CartId'
    )
      .then(() => {
        return queryInterface.removeColumn(
          'Carts',
          'OrderId'
        );
      });
  }
};
