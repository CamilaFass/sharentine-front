import React from 'react';
import axios from 'axios';
import './SignUp.css';

function Login() {
  return (
    <div className="SignUp">
      <div
        className="div-signup d-flex justify-content-center align-content-center flex-wrap w-100"
        id="form"
      >
        <section className="section-form-signup-rectangle justify-content-center d-flex align-content-center flex-wrap">
          <h1 className="sign-up-h1">
            <span className="span-azul">Welcome back to Sharentine!</span>
          </h1>
          <form className="d-flex flex-column text-center">
            <label htmlFor="signupEmailInput">Email</label>
            <input
              type="email"
              id="signupEmailInput"
              className="email"
              placeholder="Your e-mail here"
            />

            <label for="signUpPasswordInput">Password</label>
            <input
              type="password"
              className="password"
              id="signUpPasswordInput"
              placeholder="********"
            />

            <button className="btn-sign-in-out" type="submit">
              Log In
            </button>
          </form>
          <a href="#">Create New Account</a>
        </section>

        <img
          className="img-form-signup w-50"
          src="./images/authImg.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
