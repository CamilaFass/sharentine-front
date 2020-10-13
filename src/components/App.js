<<<<<<< HEAD
import React from "react";
import Menu from "./menu/Menu";
import LoggedMenu from "./loggedMenu/LoggedMenu";
import Footer from "./footer/Footer";
import AboutUs from "./aboutus/AboutUs";
import How from "./how/how";
import TopPage from "./toppage/TopPage";
=======
import React, { useState, useEffect } from 'react';
import Menu from './menu/Menu';
import Footer from './footer/Footer';
import SignUp from '../routeComponent/login/SignUp';
// import Login from '../routeComponent/login/Login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../routeComponent/login/PrivateRoute';
import Home from '../routeComponent/home/Home';
>>>>>>> 167d3889907943cf66a446c26f8db848c2fc6d90

function App() {
  const [state, setState] = useState({ user: {}, token: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser') || '""');
    console.log(storedUser);

    setState({ ...storedUser });
  }, []);

  const handleLoginSubmit = (data) => {
    console.log(data);
    setState({ token: data.token, user: { ...data.user } });
  };

  const handleLogout = () => {
    // Limpa o state do componente para deslogar o usuario
    setState({
      user: {},
      token: ''
    });
  };

  return (
    <BrowserRouter>
      {state.user._id ? (
        <Switch>
          <PrivateRoute exact path="/feed" component={Menu} user={state} />
          {/* Como as rotas publicas só sāo renderizadas quando NĀO existe um usuario logado, as rotas das mesmas nāo irāo dar match com nenhum componente. Para resolver isso, criamos uma rota sem path para dar match com todas as rotas que "sobrarem" e redirecionamos para a home */}
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      ) : (
        // Caso contrário, renderize as rotas públicas
        <Switch>
          <Menu />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} setUserState={handleLoginSubmit} />;
            }}
          />
          {/* Como as rotas privadas só sāo renderizadas quando existe um usuario logado, as rotas das mesmas nāo irāo dar match com nenhum componente. Para resolver isso, criamos uma rota sem path para dar match com todas as rotas que "sobrarem" e redirecionamos para o login */}
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
