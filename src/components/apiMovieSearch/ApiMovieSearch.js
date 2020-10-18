import React, { useState } from "react";
import LoggedMenu from "../loggedMenu/LoggedMenu";
import Footer from "../footer/Footer";
import "./ApiMovieSearch.css";
import api from "../../apis/";
import MovieImg from "./MovieImg.svg";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
  //states- input query, movies
  const [query, setQuery] = useState("");
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault(); // e = event

    const API_KEY = process.env.TMDB_API_KEY;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form>
        <div className="d-flex w-auto p-3 h-auto d-inline-block">
          <div className="d-flex row justify-content-center ">
            <div className="d-flex justify-content-center m-5 ">
              <div class="cntr">
                <div class="cntr-innr">
                  <p style={{ fontFamily: "Gafata", fontSize: "20px" }}>
                    What movie are you looking for?
                  </p>
                  <label class="search" for="inpt_search">
                    <input
                      id="inpt_search"
                      type="text"
                      placeholder="i.e. Jurassic Park"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
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
                src={MovieImg}
                alt="initial site image"
              />
            </div>
          </div>
          <div className="d-flex">{/* <Footer /> */}</div>
        </div>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
