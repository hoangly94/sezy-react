import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './auth/api'
import { postApi } from './post/api'
import { userApi } from './user/api'
import postSlice from './post'
import authSlice from './auth'
import userSlice from './user'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    auth: authSlice,
    user: userSlice,
    post: postSlice,
  },

  // Be used for caching, invalidation, polling, ...
  middleware: (gDM) =>
    gDM().concat([authApi.middleware, postApi.middleware, userApi.middleware]),
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
