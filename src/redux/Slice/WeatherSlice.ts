import { createSlice } from "@reduxjs/toolkit"
import { weatherReducer } from "../ExtraRedusers/WeatherExtraReduser";
import { IinitialWeatherState } from "../Types/initialState";

const initialState:IinitialWeatherState = {
    loading: false,
    error: null,
    success: false,
    weatherData:null
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(weatherReducer.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state.weatherData = null;
        });
        builder.addCase(weatherReducer.fulfilled, (state, action) => {
            console.log(action.payload, 'action.payload');
            
            state.weatherData = action.payload;
            state.loading = false;
            state.error = null;
            state.success = true;
            state.weatherData = action.payload;
        });
        builder.addCase(weatherReducer.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.success = false;
            state.weatherData = null;
        });
    },
})

export default weatherSlice.reducer