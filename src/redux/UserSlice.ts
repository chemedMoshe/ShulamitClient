import { createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "./Types/initialState";
import { registerFetch } from "./ExtraRedusers/RegisterExtraReduser";

const initialState: IinitialState = {
    _id: null,
    name: null,
    email: null,
    loading: false,
    error: null,
    success: false
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state._id = null;
            state.name = null;
            state.email = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerFetch.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state._id = null;
            state.name = null;
            state.email = null;
        });

        builder.addCase(registerFetch.fulfilled,
            (state, action) => {
                state._id = action.payload._id;
                state.name = action.payload.name;
                state.email = action.payload.email;
            });

        builder.addCase(registerFetch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.success = false;
            state._id = null;
            state.name = null;
            state.email = null;
        });
    }
});




export const { logout } = userSlice.actions;

export default userSlice.reducer;