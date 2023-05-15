import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostState {
  posts: string[]
}
export const initialState = {
  posts:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('posts') ?? '[]')
      : [],
} as PostState

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts(state, { payload }: PayloadAction<string[]>) {
      state.posts = payload
    },
  },
})

export const { setPosts } = postSlice.actions

export default postSlice.reducer
