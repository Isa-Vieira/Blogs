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

const putPostId = async (id) => {
    const put = await BlogPost.findAll({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
              ],
        });

        if (!put) {
        return { type: 401, message: { message: 'Unauthorized user' } };
        }
        if (!put) {
        return { type: 400, message: { message: 'Some required fields are missing' } };
        }
        return { type: 200, message: put };
};

  module.exports = {
    getPost,
    postGetId,
    putPostId,
  };