import React, { useState } from 'react';
// import Menu from '../components/menu/Menu';
// import Footer from '../components/footer/Footer';
import axios from 'axios';
import './SignUp.css';

function SignUp(props) {
  const { handleSubmit, handleChange, state } = props;

  return (
    <div className="SignUp">
      <div
        className="div-signup d-flex justify-content-center align-content-center flex-wrap w-100"
        id="form"
      >
        <section className="section-form-signup-rectangle justify-content-center d-flex align-content-center flex-wrap">
          <h1 className="sign-up-h1">
            <span className="span-azul">Join Us at Sharentine!</span>
          </h1>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column text-center"
          >
            <label method="POST" htmlFor="signupUsernameInput">
              Name
            </label>
            <input
              type="name"
              id="signupUsernameInput"
              className="username"
              placeholder="Your name here"
            />

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
              Create Account
            </button>
          </form>
          <a href="#">Already have an account? Log in here</a>
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

export default SignUp;
