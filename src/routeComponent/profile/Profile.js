import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile(props) {
  const [state, setState] = useState({ user: {}, token: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser') || '""');
    // console.log(storedUser);

    setState(storedUser !== '' ? { ...storedUser } : { user: {}, token: '' });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row profile">
          <div className="col-md-3">
            <div className="profile-sidebar">
              {/* <!-- SIDEBAR USERPIC --> */}
              <div className="profile-userpic">
                <img src="http://res.cloudinary.com/dbthudmai/image/upload/v1601056338/books/Vic.jpg.jpg" />
              </div>
              {/* <!-- END SIDEBAR USERPIC -->
				<!-- SIDEBAR USER TITLE --> */}
              <div className="profile-usertitle">
                <div className="profile-usertitle-name">{state.user.name}</div>
                <div className="profile-usertitle-location">São Paulo</div>
              </div>
              {/* <!-- END SIDEBAR USER TITLE -->
				<!-- SIDEBAR BUTTONS --> */}
              <div className="profile-userbuttons">
                <button type="button" className="btn btn-success btn-sm">
                  Follow
                </button>
              </div>
              {/* <!-- END SIDEBAR BUTTONS -->
				<!-- SIDEBAR MENU --> */}
              <div className="profile-usermenu ">
                <ul className="nav justify-content-center">
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-user"></i>
                      Account Settings{' '}
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- END MENU --> */}
            </div>
          </div>
          <div className="col-md-9">
            <div className="profile-content">Post components goes here..</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
