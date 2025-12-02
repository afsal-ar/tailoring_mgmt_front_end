import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useSelector((s:RootState)=>s.auth);
  if(!auth.user) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
