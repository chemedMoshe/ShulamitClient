import { createAsyncThunk} from "@reduxjs/toolkit";
import { loginFunc, logoutFunc } from "../Fetchs/LoginFeth";
import { LoginDTO } from "../Types/LoginDTO";

export const loginReduser = createAsyncThunk('user/login', 
    async ({ email, password }: LoginDTO,thunkAPI) => {
    try {
        const response = await loginFunc(email, password);
        return thunkAPI.fulfillWithValue(response);
    } catch (e) {
       return thunkAPI.rejectWithValue(e);
    }
});

export const logUotReducer = createAsyncThunk('user/logUot', 
    async (_,thunkAPI) => {
    try {
        const response = await logoutFunc();
        return thunkAPI.fulfillWithValue(response);
    } catch (e) {
       return thunkAPI.rejectWithValue(e);
    }
});
