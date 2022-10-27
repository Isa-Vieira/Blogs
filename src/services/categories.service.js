const { Category } = require('../models');

const createCategoriesService = async (dado) => {
    const { name } = dado;

    if (!name) {
     return { type: 400, message: { message: '"name" is required' } };
    }
    const categories = await Category.create(dado);

    return { type: 201, message: categories };
};

const createGetCategories = async () => {
  const id = await Category.findAll();
  
 return { type: 200, message: id };
};

module.exports = {
    createCategoriesService,
    createGetCategories,
};