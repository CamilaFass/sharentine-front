import React from "react";
import InitialImg from "./initialimg.svg";
import "./TopPage.css";

const TopPage = () => {
  return (
    <div>
      <div>
        <div>
          <h1>
            <center>Sharentine</center>
          </h1>
          <div className="container-fluid">
            <div className="row d-flex flex-wrap">
              <div className="col-md-6">
                <img
                  src={InitialImg}
                  height="300px"
                  width="100%"
                  max-width="100%"
                  alt="how it works image"
                  className="initialimg"
                />
              </div>
              {/* LOGIN FORM */}
              <div className="col-md-6">
                <form>
                  <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </form>
                <p>Login form here</p>
              </div>
              {/* END OF LOGIN FORM */}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TopPage;
