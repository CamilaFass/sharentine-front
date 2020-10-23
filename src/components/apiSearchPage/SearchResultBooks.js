import React, { useState } from "react";
import LoggedMenu from "../loggedMenu/LoggedMenu";
import api from "../../apis/";
import ReactDOM from "react-dom";
import "./SearchResultBooks.css";
import MoreIcon from "@material-ui/icons/More";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function SearchResultBooks(props) {
  const history = useHistory();
  const book = props.book;
  const user = props.user;

  const [state, setState] = useState({ content: "", loading: false });

  const handleChange = (event) => {
    return setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = async (event) => {
    setState({ ...state, loading: true });
    event.preventDefault();

    const post = { title: book.title, content: state.content, image: book.thumbnail };

    try {
      const response = await api.post(`/post/${user._id}`, post);
      console.log(response);

      // Cancela o estado de loading
      setState({
        content: "",
        loading: false,
      });

      // Navega programaticamente para a lista de projetos
      history.push("/");
    } catch (err) {
      console.error(err);
      setState({ ...state, loading: false, error: err.message });
    }
  };

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
        <div className=" m-5">
          <form onSubmit={handleSubmit}>
            <textarea
              name="content"
              className="form-control"
              id="message"
              rows="3"
              placeholder="Share your opinion about this book"
              style={{ fontFamily: "Gafata" }}
              onChange={handleChange}
              value={state.content}
            ></textarea>
            <button className="button-sb m-4" type="submit">
              Share!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchResultBooks;
