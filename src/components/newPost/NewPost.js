/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../apis/";
import "./NewPost.css";

const NewPost = (props) => {
  const history = useHistory();

  const [state, setState] = useState({
    title: "",
    content: "",
    attachment: "",
    image: "",
    loading: false,
    error: "",
  });

  const handleChange = (event) => {
    if (event.currentTarget.files) {
      return setState({ ...state, [event.currentTarget.name]: event.currentTarget.files[0] });
    }
    return setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleFileUpload = async (file) => {
    try {
      // Criando um arquivo programaticamente
      const uploadData = new FormData();

      uploadData.append("attachment", file);

      const response = await api.post("/upload", uploadData);

      console.log("URL Image ->", response.data.image);

      return response.data.image;
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    setState({ ...state, loading: true });
    try {
      // Impedir comportamento padrāo do formulário
      event.preventDefault();

      console.log("Estado ->", state);

      const fileUrl = await handleFileUpload(state.attachment);
      console.log("URL recebida ->", fileUrl);
      setState({ ...state, image: fileUrl });
    } catch (err) {
      console.error(err);
      setState({ ...state, loading: false, error: err.message });
    }
  };

  useEffect(
    function () {
      (async function () {
        try {
          const response = await api.post(`/post/${props.user._id}`, state);
          console.log(response);

          // Cancela o estado de loading
          setState({ title: "", content: "", loading: false, error: "", attachment: "" });

          // Navega programaticamente para a lista de projetos
          history.push("/");
        } catch (err) {
          console.error(err);
          setState({ ...state, loading: false, error: err.message });
        }
      })();
    },
    [state.image]
  );

  return (
    <div className="gedf-main">
      {/* <!--- \\\\\\\Post--> */}
      <div className="card gedf-card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="posts-tab"
                data-toggle="tab"
                href="#posts"
                role="tab"
                aria-controls="posts"
                aria-selected="true"
                style={{ fontFamily: "Roboto" }}
              >
                Share Something
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="images-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="images"
                aria-selected="false"
                href="#images"
                style={{ fontFamily: "Roboto" }}
              >
                Images
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                <div className="form-group">
                  <label className="sr-only" htmlFor="title">
                    post title
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                    placeholder="Post Title"
                    style={{ fontFamily: "Gafata" }}
                    onChange={handleChange}
                    value={state.title}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="message">
                    post
                  </label>
                  <textarea
                    name="content"
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="What are you thinking?"
                    style={{ fontFamily: "Gafata" }}
                    onChange={handleChange}
                    value={state.content}
                  ></textarea>
                </div>
              </div>
              <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      style={{ fontFamily: "Roboto" }}
                      name="attachment"
                      onChange={handleChange}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Upload image
                    </label>
                  </div>
                </div>
                <div className="py-4"></div>
              </div>
            </div>
            <div className="btn-toolbar justify-content-between">
              <div className="btn-group">
                <button type="submit" className="btn sharebutton" style={{ fontFamily: "Roboto" }}>
                  share
                </button>
              </div>
              {/* A parte comentada abaixo era botão de privacidade da postagem */}
              {/* <div className="btn-group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    className="btn btn-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-globe"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="btnGroupDrop1"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-globe"></i> Public
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-users"></i> Friends
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-user"></i> Just me
                    </a>
                  </div>
                </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
