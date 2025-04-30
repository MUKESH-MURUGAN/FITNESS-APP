const express = require('express');

const app = express();

const connectDb = require('../config/configDb.js');
const exerciseRouter = require('../routes/exercise.Routes.js');
const mediaRouter = require('../routes/media.Routes.js');
const articleRouter = require('../routes/article.Routes.js');
const commentRouter = require('../routes/comment.Routes.js');

connectDb();

app.use('/exercise', exerciseRouter);
app.use('/media',mediaRouter);
app.use('/article',articleRouter);
app.use('/comment',commentRouter);

app.use(express.json());

module.exports = app;