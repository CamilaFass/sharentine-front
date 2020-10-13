import React from 'react';
import Menu from './menu/Menu';
import Footer from './footer/Footer';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from '../routeComponent/SignUp';
// import Login from '../routeComponent/Login';
// import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Menu />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
