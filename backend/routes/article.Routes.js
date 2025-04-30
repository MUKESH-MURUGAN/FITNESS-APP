const express = require('express');
const articleRouter = express.Router();

articleRouter.post('/', articleController.createArticle);

articleRouter.get('/', articleController.getAllArticles);

articleRouter.get('/:id', articleController.getArticleById);

articleRouter.put('/:id', articleController.updateArticle);

articleRouter.delete('/:id', articleController.deleteArticle);

articleRouter.post('/:id/like', articleController.likeArticle);

articleRouter.post('/:id/rate', articleController.rateArticle);

module.exports = articleRouter;
