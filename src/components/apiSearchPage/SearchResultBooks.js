import React, { useState } from 'react';
import LoggedMenu from '../loggedMenu/LoggedMenu';
import api from '../../apis/';
import ReactDOM from 'react-dom';
import './SearchResultBooks.css';
import MoreIcon from '@material-ui/icons/More';
import Button from '@material-ui/core/Button';

function SearchResultBooks(props) {
  const book = props.book;
  const [state, setState] = useState({ descriptionToggle: false });

  function handleDescriptionToggle() {
    setState({ descriptionToggle: !state.descriptionToggle });
  }

  return (
    <div className="d-flex card-books">
      <div className="card-inner">
        <div className="d-flex justify-content-center mt-3">
          <img src={book.thumbnail} className="card-img-top " alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <div className="card-description d-flex">
            <div class="dropdown">
              <Button endIcon={<MoreIcon />} variant="contained">
                Description
              </Button>
              <div class="dropdown-content">
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="button-sb ml-4  mb-3" type="submit">
            Share!
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchResultBooks;
