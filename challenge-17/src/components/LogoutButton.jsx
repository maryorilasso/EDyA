import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  const { dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return <Button variant="danger" onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
