import { createSlice } from "@reduxjs/toolkit";
import { IinitialUserState } from ".././Types/initialState";
import { registerFetch } from ".././ExtraRedusers/RegisterExtraReduser";
import { loginFetch } from ".././ExtraRedusers/LoginExtraReduser";

const initialState: IinitialUserState = {
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
        clearError: (state) => {
            state.error = null;
        }
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
                state.loading = false;
                state.error = null;
            });

        builder.addCase(registerFetch.rejected, (state, action) => {
            state.loading = false;
            
            state.error = action.payload as string || "הרשמה כשלה";
            state.success = false;
            state._id = null;
            state.name = null;
            state.email = null;
        });


        builder.addCase(loginFetch.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state._id = null;
            state.name = null;
            state.email = null;
        });

        builder.addCase(loginFetch.fulfilled,
            (state, action) => {
                state._id = action.payload._id;
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.loading = false;
                state.error = null;
                state.success = true;
            });

        builder.addCase(loginFetch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.success = false;
            state._id = null;
            state.name = null;
            state.email = null;
        })    
        }
    }
);




export const { logout, clearError } = userSlice.actions;

export default userSlice.reducer;