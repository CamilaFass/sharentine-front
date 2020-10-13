import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light menu fixed-top">
      <Link className="navbar-brand col-2 menu-brand" to="/">
        <img src="./images/logo.png" alt="logo" />
        Sharentine
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse col-8"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link" to="/#HowItWorks">
              How it works
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link" to="/#AboutUs">
              About us
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
