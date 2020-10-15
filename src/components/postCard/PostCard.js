import React from "react";
import "./PostCard.css";

const PostCard = (props) => {
  return (
    <div className="gedf-main">
      {/* <!--- \\\\\\\Post--> */}
      <div className="card gedf-card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img className="rounded-circle" width="45" src={props.userImage} alt="" />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">{props.name}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2">
            {" "}
            <img width="300" src={props.image} alt="" />
          </div>

          <h5 className="card-title">{props.title}</h5>

          <p className="card-text" style={{ fontFamily: "Gafata" }}>{props.content}</p>
        </div>
        <div className="card-footer">
          <a href="#" className="card-link">
            <i className="fa fa-comment"></i> Comments
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
