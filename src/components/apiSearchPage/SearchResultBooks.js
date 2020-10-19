import React from "react";
import LoggedMenu from "../loggedMenu/LoggedMenu";
import api from "../../apis/";
import "./SearchResultBooks.css";

function SearchResultBooks(props) {

  const book = props.book

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={book.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchResultBooks;
