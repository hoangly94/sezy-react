import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userState {
  id: number
  email: string
}

const initialState: userState = {
  id: 0,
  email: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<userState>) {
      return payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
