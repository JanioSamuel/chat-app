const Sequelize = require('sequelize');
const database = require('../database/database');

const User = database.define('user', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    default: Sequelize.fn('uuid_generate_v4')
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;