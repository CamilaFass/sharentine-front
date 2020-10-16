import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';
import api from '../../apis/';

function ProfileCard(props) {
  return (
    <div className="profile-card d-flex col-md-3">
      {/* <div className="container row"> */}
      {/* <div className="row profile"> */}
      <div className="">
        <div className="profile-sidebar">
          {/* <!-- SIDEBAR USERPIC --> */}
          <div className="profile-userpic">
            <img src={props.user.image} alt="profile" />
          </div>
          {/* <!-- END SIDEBAR USERPIC -->
				<!-- SIDEBAR USER TITLE --> */}
          <div className="profile-usertitle">
            <div className="profile-usertitle-name">
              {props.user.name} {props.user.lastName}
            </div>
            <div className="profile-usertitle-location">
              {props.user.location}
            </div>
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
                <Link to="/profile-edit">
                  <i className="glyphicon glyphicon-user"></i>
                  Account Settings{' '}
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- END MENU --> */}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default ProfileCard;
