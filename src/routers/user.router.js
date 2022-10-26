const express = require('express');
const userController = require('../controllers/user.controller');
const { validaDisplayName, validaEmail, validaPassword } = require('../middleware/user.middleware');

const router = express.Router();

router.post('/', validaDisplayName, validaEmail, validaPassword, userController.createUser);

module.exports = router;