import { configureStore } from "@reduxjs/toolkit";
import authApi from "./state/apis/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import useAuthStatusSlice from "./state/other/userAuthStatus";
import expenseApi from "./state/apis/expensesApi";
import incomeApi from "./state/apis/incomeApis";
const store = configureStore({
  reducer: {
    userAuthStatus: useAuthStatusSlice,
    [authApi.reducerPath]: authApi.reducer,
    [expenseApi.reducerPath]: expenseApi.reducer,
    [incomeApi.reducerPath]: incomeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(incomeApi.middleware)
      .concat(expenseApi.middleware),
});
setupListeners(store.dispatch);
export default store;
