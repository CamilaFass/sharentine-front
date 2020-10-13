import React from 'react';
import AboutUs from '../../components/aboutus/AboutUs';
import How from '../../components/how/How';
import Login from '../login/Login';

const Home = (props) => {
  return (
    <div>
      <Login {...props} setUserState />
      <How />
      <AboutUs />
    </div>
  );
};

export default Home;
