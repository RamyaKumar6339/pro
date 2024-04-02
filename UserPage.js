import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
