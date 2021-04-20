const Sequelize = require('sequelize');
require('dotenv-safe').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, { dialect: 'postgres', host: process.env.DB_URL, port: process.env.DB_PORT });

module.exports = sequelize;