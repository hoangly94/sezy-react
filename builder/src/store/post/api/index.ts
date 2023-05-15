import prepareHeaders from '@/store/prepareHeaders'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}/v1/posts`,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => ({ url: '' }),
    }),
    postPost: builder.mutation({
      query: (body) => ({ method: 'POST', url: '', body }),
    }),
  }),
})

postApi.middleware
export const { useGetPostQuery, usePostPostMutation } = postApi
