import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IinitialPostState } from "../Types/initialState";
import { getAllPostsFetch } from "../ExtraRedusers/Post/GetAllExtraReduser";
import { PostType } from "../Types/PostType";

const initialState: IinitialPostState = {
    postList: null,
    loading: false,
    error: null,
    success: false,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPostsFetch.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state.postList = null;
        });
        builder.addCase(getAllPostsFetch.fulfilled, (state, action:PayloadAction<PostType[]>) => {
            state.postList = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(getAllPostsFetch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.success = false;
            state.postList = null;
        });
    },
});

export const { clearError } = postSlice.actions
export default postSlice.reducer