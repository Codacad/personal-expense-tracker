import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const NotLoggedIn = ({ children }) => {
  const { user } = useSelector((state) => state.userAuthStatus);
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default NotLoggedIn;
