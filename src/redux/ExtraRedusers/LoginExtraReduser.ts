import { createAsyncThunk} from "@reduxjs/toolkit";
import { loginFunc } from "../Fetchs/LoginFeth";
import { LoginDTO } from "../Types/LoginDTO";

export const loginFetch = createAsyncThunk('user/login', 
    async ({ email, password }: LoginDTO,thunkAPI) => {
    try {
        const response = await loginFunc(email, password);
        return thunkAPI.fulfillWithValue(response);
    } catch (e) {
       return thunkAPI.rejectWithValue(e);
    }
});
