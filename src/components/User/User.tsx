import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface IUser {
  email: string
}

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const response = await axios('https://randomuser.me/api/')
    setUser(response.data.results)
    console.log(response.data.results)
  }

  return (
  <div className='counter-container '>
    {user.length > 0 && user.map((item: IUser) => (
      <h2 data-testid="email">{item.email}</h2>
    ))}
  </div>
  );
}

export default User; 