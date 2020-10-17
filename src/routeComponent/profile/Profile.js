import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../../components/profileCard/ProfileCard';
import api from '../../apis/';
import PostCard from '../../components/postCard/PostCard';

function Profile(props) {
  const [state, setState] = useState({
    posts: [],
    loading: false,
    error: ''
  });

  useEffect(function () {
    setState({ ...state, loading: true });

    (async function () {
      // console.log('TESTANDO POST', state);
      try {
        const response = await api.get(`/post/${props.user._id}`);

        setState({ ...state, loading: false, posts: [...response.data.posts] });
      } catch (err) {
        console.error(err);
        setState({ ...state, loading: false, error: err.message });
      }
    })();
  }, []);

  return (
    <div className="d-flex">
      <ProfileCard {...props} />

      <div className="d-flex col-md-9 flex-column align-items-center">
        {state.posts.map((item) => {
          console.log('TESTANDO', item.userId);
          return (
            <PostCard
              userImage={props.user.image}
              name={props.user.name}
              image={item.image}
              title={item.title}
              content={item.content}
              key={item._id}
              postUserId={item.userId}
              activeUserId={props.user._id}
              postId={item._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
