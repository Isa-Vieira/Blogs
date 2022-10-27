const express = require('express');

const createCategories = require('../controllers/categories.controller');
const validateToken = require('../middleware/validateToken.middleware');

const router = express.Router();

router.post('/', validateToken, createCategories.createCategoriesController);

router.get('/', validateToken, createCategories.categoriesGetAll);

module.exports = router;