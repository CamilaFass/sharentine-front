import React from 'react';
import { Link } from 'react-router-dom';
import logoutIcon from './logout-icon.png';
import userIcon from './user-icon.png';
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
          <li className="nav-item">
            <Link className="nav-link" to="/book-search">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movie-search">
              Movies/Series
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/music-search">
              Music
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <img
                src={userIcon}
                alt="logout icon"
                width="20px"
                height="20px"
              />
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              <img
                src={logoutIcon}
                alt="logout icon"
                width="20px"
                height="20px"
              />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LoggedMenu;
