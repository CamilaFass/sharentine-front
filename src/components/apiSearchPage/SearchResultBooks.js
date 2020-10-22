import React from 'react';
import LoggedMenu from '../loggedMenu/LoggedMenu';
import api from '../../apis/';
import './SearchResultBooks.css';

function SearchResultBooks(props) {
  const book = props.book;

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
