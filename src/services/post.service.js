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

const postGetId = async (id) => {
    const post = await BlogPost.findOne({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
              ],
        });

        if (!post) {
        return { type: 404, message: { message: 'Post does not exist' } };
        }
        return { type: 200, message: post };
};

  module.exports = {
    getPost,
    postGetId,
  };