import React, { useState } from "react";
import LoggedMenu from "../loggedMenu/LoggedMenu";
import Footer from "../footer/Footer";
import "./ApiBookSearch.css";
import api from "../../apis/";
import BookImg from "./undraw_book_lover_mkck.svg";
import books from "google-books-search";
import SearchResultBooks from './SearchResultBooks'

function ApiBookSearch() {
  const [state, setState] = useState({ searchInput: "", books: [] });

  function handleChange(event) {
    return setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
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
    <div className="d-flex w-auto justify-content-center p-3 h-auto d-inline-block">
      <div className="d-flex row justify-content-center ">
        <div className="d-flex justify-content-center m-5 ">
          <div className="cntr">
            <div className="cntr-innr">
              <form onSubmit={handleSubmit}>
                <p fontSize="25px">What song or album are you looking for?</p>
                <label className="search d-flex justify-content-center" htmlFor="inpt_search">
                  <input
                    id="inpt_search"
                    placeholder="i.e. Harry Potter"
                    type="text"
                    className="mr-2 "
                    name="searchInput"
                    value={state.searchInput}
                    onChange={handleChange}
                  />
                  <button className="buttonsearch d-flex " type="submit">
                    Search
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
        {state.books.length === 0 ? <div className="d-flex justify-content-center m-5 w-75">
          <img className="img-form-signup w-50" src={BookImg} alt="initial site image" />
        </div> : state.books.map((el) => {
          return <SearchResultBooks book={el} key={el.id}/>
        })}
        
      </div>
      <div className="d-flex">{/* <Footer /> */}</div>
    </div>
  );
}

export default ApiBookSearch;


