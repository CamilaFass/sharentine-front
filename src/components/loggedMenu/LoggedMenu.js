import React from 'react';
import { Link } from 'react-router-dom';

import './LoggedMenu.css';

const LoggedMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light menu">
      <Link className="navbar-brand menu-brand mr-5" to="/feed">
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Books
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Movies/Series
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Music
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LoggedMenu;
