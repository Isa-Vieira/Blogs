const Joi = require('joi');
const jwtUtil = require('../utils/jwt.utils');

const { User } = require('../models');

const validateBody = (params) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
        'any.required': 'Some required fields are missing',
        'string.empty': 'Some required fields are missing',
        }),
        password: Joi.string().required().messages({
        'any.required': 'Some required fields are missing',
        'string.empty': 'Some required fields are missing',
        }),

    });

    const { error } = schema.validate(params);

    if (error) return { type: 400, message: error.message };
    return { type: null, message: '' };
};

const validateLogin = async ({ email, password }) => {
    const errorMessage = validateBody({ email, password });
    if (errorMessage.type) return errorMessage;
    console.log(errorMessage.type);
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
        return { type: 400, message: 'Invalid fields' };
    } 

    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = jwtUtil.createToken(userWithoutPassword);
    return { type: null, message: token };
};

const validateToken = (token) => {
    if (!token) {
        return { type: 401, message: 'Token not found' };
    }

    const user = jwtUtil.validateToken(token);

    return user;
};

module.exports = { validateBody, validateLogin, validateToken };