import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postData: [],
  },
  reducers: {
    getPosts: (state, { payload }) => {
      state.postData = payload;
    },
  },
});

export const { getPosts } = postSlice.actions;
export default postSlice.reducer;
