import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useUserAuth } from '../contex/useUserContext';

const AuthProtectedRoute = () => {
  const { state } = useUserAuth();

  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthProtectedRoute;
