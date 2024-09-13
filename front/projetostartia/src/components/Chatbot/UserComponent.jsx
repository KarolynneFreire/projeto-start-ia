import React, { useState, useEffect } from 'react';
import apiService from './apiService';

const UserComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  // Function to fetch user data
  const fetchUserData = async () => {
    const data = await apiService.getUserById(userId);
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data on component mount
  }, [userId]);

  return (
    <div>
      <h3>User Data</h3>
      {userData ? (
        <div>
          <p><strong>CPF:</strong> {userData.cpf}</p>
          <p><strong>Nome Completo:</strong> {userData.nomeCompleto}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Is Vulnerável:</strong> {userData.isVulneravel ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserComponent;
