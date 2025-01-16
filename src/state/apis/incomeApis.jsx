import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const incomeApi = createApi({
  reducerPath: "incomeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  }),
  tagTypes: ["Income"],
  endpoints: (builder) => ({
    getIncome: builder.query({
      query: () => "/incomes",
    }),
    addIncome:builder.mutation({
      query:(income) => ({
        url: "/income/add",
        method: "POST",
        body: income,
      })
    }),
    deleteIncome:builder.mutation({
      query: (id) => ({
        url: `/income/delete/${id}`,
        method:"DELETE"
      })
    })
  })
});


export const { useGetIncomeQuery, useAddIncomeMutation, useDeleteIncomeMutation } = incomeApi;
export default incomeApi;