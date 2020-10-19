import React from 'react';
import './AboutUs.css';
import Camila from './camila.png';
import Arua from './arua.jpeg';
import Victor from './victor.jpeg';

const AboutUs = () => {
  return (
    <div id="AboutUs" className="us">
      <div className="quemsomos">
        <div className="quemsomos">
          <h1>
            <center>About Us</center>
          </h1>
          <div className="container-fluid containerquem">
            <div className="row d-flex flex-wrap">
              <div className="col-md-6">
                <center>
                  <img alt="Arua Foto" src={Arua} className="rounded-circle" />
                </center>
                <h4 className="tituloquem">Aruã Monteiro</h4>
                <p>
                  I am a professional willing and with ease to learn. Focused on
                  group work, committed to contributing and evolving with the
                  company. I have 4 years of experience in the infrastructure
                  area and I am currently doing the Web Development bootcamp by
                  Ironhack.
                </p>
                <br />
                <center>
                  <span>
                    <a
                      href="https://github.com/AruaMonteiro"
                      className="socialus"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>{' '}
                    </a>
                  </span>{' '}
                  <span>
                    <a
                      href="https://www.linkedin.com/in/arua-monteiro/"
                      className="socialus"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>{' '}
                    </a>
                  </span>
                </center>
              </div>
              <div className="col-md-6">
                <center>
                  <img
                    alt="Camila Foto"
                    src={Camila}
                    className="rounded-circle"
                  />
                </center>
                <h4 className="tituloquem">Camila Fassarella</h4>
                <p>
                  I love learning new things. I have over seven years of
                  experience in consulting companies and started my career in
                  web development recently. I'm finishing the Full-Stack Web
                  Development bootcamp by IronHack.
                </p>
                <br />
                <center>
                  <span>
                    <a
                      href="https://github.com/CamilaFass"
                      className="socialus"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>{' '}
                    </a>
                  </span>{' '}
                  <span>
                    <a
                      href="https://www.linkedin.com/in/fassarella/"
                      className="socialus"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>{' '}
                    </a>
                  </span>
                </center>
              </div>

              <center>
                <div className="col-md-6">
                  <center>
                    <img
                      alt="Victor Foto"
                      src={Victor}
                      className="rounded-circle"
                    />
                  </center>
                  <h4 className="tituloquem">Victor Monteiro</h4>
                  <p>
                    Im a Jr. fullstack developer with a background in accounting
                    and passionate about technology and languages, I've
                    discovered myself as a developer and now I'm eager to learn
                    and grow into new roles in tech.
                  </p>
                  <br />
                  <center>
                    <span>
                      <a
                        href="https://github.com/victormonteiro2"
                        className="socialus"
                        target="_blank"
                      >
                        <i className="fab fa-github"></i>{' '}
                      </a>
                    </span>{' '}
                    <span>
                      <a
                        href="https://www.linkedin.com/in/victor-monteiro2/"
                        className="socialus"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin"></i>{' '}
                      </a>
                    </span>
                  </center>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
