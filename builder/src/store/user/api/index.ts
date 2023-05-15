import { LoginResponse } from '@/models/auth.model'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['user'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}v1/user`,
  }),

  endpoints: (builder) => ({
    getUser: builder.query<LoginResponse, any>({
      query: () => ({ url: '/' }),
    }),
  }),
})

export const { useGetUserQuery } = userApi
