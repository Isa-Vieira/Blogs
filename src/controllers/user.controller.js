const userService = require('../services/user.service');

const createUser = async (req, res) => {
    const dadosDoObj = req.body;
  
    const recebeNewUser = await userService.createUserService(dadosDoObj);
    return res.status(recebeNewUser.type).json(recebeNewUser.message);
  };

const userGetAll = async (_req, res) => {
const userGet = await userService.serviceGetAll();
return res.status(userGet.type).json(userGet.message);
};

const userId = async (req, res) => {
    const { id } = req.params;
    const userGet = await userService.serviceGetId(id);
    return res.status(userGet.type).json(userGet.message);
};

  module.exports = {
    createUser,
    userGetAll,
    userId,
};