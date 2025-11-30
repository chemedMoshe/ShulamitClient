import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostType } from "../../Types/PostType";
import { addNewPost } from "../../Fetchs/Post/AddNewPost";

export const addPostReducer = createAsyncThunk(
  "post/newPost",
  async (post: PostType, thunkAPI) => {
    try {
    const data = await addNewPost(post);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
