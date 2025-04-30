import { createSlice } from "@reduxjs/toolkit";
import { IinitialUserState } from ".././Types/initialState";
import { registerReduser } from ".././ExtraRedusers/RegisterExtraReduser";
import { loginReduser } from ".././ExtraRedusers/LoginExtraReduser";

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
        builder.addCase(registerReduser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state._id = null;
            state.name = null;
            state.email = null;
        });

        builder.addCase(registerReduser.fulfilled,
            (state, action) => {
                state._id = action.payload._id;
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.loading = false;
                state.error = null;
            });

        builder.addCase(registerReduser.rejected, (state, action) => {
            state.loading = false;
            
            state.error = action.payload as string || "הרשמה כשלה";
            state.success = false;
            state._id = null;
            state.name = null;
            state.email = null;
        });


        builder.addCase(loginReduser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state._id = null;
            state.name = null;
            state.email = null;
        });

        builder.addCase(loginReduser.fulfilled,
            (state, action) => {
                state._id = action.payload._id;
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.loading = false;
                state.error = null;
                state.success = true;
            });

        builder.addCase(loginReduser.rejected, (state, action) => {
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