const postService = require('../services/post.service');

const createPostController = async (_req, res) => {
    const recebeNewPost = await postService.getPost();
    return res.status(recebeNewPost.type).json(recebeNewPost.message);
  };

  module.exports = {
  createPostController,
  };