import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import LoadingSpinner from "./LoadingSpinner";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAuth = true,
}) => {
  const { isAuthenticated, isInitialized } = useAuthentication();

  if (!isInitialized) {
    return <LoadingSpinner message="Loading..." />;
  }

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
