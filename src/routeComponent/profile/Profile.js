import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../../components/profileCard/ProfileCard';
import api from '../../apis/';

function Profile(props) {
  const [state, setState] = useState({
    posts: [],
    loading: false,
    error: ''
  });

  useEffect(
    function () {
      setState({ ...state, loading: true });

      (async function () {
        try {
          const response = await api.get(`/post/${props.user._id}`);
          console.log('TESTANDO', response);

          // setState({ ...state, loading: false, posts: [...response.data] });
        } catch (err) {
          console.error(err);
          setState({ ...state, loading: false, error: err.message });
        }
      })();
    },
    [props]
  );

  return (
    <div>
      <ProfileCard {...props} />
    </div>
  );
}

export default Profile;
