import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/Slices/authSlice";
import { loggerMiddleware } from "./loggerMiddleware";
import fetchExercisesReducer from "../features/exercises/slices/exercisesSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    fetchExercises: fetchExercisesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
