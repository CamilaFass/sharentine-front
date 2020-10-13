import React from 'react';

import './Menu.css';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light menu">
      <a className="navbar-brand col-2 menu-brand" href="#">
        <img src="./images/logo.png" alt="logo" />
        Sharentine
      </a>
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
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              How it works
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
