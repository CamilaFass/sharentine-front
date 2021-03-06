
import React, { useState, useEffect } from "react";
import Menu from "./menu/Menu";
import LoggedMenu from "./loggedMenu/LoggedMenu";
import Feed from "../routeComponent/feed/Feed";
import Footer from "./footer/Footer";
import SignUp from '../routeComponent/login/SignUp';
// import Login from '../routeComponent/login/Login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../routeComponent/login/PrivateRoute';
import Home from '../routeComponent/home/Home';

import Logout from "../routeComponent/login/Logout";

import Profile from "../routeComponent/profile/Profile";
import ProfileEdit from "../routeComponent/profile/ProfileEdit";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiBookSearch from "./apiSearchPage/ApiBookSearch";
import ApiMusicSearch from "./apiMusicSearch/ApiMusicSearch";
import ApiMovieSearch from "./apiMovieSearch/ApiMovieSearch";


function App() {
  const [state, setState] = useState({ user: {}, token: "" });

  function updateUserState() {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
    console.log(storedUser);

    setState(storedUser !== "" ? { ...storedUser } : { user: {}, token: "" });
  }

  useEffect(() => {
    updateUserState();
  }, []);

  const handleLoginSubmit = (data) => {
    console.log(data);
    setState({ token: data.token, user: { ...data.user } });
  };

  const handleLogout = () => {
    // Limpa o state do componente para deslogar o usuario
    setState({
      user: {},
      token: "",
    });
  };

  return (
    <BrowserRouter>
      {state.user._id ? (
        <div>
          <LoggedMenu />
          <Switch>
            <PrivateRoute
              exact
              path="/logout"
              component={Logout}
              user={state}
              handleLogout={handleLogout}
            />
            <PrivateRoute exact path="/feed" component={Feed} user={state} />
            <PrivateRoute
              exact
              path="/profile"
              component={Profile}
              user={state}
            />
            <PrivateRoute
              exact
              path="/profile-edit"
              component={ProfileEdit}
              user={state}
              updateUserState={updateUserState}
            />
            <PrivateRoute
              exact
              path="/book-search"
              component={ApiBookSearch}
              user={state}
              updateUserState={updateUserState}
            />
            <PrivateRoute
              exact
              path="/movie-search"
              component={ApiMovieSearch}
              user={state}
              updateUserState={updateUserState}
            />
            <PrivateRoute
              exact
              path="/music-search"
              component={ApiMusicSearch}
              user={state}
              updateUserState={updateUserState}
            />
            {/* Como as rotas publicas só sāo renderizadas quando NĀO existe um usuario logado, as rotas das mesmas nāo irāo dar match com nenhum componente. Para resolver isso, criamos uma rota sem path para dar match com todas as rotas que "sobrarem" e redirecionamos para a home */}
            <Route>
              <Redirect to="/feed" />
            </Route>
          </Switch>
        </div>
      ) : (
        // Caso contrário, renderize as rotas públicas
        <div>
          <Menu />
          <Switch>
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
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
