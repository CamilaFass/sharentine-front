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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam eget sapien sapien. Curabitur in metus urna. In hac
                    habitasse platea dictumst. Phasellus eu sem sapien, sed
                    vestibulum velit. Nam purus nibh, lacinia non faucibus et,
                    pharetra in dolor. Sed iaculis posuere diam ut cursus. Morbi
                    commodo sodales nisi id sodales. Proin consectetur, nisi id
                    commodo imperdiet, metus nunc consequat lectus, id bibendum
                    diam velit et dui. Proin massa magna, vulputate nec bibendum
                    nec, posuere nec lacus. Aliquam mi erat, aliquam vel luctus
                    eu, pharetra quis elit. Nulla euismod ultrices massa, et
                    feugiat ipsum consequat eu.
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
