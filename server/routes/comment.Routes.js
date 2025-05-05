const express = require('express');
const commentRouter = express.Router();

commentRouter.post('/', commentController.createComment);

commentRouter.get('/:contentType/:contentId', commentController.getCommentsByContent);

commentRouter.delete('/:id', commentController.deleteComment);

commentRouter.get('/replies/:parentCommentId', commentController.getRepliesByParent);

module.exports = commentRouter;
