import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const NewPost = () => {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);

  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/post/", {
      message,
      author: userId,
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
