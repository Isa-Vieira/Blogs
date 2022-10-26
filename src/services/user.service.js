const { User } = require('../models');
const jwt = require('../utils/jwt.utils');

const createUserService = async (dadosDoObj) => {
    const { email } = dadosDoObj;
    const user = await User.findOne({ where: { email } });
    if (user) {
     return { type: 409, message: { message: 'User already registered' } }; 
    }
     await User.create(dadosDoObj); 

    const token = jwt.createToken(dadosDoObj);
    return { type: 201, message: { token } };
};

module.exports = {
    createUserService,
    
};
