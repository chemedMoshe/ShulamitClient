import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPosts } from "../../Fetchs/Post/GetAllPost";

export const getAllPostsFetch = createAsyncThunk('post/getAllPosts', async (_, thunkAPI) => {
    try {
        const response = await getAllPosts();
        return thunkAPI.fulfillWithValue(response);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});