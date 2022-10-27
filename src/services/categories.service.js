const { Category } = require('../models');

const createCategoriesService = async (dado) => {
    const { name } = dado;
    console.log(name);

    if (!name) {
     return { type: 400, message: { message: '"name" is required' } };
    }
    const categories = await Category.create(dado);

    return { type: 201, message: categories };
};

module.exports = {
    createCategoriesService,
};