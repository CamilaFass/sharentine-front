import React from "react";
import AboutUs from "../../components/aboutus/AboutUs";
import How from "../../components/how/How";
import Login from "../login/Login";
import Footer from "../../components/footer/Footer";

const Home = (props) => {
  return (
    <div className="pt-4">
      <Login {...props} />
      <How />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
