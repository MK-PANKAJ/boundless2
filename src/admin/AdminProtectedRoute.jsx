import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * A routing wrapper to protect administrative routes.
 * If the admin session is not active, redirects to login.
 */
export default function AdminProtectedRoute({ children }) {
  const isAuthed = sessionStorage.getItem("admin_token") === "true";
  
  if (!isAuthed) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
}
