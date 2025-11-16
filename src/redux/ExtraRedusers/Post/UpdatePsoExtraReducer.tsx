import { createAsyncThunk } from "@reduxjs/toolkit";
import { updatePostFetch } from "../../Fetchs/Post/UpdatePost";
import { PostType } from "../../Types/PostType";

export const updatePostReducer = createAsyncThunk(
  "post/updatePost",
  async (post: PostType, thunkAPI) => {
    try {
      const response:PostType = await updatePostFetch(post._id, post);
      return thunkAPI.fulfillWithValue(response);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
