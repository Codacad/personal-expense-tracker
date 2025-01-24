import { configureStore } from "@reduxjs/toolkit";
import authApi from "./state/apis/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import useAuthStatusSlice from "./state/other/userAuthStatus";
import userResetPasswordSlice from './state/other/resetUserPassword'
import expenseApi from "./state/apis/expensesApi";
import incomeApi from "./state/apis/incomeApis";
import forgotPasswordApi from "./state/apis/forgotPasswordApi";
const store = configureStore({
  reducer: {
    userAuthStatus: useAuthStatusSlice,
    resetPassword: userResetPasswordSlice,
    [authApi.reducerPath]: authApi.reducer,
    [expenseApi.reducerPath]: expenseApi.reducer,
    [incomeApi.reducerPath]: incomeApi.reducer,
    [forgotPasswordApi.reducerPath]: forgotPasswordApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(incomeApi.middleware)
      .concat(expenseApi.middleware)
      .concat(forgotPasswordApi.middleware),
});
setupListeners(store.dispatch);
export default store;
