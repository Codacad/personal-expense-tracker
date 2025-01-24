import { createSlice } from "@reduxjs/toolkit";

const userResetPasswordSlice = createSlice({
  name: "resetUserPassword",
  initialState: {
    resetPasswordUser: JSON.parse(localStorage.getItem("resetPasswordUser")) || null,
  },
  reducers: {
    setUserResetPassword: (state, action) => {
      (state.resetPasswordUser = action.payload),
        localStorage.setItem("resetPasswordUser", JSON.stringify(action.payload));
    },
  },
});

export const { setUserResetPassword } = userResetPasswordSlice.actions;
export default userResetPasswordSlice.reducer