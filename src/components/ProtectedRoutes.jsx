import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.userAuthStatus);

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
