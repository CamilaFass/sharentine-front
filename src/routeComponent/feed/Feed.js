import React from "react";
import "./Feed.css";
import Card from "../../components/card/Card";
import OtherPost from "../../components/otherpost/OtherPost";

const Feed = () => {
  return (
    <div>
      <OtherPost />
      <Card />
    </div>
  );
};

export default Feed;
