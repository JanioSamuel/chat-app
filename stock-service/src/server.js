const express = require('express');
const cors = require('cors');
const app = express();
require('./workers/Consumer');

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3004);