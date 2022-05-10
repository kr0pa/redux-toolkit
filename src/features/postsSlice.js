import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "Hello",
    content: "...",
  },
  {
    id: 1,
    title: "Two",
    content: "...",
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectedPosts = (state) => state.posts;

export default postsSlice.reducer;
