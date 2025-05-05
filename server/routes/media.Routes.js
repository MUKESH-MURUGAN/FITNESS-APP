const express = require('express');

const mediaRouter = express.Router();

mediaRouter.get('/media');

mediaRouter.get('/media/:id');

mediaRouter.post('/media/upload');

module.exports = mediaRouter;