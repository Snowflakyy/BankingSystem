import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectedPath?: string;
  children?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAllowed,
  redirectedPath="/login",
  children
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectedPath} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

