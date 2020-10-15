import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../../components/profileCard/ProfileCard';

function Profile(props) {
  return (
    <div>
      <ProfileCard {...props} />
    </div>
  );
}

export default Profile;
