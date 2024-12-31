import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerFunc } from "../Fetchs/RegisterFetch";
import { RegisterDTO } from "../Types/RegisterDTO";

export const registerFetch = createAsyncThunk('user/register', async ({ email, password, name }: RegisterDTO) => {
    try {        
        const response = await registerFunc(email, password, name);
        return response;
    } catch (e) {
        throw e;
    }
}); 