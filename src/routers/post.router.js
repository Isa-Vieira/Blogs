const express = require('express');

const validateToken = require('../middleware/validateToken.middleware');

const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/', validateToken, postController.createPostController);

router.get('/:id', validateToken, postController.postControllerId);

router.put('/:id', validateToken, postController.createPutController);

module.exports = router;