import React, { useState } from 'react';
import LoggedMenu from '../loggedMenu/LoggedMenu';
import api from '../../apis/';
import './SearchResultBooks.css';

function SearchResultBooks(props) {
  const book = props.book;
  const [state, setState] = useState({ descriptionToggle: false });

  function handleDescriptionToggle() {
    setState({ descriptionToggle: !state.descriptionToggle });
  }

  return (
    <div className="card   " style={{ height: '70vh' }}>
      <div className="card-inner" style={{ width: '20vw' }}>
        <div className="d-flex justify-content-center mt-3">
          <img
            src={book.thumbnail}
            className="card-img-top "
            style={{ width: '10vw', height: '30vh' }}
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <div className="d-flex card-footer">
            <button
              type="button"
              className="card-link"
              style={{ fontFamily: 'Roboto', color: 'gray' }}
              onClick={handleDescriptionToggle}
            >
              <i className="fa fa-chevron-down " aria-hidden="true"></i>
              Description
            </button>
          </div>
          {state.descriptionToggle ? (
            <div className="card-footer">
              <p className="card-text">{book.description}</p>
            </div>
          ) : null}
        </div>
        <a href="#" className="btn btn-primary">
          Share
        </a>
      </div>
    </div>
  );
}

export default SearchResultBooks;
