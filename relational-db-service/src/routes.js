const express = require('express');
const routes = express.Router();

const DbController = require('./controllers/DbController');

routes.post('/signup', DbController.signup);
routes.post('/login', DbController.login);

module.exports = routes;