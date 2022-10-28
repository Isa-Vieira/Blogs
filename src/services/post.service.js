const { Category } = require('../models');
const { User } = require('../models');
const { BlogPost } = require('../models');

const getPost = async () => {
    const result = await BlogPost.findAll({
        include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
          ],
    });
    return { type: 200, message: result };
};  

/* const getPost = async () => BlogPost.findAll({
    include: [
      { model: User, as: 'users', attributes: { exclude: ['password'] } },
      { model: PostCategory,
as: 'categories', 
      attributes: ['id', 'name'],
through: { attributes: [] } },
    ],
  }); */

  module.exports = {
    getPost,
  };