const express = require('express');

const exerciseRouter = express.Router();

exerciseRouter.post('/videos');

exerciseRouter.get('/videos');

exerciseRouter.put('/videos/:id');

exerciseRouter.get('/videos/:id');

exerciseRouter.delete('/videos/:id');

module.exports = exerciseRouter;