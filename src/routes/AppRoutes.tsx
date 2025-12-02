import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import NewOrder from '../pages/NewOrder';
import CustomerPortal from '../pages/CustomerPortal';
import ProtectedRoute from '../components/common/ProtectedRoute';
import LoginType from "../pages/LoginType";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/login" element={<LoginType />} />
    <Route path="/login/:type" element={<Login />} />
    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
    <Route path="/orders/new" element={<ProtectedRoute><NewOrder /></ProtectedRoute>} />
    <Route path="/customer" element={<ProtectedRoute><CustomerPortal /></ProtectedRoute>} />
    <Route path="/" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default AppRoutes;
