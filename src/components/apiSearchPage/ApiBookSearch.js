import React from "react";
import LoggedMenu from "../loggedMenu/LoggedMenu";
import Footer from "../footer/Footer";
import "./ApiBookSearch.css";
import api from "../../apis/";
import BookImg from "./undraw_book_lover_mkck.svg";

// animation search
// $('#inpt_search').on('focus', function () {
//   $(this).parent('label').addClass('active');
// });

// $('#inpt_search').on('blur', function () {
//   if ($(this).val().length == 0) $(this).parent('label').removeClass('active');
// });

function ApiBookSearch() {
  return (
    <div className="d-flex w-auto p-3 h-auto d-inline-block">
      <div className="d-flex row justify-content-center ">
        <div className="d-flex justify-content-center m-5 ">
          <div class="cntr">
            <div class="cntr-innr">
              <p style={{ fontFamily: "Gafata", fontSize: "20px" }}>
                What book are you looking for?
              </p>
              <label class="search" for="inpt_search">
                <input id="inpt_search" type="text" />
                <buton
                  className="buttonsearch"
                  type="submit"
                  style={{ fontFamily: "Roboto" }}
                >
                  Search
                </buton>
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center m-5 w-75">
          <img
            className="img-form-signup w-50"
            src={BookImg}
            alt="initial site image"
          />
        </div>
      </div>
      <div className="d-flex">{/* <Footer /> */}</div>
    </div>
  );
}

export default ApiBookSearch;
