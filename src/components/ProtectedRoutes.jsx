import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user')); //chứa role

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="unauthorized" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
