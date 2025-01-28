import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const forgotPasswordApi = createApi({
  reducerPath: "forgotPasswordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: (data) => ({
        url: "/send-otp",
        method: "POST",
        body: data,
      }),
    }),
    validateOtp: builder.mutation({
      query: (data) => ({
        url: "/validate-otp",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/reset-password",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useSendOtpMutation,
  useValidateOtpMutation,
  useResetPasswordMutation,
} = forgotPasswordApi;
export default forgotPasswordApi;
