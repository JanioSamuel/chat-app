const axios = require('axios');
require('dotenv-safe').config();

const api = axios.create({
  baseURL: process.env.STOCK_API
});

module.exports = api;