
const express = require('express');

const dietplanRouter = express.Router();

dietplanRouter.post('/diets');

dietplanRouter.get('/diets');

dietplanRouter.put('/diets/:id');

dietplanRouter.get('/diets/:id');

dietplanRouter.delete('/diets/:id');

module.exports = dietplanRouter;