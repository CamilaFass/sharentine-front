import React from "react";
import "./NewPost.css";

const OtherPost = () => {
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
          <form>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                <div className="form-group">
                  <label className="sr-only" for="title">
                    post title
                  </label>
                  <input type='text'
                    className="form-control"
                    id="title"
                    placeholder="Post Title"
                    style={{ fontFamily: "Gafata" }}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="sr-only" for="message">
                    post
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="What are you thinking?"
                    style={{ fontFamily: "Gafata" }}
                  ></textarea>
                </div>
              </div>
              <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                <div className="form-group">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" style={{ fontFamily: "Roboto" }} />
                    <label className="custom-file-label" for="customFile">
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

export default OtherPost;
