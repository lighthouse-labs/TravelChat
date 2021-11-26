import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useVisualMode from '../hooks/useVisualMode';
import ProfileEditForm from './ProfileEditForm';

export default function Profile (props) {
  const [user, setUser] = useState([]);
  const userID = 1;
  
  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      const profile = response.data.find((user) => {
        return user.id === userID;
      })
      setUser(profile)
    })
    .catch(error => console.log("error:", error))
    }, [])

  return (
    <div>
      <h1>{user.name}</h1> 
      <h4>{user.location}</h4>
    </div>
  );
};