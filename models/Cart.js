const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  const Cart = sequelize.define("Cart", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  })

  Cart.associate = (models) => {
    Cart.hasMany(models.Product);
  };

  return Cart;
};