import React from "react";
import "./Feed.css";
import Post from "../../components/postCard/PostCard";
import NewPost from "../../components/newPost/NewPost";

const Feed = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <NewPost />
      <Post />
    </div>
  );
};

export default Feed;
