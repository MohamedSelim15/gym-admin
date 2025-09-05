import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { loggerMiddleware } from "./loggerMiddleware";
export const store = configureStore({
    reducer:{
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;