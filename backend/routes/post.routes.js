const express = require("express");
const { setPosts, getPosts } = require("../controllers/post.controller");
const router = express.Router();

router.get("/", getPosts);

router.post("/", setPosts);

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "message supprimé id:" + req.params.id });
});

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "le post liké: id :" + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "le post disliké: id :" + req.params.id });
});

module.exports = router;
