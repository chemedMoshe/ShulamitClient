import { createSlice } from "@reduxjs/toolkit";
import { IinitialPostState } from "../Types/initialState";

const initialState: IinitialPostState = {
    _id: null,
    title: null,
    body: null,
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
    }
});

export const { clearError } = postSlice.actions
export default postSlice.reducer