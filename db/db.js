const dotenv  = require('dotenv')
const { Sequelize } = require('sequelize');

// enable secure credentials
dotenv.config()


module.exports =  new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.LOCALHOST,
  dialect:  'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  }
});

 