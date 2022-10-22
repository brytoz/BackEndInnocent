const Sequelize = require('sequelize');
const db = require('../db/db')

const Tokeen = db.define('tokens', {
  tokeen: {
    type: Sequelize.STRING,
    unique: true
  }, 
  status: {
    type: Sequelize.BOOLEAN,
  }, 
});


module.exports = Tokeen