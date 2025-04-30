const express = require('express');

const app = express();

const connectDb = require('../config/configDb.js');
const exerciseRouter = require('../routes/exercise.Routes.js');
const mediaRouter = require('../routes/media.Routes.js');

connectDb();

app.use('/exercise', exerciseRouter);
app.use('/media',mediaRouter);

app.use(express.json());

module.exports = app;