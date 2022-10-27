const express = require('express');
const userController = require('../controllers/user.controller');
const { validaDisplayName, validaEmail, validaPassword } = require('../middleware/user.middleware');
const validateToken = require('../middleware/validateToken.middleware');

const router = express.Router();

router.post('/', validaDisplayName, validaEmail, validaPassword, userController.createUser);

router.get('/', validateToken, userController.userGetAll);

router.get('/:id', validateToken, userController.userId);

module.exports = router;