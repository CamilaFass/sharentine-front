import React from 'react';
import Menu from './menu/Menu';
import Footer from './footer/Footer';
import AboutUs from './aboutus/AboutUs';
import How from './how/how';
import TopPage from './toppage/TopPage';
import SignUp from '../routeComponent/SignUp';
// import Login from '../routeComponent/Login';

function App() {
  return (
    <div className="App">
      <Menu />
      <TopPage />
      <How />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
