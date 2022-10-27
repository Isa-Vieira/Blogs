const categoriesService = require('../services/categories.service');

const createCategoriesController = async (req, res) => {
    const dados = req.body;
  
    const recebeNewCategories = await categoriesService.createCategoriesService(dados);
    return res.status(recebeNewCategories.type).json(recebeNewCategories.message);
  };

  module.exports = {
    createCategoriesController,
  };