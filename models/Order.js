const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  const Order = sequelize.define("Order", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(5),
      unique: true
    }
  })

  Order.associate = (models) => {
    Order.hasOne(models.Cart);
  };

  return Order;
};