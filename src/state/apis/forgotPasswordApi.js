import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const forgotPasswordApi = createApi({
  reducerPath: "forgotPasswordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useForgotPasswordMutation } = forgotPasswordApi;
export default forgotPasswordApi;
