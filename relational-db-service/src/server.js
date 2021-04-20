const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const database = require('./model/User');

async function load() { await database.sync(); }

load();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3003);