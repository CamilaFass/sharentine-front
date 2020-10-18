/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Feed.css";
import PostCard from "../../components/postCard/PostCard";
import NewPost from "../../components/newPost/NewPost";
import api from "../../apis/";

const Feed = (props) => {
  const [state, setState] = useState({
    posts: [],
    loading: false,
    error: "",
  });

  useEffect(function () {
    setState({ ...state, loading: true });

    (async function () {
      try {
        const response = await api.get("/post");
        response.data.sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        console.log("Response from /post =>", response)
        setState({ ...state, loading: false, posts: [...response.data] });
      } catch (err) {
        console.error(err);
        setState({ ...state, loading: false, error: err.message });
      }
    })();
  }, []);
  return (
    <div className="d-flex flex-column align-items-center">
      <NewPost {...props} />

      {state.posts.map((item) => {
        return (
          <PostCard
            userImage={item.userId.image}
            name={item.userId.name}
            image={item.image}
            title={item.title}
            content={item.content}
            key={item._id}
            postUserId={item.userId._id}
            activeUserId={props.user._id}
            postId={item._id}
            comments={item.comments}
          />
        );
      })}
    </div>
  );
};

export default Feed;
