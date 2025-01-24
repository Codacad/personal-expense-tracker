import React from "react";
import { useSelector } from "react-redux";
import ForgotPassword from "../routes/ForgotPassword";
import { Navigate } from "react-router-dom";

const ValidateResetPasswordUser = ({ children }) => {
  const { resetPasswordUser } = useSelector((state) => state.resetPassword);
  if (resetPasswordUser) {
    return children;
  }
  return <Navigate to={"/forgot-password"} />;
};

export default ValidateResetPasswordUser;
