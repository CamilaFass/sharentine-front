import React, { useState } from "react";
// import Menu from '../components/menu/Menu';
// import Footer from '../components/footer/Footer';
import api from "../../apis/";
import { Link } from "react-router-dom";
import "./SignUp.css";
import LoadingButton from "../../components/loadingButton/LoadingButton";

function SignUp(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    loading: false,
    error: {},
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = async (event) => {
    setState({ loading: true });

    try {
      // Impedir comportamento padrāo do formulário
      event.preventDefault();

      // Disparar a requisiçāo manualmente através do React
      const response = await api.post("/signup", state);

      // Cancela o estado de loading
      setState({ loading: false });

      // Navega programaticamente para a home
      props.history.push("/");
      // Força um reload na página para limpar a memória do roteador
      props.history.go();
    } catch (err) {
      setState({ loading: false, error: { ...err.response.data.errors } });
    }
  };

  return (
    <div className="SignUp">
      <div className="div-signup d-flex justify-content-center align-content-center flex-wrap w-100" id="form">
        <section className="section-form-signup-rectangle justify-content-center d-flex align-content-center flex-wrap">
          <h1 className="sign-up-h1">
            <span className="span-azul" style={{ fontFamily: "Gafata" }}>
              Join Us at Sharentine!
            </span>
          </h1>
          <form onSubmit={handleSubmit} className="d-flex flex-column text-center">
            <label method="POST" htmlFor="signupUsernameInput" style={{ fontFamily: "Gafata" }}>
              Name
            </label>
            <input
              type="name"
              id="signupUsernameInput"
              className="username"
              name="name"
              placeholder="Your name here"
              style={{ fontFamily: "Gafata" }}
              onChange={handleChange}
              value={state.name}
              required
            />

            <label htmlFor="signupEmailInput" style={{ fontFamily: "Gafata" }}>
              Email
            </label>
            <input
              type="email"
              id="signupEmailInput"
              className="email"
              name="email"
              placeholder="Your e-mail here"
              style={{ fontFamily: "Gafata" }}
              onChange={handleChange}
              value={state.email}
              required
            />

            <label htmlFor="signUpPasswordInput">Password</label>
            <input
              type="password"
              className="password"
              name="password"
              id="signUpPasswordInput"
              placeholder="********"
              style={{ fontFamily: "Gafata" }}
              onChange={handleChange}
              value={state.password}
              required
            />
            {/* Renderizaçāo condicional do botāo de loading */}
            {state.loading ? (
              <LoadingButton />
            ) : (
              <button type="submit" className="btn" style={{ fontFamily: "Gafata" }}>
                Create Account
              </button>
            )}
          </form>
          <Link to="/" className="backtologin">
            Already have an account? Log in here
          </Link>

          {state.error ? state.error.name ? <span className="text-danger error-message">{state.error.name}</span> : null : null}
          {state.error ? state.error.email ? <span className="text-danger error-message">{state.error.email}</span> : null : null}
          {state.error ? state.error.password ? <span className="text-danger error-message">{state.error.password}</span> : null : null}
        </section>

        <img className="img-form-signup w-50" src="./images/authImg.svg" alt="" />
      </div>
    </div>
  );
}

export default SignUp;
