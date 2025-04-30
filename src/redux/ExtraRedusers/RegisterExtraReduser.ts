import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerFunc } from "../Fetchs/RegisterFetch";
import { RegisterDTO } from "../Types/RegisterDTO";

export const registerReduser = createAsyncThunk('user/register', 
    async ({ email, password, name }: RegisterDTO,thankApi) => {
    try {        
        const response = await registerFunc(email, password, name);
        return thankApi.fulfillWithValue(response);
    } catch (e) {
        return thankApi.rejectWithValue(e);
    }
}); 