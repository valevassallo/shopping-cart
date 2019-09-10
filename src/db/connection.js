const Sequelize = require('sequelize');

const sequelize = new Sequelize('shoppingcart', 'root', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect', err)
  })
  
module.exports = sequelize;
global.sequelize = sequelize;