import React from 'react';
import LoggedMenu from '../loggedMenu/LoggedMenu';
import Footer from '../footer/Footer';
import './ApiMusicSearch.css';
import api from '../../apis/';
import MusicImg from './MusicImg.svg';

function ApiMusicSearch() {
  return (
    <div className="d-flex w-auto justify-content-center p-3 h-auto d-inline-block">
      <div className="d-flex row justify-content-center ">
        <div className="d-flex justify-content-center m-5 ">
          <div class="cntr">
            <div class="cntr-innr">
              <p font-size="25px">What song or album are you looking for?</p>
              <label
                className="search d-flex justify-content-center"
                for="inpt_search"
              >
                <input
                  id="inpt_search"
                  placeholder="i.e. Queen"
                  type="text"
                  className="mr-2 "
                />
                <buton className="buttonsearch d-flex " type="submit">
                  Search
                </buton>
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center m-5 w-75">
          <img
            className="img-form-signup w-50"
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
