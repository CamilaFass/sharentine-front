import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/profileCard/ProfileCard';
import api from '../../apis/';
import { useHistory } from 'react-router-dom';

function ProfileEdit(props) {
  const history = useHistory();
  const [state, setState] = useState({
    name: '',
    lastName: '',
    location: '',
    image: '',
    attachment: '',
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

  const handleChange = (event) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const handleSubmit = async (event) => {
    setState({ ...state, loading: true });
    console.log(state, 'testeee');
    try {
      // Impedir comportamento padrāo do formulário
      event.preventDefault();

      // Disparar a requisiçāo manualmente através do React
      const response = await api.patch(`/profile/${props.user._id}`, state);
      console.log(response);

      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      loggedInUser.user = { ...loggedInUser.user, ...state };
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      console.log('ATUALIZANDO O LOCAL STORAGE', loggedInUser);
      // Navega programaticamente para a lista de projetos
      history.push('/profile');
    } catch (err) {
      console.error(err);
      setState({ ...state, error: err.message });
    }
  };

  return (
    <div className="d-flex mt-3">
      <ProfileCard {...props} />
      <div className="col-md-9">
        <div className="profile-content">
          <form className="needs-validation" onSubmit={handleSubmit}>
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
                  name="name"
                  id="validationTooltip01"
                  value={state.name}
                  onChange={handleChange}
                  required
                />
                <div className="valid-tooltip">Looks good!</div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="validationTooltip02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="validationTooltip02"
                  value={state.lastName}
                  onChange={handleChange}
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
                  name="location"
                  id="validationTooltip03"
                  value={state.location}
                  onChange={handleChange}
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
