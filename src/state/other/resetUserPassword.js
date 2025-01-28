import { createSlice } from "@reduxjs/toolkit";

const userResetPasswordSlice = createSlice({
  name: "resetUserPassword",
  initialState: {
    resetPasswordUser:
      JSON.parse(localStorage.getItem("resetPasswordUser")) || null,
    otpValidated: JSON.parse(localStorage.getItem("otpValidated")) || null,
  },
  reducers: {
    setUserResetPassword: (state, action) => {
      (state.resetPasswordUser = action.payload),
        localStorage.setItem(
          "resetPasswordUser",
          JSON.stringify(action.payload)
        );
    },
    setOtpValidated: (state, action) => {
      (state.otpValidated = action.payload),
        localStorage.setItem("otpValidated", JSON.stringify(action.payload));
    },
  },
});

export const { setUserResetPassword, setOtpValidated } = userResetPasswordSlice.actions;
export default userResetPasswordSlice.reducer;
