import React from 'react';

function ProfileEdit(props) {
  return (
    <div className="col-md-9">
      <div className="profile-content">
        <form className="needs-validation" novalidate>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationTooltip03">Change Photo</label>
              <input type="file" className="form-control" />
              <button className="btn btn-success btn-sm mt-2">Upload</button>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationTooltip01">First name</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip01"
                // value={state.user.name}
                required
              />
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="validationTooltip02">Last name</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip02"
                // value={state.user.lastName}
                required
              />
              <div className="valid-tooltip">Looks good!</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationTooltip03">City</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip03"
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
  );
}

export default ProfileEdit;
