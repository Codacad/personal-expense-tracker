import { createSlice } from "@reduxjs/toolkit";
const userAuthStatus = createSlice({
  name: "userAuthStatus",
  initialState: {
    isAuthenticated:
      JSON.parse(localStorage.getItem("isAuthenticated")) || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
  },
});
export const { setUser } = userAuthStatus.actions;
export default userAuthStatus.reducer;
