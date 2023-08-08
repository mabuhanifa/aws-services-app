import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),

  tagTypes: ["Foods"],

  endpoints: (builder) => ({
    getFoods: builder.query({
      query: () => "/foods",
      keepUnusedDataFor: 600,
      providesTags: ["Tasks", "Task"],
    }),
  }),
});

export const { useGetFoodsQuery } = foodsApi;
