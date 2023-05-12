import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/post.slice";

const Thread = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postData);
  useEffect(() => {
    axios.get("http://localhost:5001/post/").then((res) => {
      dispatch(getPosts(res.data));
    });
  }, []);

  return (
    <div className="thread-container">
      <h1>test</h1>
      {posts?.length > 0 ? (
        posts
          .slice()
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
          .map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p>Aucun post trouvé</p>
      )}
    </div>
  );
};

export default Thread;
