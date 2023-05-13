import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../feature/post.slice";

const NewPost = () => {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    const data = {
      message,
      author: userId,
    };
    axios.post("http://localhost:5001/post/", data).then(() => {
      dispatch(createPost(data));
      //getPosts car il faut aller chercher l'id créer par mongoDB
      dispatch(getPosts());
    });

    setMessage("");
  };

  return (
    <form
      action=""
      className="new-post-container"
      onSubmit={(e) => handleForm(e)}
      value={message}
    >
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Quoi de neuf"
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default NewPost;
