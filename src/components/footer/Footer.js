import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="centro">
      <span>
        <a
          href="https://github.com/CamilaFass/sharentine-front"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>{" "}
        </a>
      </span>
    </div>
  );
};

export default Footer;
