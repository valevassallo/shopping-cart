const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  const Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    img: DataTypes.STRING
  })

  Product.associate = (models) => {
    Product.belongsTo(models.Cart);
  };

  return Product;
};