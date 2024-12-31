import { configureStore } from "@reduxjs/toolkit";
import User from "./UserSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer:{
    myUser: User
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
