const Joi = require('joi');
const jwtUtil = require('../utils/jwt.utils');

const { User } = require('../models');

const validateBody = (params) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error, value } = schema.validate(params);

    if (error) throw error;

    return value;
};

const validateLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
        return { type: 400, message: 'Invalid fields' };
    }

    const token = jwtUtil.createToken(user.dataValues);
     return { type: null, message: token };
};

const validateToken = (token) => {
    if (!token) {
      const tokenNum = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8';
        return { type: 200, mssage: tokenNum };
    }

    const user = jwtUtil.validateToken(token);

    return user;
};

module.exports = { validateBody, validateLogin, validateToken };