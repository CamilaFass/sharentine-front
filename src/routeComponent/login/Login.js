import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../apis/';

import './SignUp.css';

import LoadingButton from '../../components/loadingButton/LoadingButton';

function Login(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    loading: false,
    error: ''
  });

  const handleChange = (event) => {
    setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  // Dispara a requisiçāo HTTP para o backend com os dados do formulário
  const handleSubmit = async (event) => {
    setState({ loading: true });

    try {
      // Impedir comportamento padrāo do formulário
      event.preventDefault();

      // Disparar a requisiçāo manualmente através do React
      const response = await api.post('/login', state);
      console.log(response.data);

      // Atualiza o state do componente pai
      props.setUserState(response.data);

      // Guarda os dados do usuario no computador do usuario
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          user: { ...response.data.user },
          token: response.data.token
        })
      );

      // Cancela o estado de loading
      setState({ loading: false });

      // Navega programaticamente para a lista de projetos
      props.history.push('/feed');
      // Força um reload na página para limpar a memória do roteador
      props.history.go();
    } catch (err) {
      console.error(err);
      setState({ loading: false, error: err.message });
    }
  };

  return (
    <div className="SignUp">
      <div
        className="div-signup d-flex justify-content-center align-content-center flex-wrap w-100"
        id="form"
      >
        <section className="section-form-signup-rectangle justify-content-center d-flex align-content-center flex-wrap">
          <h1 className="sign-up-h1">
            <span className="span-azul">Welcome back to Sharentine!</span>
          </h1>
          <form
            className="d-flex flex-column text-center"
            onSubmit={handleSubmit}
          >
            <label htmlFor="signupEmailInput">Email</label>
            <input
              type="email"
              id="signupEmailInput"
              className="email"
              name="email"
              placeholder="Your e-mail here"
              onChange={handleChange}
              value={state.email}
            />

            <label for="signUpPasswordInput">Password</label>
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
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            )}
          </form>
          <a href="#">Create New Account</a>
        </section>

        <img
          className="img-form-signup w-50"
          src="./images/authImg.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;