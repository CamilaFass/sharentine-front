import React from 'react';
import LoggedMenu from '../loggedMenu/LoggedMenu';
import Footer from '../footer/Footer';
import './ApiMusicSearch.css';
import api from '../../apis/';
import MusicImg from './MusicImg.svg';

function ApiMusicSearch() {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex row justify-content-center ">
        <div className="d-flex align-items-center m-5 ">
          <div class="d-flex row justify-content-center cntr-innr">
            <form>
              {/* onSubmit={handleSubmit} */}
              <p id="text">What song or album are you looking for?</p>
              <label
                className="search d-flex justify-content-center"
                for="inpt_search"
              >
                <input
                  id="inpt_search"
                  placeholder="i.e. Queen"
                  type="text"
                  className="mr-2 "
                  name="searchInput"
                  // value={state.searchInput}
                  // onChange={handleChange}
                />
                <buton
                  id="button-sb"
                  className="btn btn-primary d-flex "
                  type="submit"
                >
                  Search
                </buton>
              </label>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-center m-5 w-75">
          <img
            className="img-form-signup w-75 h-75"
            src={MusicImg}
            alt="initial site image"
          />
        </div>
      </div>
      <div className="d-flex">{/* <Footer /> */}</div>
    </div>
  );
}

export default ApiMusicSearch;
