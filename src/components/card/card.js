import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div>
      <div className="container posts-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-body">
                <div className="media mb-3">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    className="d-block ui-w-40 rounded-circle"
                    alt=""
                  />
                  <div className="media-body ml-3">
                    Kenneth Frazier
                    <div className="text-muted small">3 days ago</div>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus finibus commodo bibendum. Vivamus laoreet blandit
                  odio, vel finibus quam dictum ut.
                </p>
                <a
                  href="javascript:void(0)"
                  className="ui-rect ui-bg-cover"
                  style="background-image: url('https://bootdey.com/img/Content/avatar/avatar3.png');"
                ></a>
              </div>
              <div className="card-footer">
                <a
                  href="javascript:void(0)"
                  className="d-inline-block text-muted"
                >
                  <strong>123</strong> Likes
                  {/* </small> */}
                </a>
                <a
                  href="javascript:void(0)"
                  className="d-inline-block text-muted ml-3"
                >
                  <strong>12</strong> Comments
                  {/* </small> */}
                </a>
                <a
                  href="javascript:void(0)"
                  className="d-inline-block text-muted ml-3"
                >
                  <small className="align-middle">Repost</small>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-body">
                <div className="media mb-3">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    className="d-block ui-w-40 rounded-circle"
                    alt=""
                  />
                  <div className="media-body ml-3">
                    Kenneth Frazier
                    <div className="text-muted small">3 days ago</div>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus finibus commodo bibendum. Vivamus laoreet blandit
                  odio, vel finibus quam dictum ut.
                </p>
                <a
                  href="javascript:void(0)"
                  className="ui-rect ui-bg-cover"
                  style="background-image: url('https://bootdey.com/img/Content/avatar/avatar1.png');"
                ></a>
              </div>
              <div className="card-footer">
                <a
                  href="javascript:void(0)"
                  className="d-inline-block text-muted"
                >
                  <small className="align-middle">
                    <strong>123</strong> Likes
                  </small>
                </a>
                <a
                  href="javascript:void(0)"
                  className="d-inline-block text-muted ml-3"
                >
                  <small className="align-middle">
                    <strong>12</strong> Comments
                  </small>
                </a>
                <a
                  href="javascript:void(0)"
                  className="d-inline-block text-muted ml-3"
                >
                  <i className="ion ion-md-share align-middle"></i>&nbsp;
                  <small className="align-middle">Repost</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
