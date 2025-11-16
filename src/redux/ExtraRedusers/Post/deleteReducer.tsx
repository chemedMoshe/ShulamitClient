import { createAsyncThunk } from "@reduxjs/toolkit";
import { deletePostFetch } from "../../Fetchs/Post/DeletePost";

interface IDeletePostResponse {
    message: string;
    _id: string;
}

export const deletePostReducer = createAsyncThunk('post/deletePost', async (postId: string, thunkAPI) => {
    try {
        const response:IDeletePostResponse = await deletePostFetch(postId);
        return thunkAPI.fulfillWithValue(response._id);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});