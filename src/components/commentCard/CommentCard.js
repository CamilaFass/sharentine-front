import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../apis/";
import "./CommentCard.css";

function CommentCard(props) {
  const history = useHistory();

  const { comments } = props;

  const [state, setState] = useState({ content: "" });

  function handleChange(event) {
    console.log("COMMENT PROPS=>", comments);
    return setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleDelete(commentId) {
    try {
      const response = await api.delete(`/comment/${props.postId}/${commentId}`);
      console.log('Delete response =>',response);
      history.push("/");
    } catch (err) {
      console.error('Delete error =>',err.message);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post(`/comment/${props.activeUserId}/${props.postId}`, state);

      setState({ content: "" });

      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div>
        <section className="mt-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group input-group">
              <input type="text" className="form-control" placeholder="Write Comment" name="content" value={state.content} onChange={handleChange} />
              <div className="input-group-append">
                <button
                  className="text-decoration-none text-white btn btn-primary"
                  type="submit"
                  style={{ backgroundColor: "#ADDBC1", border: "none" }}
                >
                  Comment
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      {comments.map((el) => {
        return (
          <section key={el._id}>
            <div className="card p-2 mt-3">
              <div className="d-flex align-items-center">
                <div className="">
                  <img className="profile-pic" src={el.user.image} width="40" height="40" alt="..." />
                </div>
                <div className="pl-2">{el.user.name}</div>
                {el.user._id === props.activeUserId ? (
                  <button className="btn btn-link ml-auto" type="button" style={{ color: "#3e4f46" }} onClick={() => handleDelete(el._id)}>
                    <i className="fas fa-times-circle"></i>
                  </button>
                ) : null}
              </div>
              <div className="card-body pl-3">{el.content}</div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default CommentCard;
