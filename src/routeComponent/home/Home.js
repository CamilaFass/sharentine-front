import React from 'react';
import AboutUs from '../../components/aboutus/AboutUs';
import How from '../../components/how/How';
import Login from '../login/Login';

const Home = (props) => {
  return (
    <div className="pt-4">
      <Login {...props} />
      <How />
      <AboutUs />
    </div>
  );
};

export default Home;
