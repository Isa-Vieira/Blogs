const express = require('express');

const validateToken = require('../middleware/validateToken.middleware');

const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/', validateToken, postController.createPostController);

module.exports = router;