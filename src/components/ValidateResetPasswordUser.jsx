import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ValidateResetPasswordUser = ({ children }) => {
  const { resetPasswordUser } = useSelector((state) => state.resetPassword);
  if (resetPasswordUser) {
    return children;
  }
  return <Navigate to={"/send-otp"} />;
};

export default ValidateResetPasswordUser;
