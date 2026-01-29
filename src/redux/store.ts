import { configureStore } from "@reduxjs/toolkit";
import User from "./Slice/UserSlice";
import Post from "./Slice/PostSlice";
import Weather from "./Slice/WeatherSlice";
import graphSlice from "./Slice/GraphSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        myUser: User,
        post: Post,
        weather: Weather,
        graph: graphSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
