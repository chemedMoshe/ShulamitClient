import { createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "./Types/initialState";

const initialState: IinitialState = {
    _id: null,
    name: null,
    email: null
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
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;