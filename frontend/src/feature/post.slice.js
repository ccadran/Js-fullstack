import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("getPosts", async (_, thunkAPI) => {
  axios
    .get("http://localhost:5001/post/")
    .then((res) => thunkAPI.dispatch(getPostsSuccess(res.data)));
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postData: [],
  },
  reducers: {
    getPostsSuccess: (state, { payload }) => {
      state.postData = payload;
    },
    createPost: (state, { payload }) => {
      state.postData.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.postData = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const { getPostsSuccess, createPost } = postSlice.actions;
export default postSlice.reducer;
