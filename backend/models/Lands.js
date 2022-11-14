const Sequelize = require('sequelize');
const db = require('../db/db')

const Lands = db.define('lands', {
  tokeen: {
    type: Sequelize.STRING,
    unique: true
  },
  phone: {
    type: Sequelize.STRING,
  },
  plots: {
    type: Sequelize.STRING,
    unique: true
  },
  postedBy: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  community: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
});


module.exports = Lands