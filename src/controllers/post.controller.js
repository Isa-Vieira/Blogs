const postService = require('../services/post.service');

const createPostController = async (_req, res) => {
    const recebeNewPost = await postService.getPost();
    return res.status(recebeNewPost.type).json(recebeNewPost.message);
  };

  const postControllerId = async (req, res) => {
    const { id } = req.params;
    const postGet = await postService.postGetId(id);
    return res.status(postGet.type).json(postGet.message);
};
  module.exports = {
  createPostController,
  postControllerId,
  };