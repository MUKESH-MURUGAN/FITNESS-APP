const express = require('express');

const app = express();

const connectDb = require('../config/configDb.js');

connectDb();


app.use(express.json());

module.exports = app;