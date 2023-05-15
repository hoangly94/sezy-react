import { LoginFormValues, LoginResponse } from '@/models/auth.model'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}v1/auth`,
  }),

  endpoints: (builder) => ({
    postLogin: builder.mutation<LoginResponse, LoginFormValues>({
      query: (body) => ({ method: 'Post', url: '/login', body }),
    }),
  }),
})

export const { usePostLoginMutation } = authApi
