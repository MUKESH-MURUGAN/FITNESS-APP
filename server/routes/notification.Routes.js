
const express = require('express');

const NotificationRouter = express.Router();

NotificationRouter.get('/notifications');

NotificationRouter.put('/notifications/:id/read');

NotificationRouter.get('/notifications/:id');

module.exports = NotificationRouter;