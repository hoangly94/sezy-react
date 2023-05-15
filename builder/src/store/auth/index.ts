import Token from '@/constants/token'
import { cookie } from '@/utils/cookie'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  token: string
}

const initialState: AuthState = { token: cookie.get(Token.ACCESS_TOKEN) }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, { payload }: PayloadAction<string>) {
      state.token = payload
    },
  },
})

export const { setToken } = authSlice.actions
export default authSlice.reducer
