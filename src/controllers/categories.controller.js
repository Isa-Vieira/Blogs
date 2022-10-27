const categoriesService = require('../services/categories.service');

const createCategoriesController = async (req, res) => {
    const dados = req.body;
  
    const recebeNewCategories = await categoriesService.createCategoriesService(dados);
    return res.status(recebeNewCategories.type).json(recebeNewCategories.message);
  };

  const categoriesGetAll = async (_req, res) => {
    const categoriesGet = await categoriesService.createGetCategories();
    return res.status(categoriesGet.type).json(categoriesGet.message);
    };

  module.exports = {
    createCategoriesController,
    categoriesGetAll,
  };