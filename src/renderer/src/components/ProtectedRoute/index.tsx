import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@renderer/context/AuthContext";

const ProtectedRoute: React.FC = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
