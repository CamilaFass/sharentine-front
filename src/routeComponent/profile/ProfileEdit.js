import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/profileCard/ProfileCard';
import api from '../../apis/';

function ProfileEdit(props) {
  const [state, setState] = useState({
    name: '',
    lastName: '',
    location: '',
    image: '',
    loading: false,
    error: ''
  });

  useEffect(function () {
    setState({
      name: props.user.name,
      lastName: props.user.lastName,
      location: props.user.location,
      image: props.user.image
    });
  }, []);

  return (
    <div className="d-flex mt-3">
      <ProfileCard {...props} />
      <div className="col-md-9">
        <div className="profile-content">
          <form className="needs-validation" noValidate>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationTooltip03">Change Photo</label>
                <input type="file" className="form-control" />
                <button className="btn btn-success btn-sm mt-2">Upload</button>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationTooltip01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip01"
                  value={props.user.name}
                  required
                />
                <div className="valid-tooltip">Looks good!</div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="validationTooltip02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip02"
                  value={props.user.lastName}
                  required
                />
                <div className="valid-tooltip">Looks good!</div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationTooltip03">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip03"
                  value={props.user.location}
                  required
                />
                <div className="invalid-tooltip">
                  Please provide a valid city.
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <button className="btn btn-success btn-sm" type="submit">
                Save Changes
              </button>
              <button className="btn btn-danger btn-sm" type="submit">
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
