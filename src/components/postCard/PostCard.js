import React from "react";
import "./PostCard.css";
import api from "../../apis/";
import { useHistory } from "react-router-dom";

const PostCard = (props) => {
  const history = useHistory();

  async function handleDelete() {
    try {
      const response = await api.delete(
        `/post/${props.activeUserId}/${props.postId}`
      );
      console.log(response);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="gedf-main">
      {/* <!--- \\\\\\\Post--> */}
      <div className="card gedf-card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src={props.userImage}
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">{props.name}</div>
              </div>
            </div>
          </div>
          {props.postUserId === props.activeUserId ? (
            <button
              className="btn btn-link"
              type="button"
              style={{ color: "#3e4f46" }}
              onClick={handleDelete}
            >
              <i className="fas fa-times-circle"></i>
            </button>
          ) : null}
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2">
            {" "}
            <img width="300" src={props.image} alt="" />
          </div>

          <h5 className="card-title">{props.title}</h5>

          <p className="card-text" style={{ fontFamily: "Roboto" }}>
            {props.content}
          </p>
        </div>
        <div className="card-footer">
          <a
            href="#"
            className="card-link"
            style={{ fontFamily: "Roboto", color: "gray" }}
          >
            <i className="fa fa-comment"></i> Comments
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
