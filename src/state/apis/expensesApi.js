import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const expenseApi = createApi({
  reducerPath: 'expenseApi',
  baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}),
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: () => '/expenses',
    }),
    addExpense: builder.mutation({
      query: (expense) => ({
        url: '/expense/add',
        method: 'POST',
        body: expense,
      }),
    }),
    deleteExpense: builder.mutation({
      query: (id) => ({
        url: `expense/delete/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {useGetExpensesQuery, useAddExpenseMutation, useDeleteExpenseMutation} = expenseApi;
export default expenseApi;
