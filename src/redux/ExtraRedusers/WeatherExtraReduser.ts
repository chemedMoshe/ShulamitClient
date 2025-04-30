import { createAsyncThunk } from "@reduxjs/toolkit";
import { IWeather } from "../../components/Weather/WeatherComp";
import { checkWeather } from "../Fetchs/wheatherFech";

export const weatherReducer = createAsyncThunk('weather/getWeather', 
    async (location:IWeather,thunkApi) => {
        try {
            const response = await checkWeather(location.lat, location.lon);
            return thunkApi.fulfillWithValue(response);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
            
        }
    });