import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const NotLoggedIn = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.userAuthStatus);
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

export default NotLoggedIn;
