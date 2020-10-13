import React from 'react';
import './How.css';
import HowImg from './howimg.svg';

const How = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="howtitle">
            <center>How it Works</center>
          </h1>
          <div className="container-fluid">
            <div className="row d-flex flex-wrap">
              <div className="col-md-6 howtext">
                <p>
                  We understand these are diffuclt times, due to quarantine we
                  are spending way more time online, but also sometimes regular
                  social media may be <i>too much</i>. Our idea is easy: share
                  simple activities, such as a book you wanna read, a song/album
                  you are listening to, or ask for movie recommendations.
                </p>
                <br />
              </div>
              <div className="col-md-6">
                <img
                  src={HowImg}
                  height="300px"
                  width="100%"
                  max-width="100%"
                  alt="how it works image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>

    // <div>
    //   <h1 className="howtitle">How it Works</h1>
    //   <div className="container-fluid">
    //     <div className="row d-flex flex-wrap">
    //       <div className="howdescription col-md-6">
    //         <p>
    //           We understand these are diffuclt times, due to quarantine we are
    //           spending way more time online, but also sometimes Facebook may be{" "}
    //           <i>too much</i>. Our idea is easy: share simple activities, such
    //           as a book you wanna read, a song/album you are listening to, or
    //           ask for movie recommendations.
    //         </p>
    //         <div className="howimg col-md-6">
    //           <img
    //             src={HowImg}
    //             height="300px"
    //             width="600px"
    //             alt="how it works image"
    //           ></img>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <hr />
    // </div>
  );
};

export default How;
