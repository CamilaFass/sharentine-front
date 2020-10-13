import React from "react";

import "./LoggedMenu.css";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light menu">
      <a className="navbar-brand menu-brand mr-5" href="#">
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
            <a className="nav-link" href="#">
              Perfil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
