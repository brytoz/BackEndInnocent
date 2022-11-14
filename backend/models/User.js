const Sequelize = require('sequelize');
const db = require('../db/db')

const User = db.define('users', {
  fullname: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  tokeen: {
    type: Sequelize.STRING,
    unique: true
  },
  phone: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
  },
});


module.exports = User