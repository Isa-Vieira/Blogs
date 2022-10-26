const userService = require('../services/user.service');

const createUser = async (req, res) => {
    const dadosDoObj = req.body;
  
    const recebeNewUser = await userService.createUserService(dadosDoObj);
    return res.status(recebeNewUser.type).json(recebeNewUser.message);
  };
  module.exports = {
    createUser };