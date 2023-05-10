const PostModel = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Merci d'ajouter un message" });
  }

  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};

module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(404).json({ message: "Le post n'existe pas" });
  }
  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });
  res.status(200).json(updatePost);
};

module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(404).json({ message: "Le post n'existe pas" });
  }

  await PostModel.deleteOne();
  res.status(200).json("Post supprimé : " + req.params.id);
};

module.exports.LikePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.paramis.id,
      { $addToSet: { likers: req.body.id } },

      { new: true }
    );
  } catch (err) {
    res.status(400).json(err);
  }
};
