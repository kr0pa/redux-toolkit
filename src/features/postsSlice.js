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
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectedPosts = (state) => state.posts;
export const { postAded } = postsSlice.actions;

export default postsSlice.reducer;
