import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/";
import InitialImg from "./initialimg.svg";

import "./SignUp.css";

import LoadingButton from "../../components/loadingButton/LoadingButton";

function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
    error: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    console.log(state);
  };

  // Dispara a requisiçāo HTTP para o backend com os dados do formulário
  const handleSubmit = async (event) => {
    setState({ loading: true });

    try {
      // Impedir comportamento padrāo do formulário
      event.preventDefault();

      // Disparar a requisiçāo manualmente através do React
      const response = await api.post("/login", state);
      console.log(response.data);

      // Atualiza o state do componente pai
      props.setUserState(response.data);

      // Guarda os dados do usuario no computador do usuario
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          user: { ...response.data.user },
          token: response.data.token,
        })
      );

      // Cancela o estado de loading
      setState({ loading: false });

      // Navega programaticamente para a lista de projetos
      props.history.push("/feed");
      // Força um reload na página para limpar a memória do roteador
      props.history.go();
    } catch (err) {
      console.error(err);
      setState({ loading: false, error: err.message });
    }
  };

  return (
    <div className="SignUp d-flex">
      <div className="col-7 d-flex justify-content-center">
        <img
<<<<<<< HEAD
          className="img-form-signup w-75 "
          src="./images/authImg.svg"
          alt=""
=======
          className="img-form-signup w-100 justify-content-center"
          src={InitialImg}
          alt="initial site image"
          style={{ paddingTop: 110 }}
>>>>>>> e043478600d6f833e6a9bcf777f80894018356f8
        />
      </div>
      <div
        className="div-signup d-flex justify-content-center align-content-center flex-wrap w-100"
        id="form"
      >
        <section className="section-form-signup-rectangle justify-content-center d-flex align-content-center flex-wrap">
          <h1 className="sign-up-h1">
            <span className="span-azul" style={{ fontFamily: "Roboto" }}>
              Welcome to Sharentine!
            </span>
          </h1>
          <form
            className="d-flex flex-column text-center"
            onSubmit={handleSubmit}
          >
            <label htmlFor="signupEmailInput" style={{ fontFamily: "Gafata" }}>
              Email
            </label>
            <input
              type="email"
              id="signupEmailInput"
              className="email"
              name="email"
              placeholder="Your e-mail here"
              onChange={handleChange}
              value={state.email}
            />

            <label
              htmlFor="signUpPasswordInput"
              style={{ fontFamily: "Gafata" }}
            >
              Password
            </label>
            <input
              type="password"
              className="password"
              name="password"
              id="signUpPasswordInput"
              placeholder="********"
              onChange={handleChange}
              value={state.password}
            />

            {/* Renderizaçāo condicional do botāo de loading */}
            {state.loading ? (
              <LoadingButton />
            ) : (
              <button
                type="submit"
                className="btn"
                style={{ fontFamily: "Gafata" }}
              >
                <strong>Log In</strong>
              </button>
            )}
          </form>
          <Link to="/signup" style={{ fontFamily: "Gafata", color: "#3e4f46" }}>
            Create New Account
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Login;
