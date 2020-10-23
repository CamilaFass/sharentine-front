import React, { useState } from 'react';
import LoggedMenu from '../loggedMenu/LoggedMenu';
import Footer from '../footer/Footer';
import './ApiBookSearch.css';
import api from '../../apis/';
import BookImg from './undraw_book_lover_mkck.svg';
import books from 'google-books-search';
import SearchResultBooks from './SearchResultBooks';

function ApiBookSearch(props) {
  const [state, setState] = useState({ searchInput: '', books: [] });

  function handleChange(event) {
    return setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    books.search(state.searchInput, (error, result) => {
      if (!error) {
        setState({ ...state, books: [...result] });
      } else {
        console.log(error);
      }
    });
  };

  return (
    <div className="d-flex justify-content-center align-center flex-column ">
      <div className="d-flex justify-content-center  m-5 ">
        <form onSubmit={handleSubmit}>
          <p id="headerText">What book are you looking for?</p>
          <label
            className="search d-flex justify-content-center "
            htmlFor="inpt_search"
          >
            <input
              id="inpt_search"
              placeholder="i.e. Harry Potter"
              type="text"
              className="mr-2 "
              name="searchInput"
              value={state.searchInput}
              onChange={handleChange}
            />
            <button
              id="button-sb"
              className="btn btn-primary d-flex "
              type="submit"
            >
              Search
            </button>
          </label>
        </form>
      </div>
      <div className="d-flex flex-wrap justify-content-around">
        {state.books.length === 0 ? (
          <div className="d-flex justify-content-center">
            <img
              className="img-form-signup w-75 h-75 mt-4"
              src={BookImg}
              alt="initial site image"
            />
          </div>
        ) : (
          state.books.map((el) => {
            return (
              <div className="card-return-api d-flex align-content-between col-xl-3 col-sm-6 mb-5 ">
                <SearchResultBooks book={el} key={el.id} user={props.user} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ApiBookSearch;
