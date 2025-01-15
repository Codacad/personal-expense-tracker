import { configureStore } from "@reduxjs/toolkit";
import authApi from "./state/apis/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import useAuthStatusSlice from "./state/other/userAuthStatus";
const store = configureStore({
  reducer: {
    userAuthStatus: useAuthStatusSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
setupListeners(store.dispatch);
export default store;
