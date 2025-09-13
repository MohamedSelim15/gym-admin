import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchExercises } from "../api/exercisesApi";
import type { Exercise } from "../types/exercise";
import { ServerFailure } from "../../../core/utils/ApiError";
import { K } from "../../../constant";
const constData = [
  {
    id: 1,
    video: K.LOGO,
    img: K.LOGO,
    name: "Push Up",
    category: "Strength",
    targetMuscles: "Chest",
    difficultyLevel: "Easy",
  },
  {
    id: 2,
    video: K.LOGO,
    img: K.LOGO,
    name: "Squat",
    category: "Strength",
    targetMuscles: "Legs",
    difficultyLevel: "Medium",
  },
  {
    id: 3,
    video: K.LOGO,
    img: K.LOGO,
    name: "Plank",
    category: "Core",
    targetMuscles: "Abs",
    difficultyLevel: "Hard",
  },
];
interface fetchExercisesState {
  exercises: Exercise[];
  isLoading: boolean;
  error: string | null;
}

const initialState: fetchExercisesState = {
  exercises: [],
  isLoading: false,
  error: null,
};

export const fetchExercisesFun = createAsyncThunk<
  { exercises: Exercise[] },
  { _: null },
  { rejectValue: string }
>("exercises/fetchExercises", async (_, { rejectWithValue }) => {
  try {
    const res = { exercises: await fetchExercises() };
    return res;
  } catch (err) {
    const failure = ServerFailure.fromAxiosError(
      err as import("axios").AxiosError
    );
    return rejectWithValue(failure.failureMsg);
  }
});

const fetchExercisesSlice = createSlice({
  name: "fetchExercises",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchExercisesFun.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExercisesFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exercises = action.payload.exercises;
      })
      .addCase(
        fetchExercisesFun.rejected,
        (
          state
          // ,
          //  action
        ) => {
          state.isLoading = false;
          // state.error = action.payload ?? "fetchExercises failed";
          state.exercises = constData;
        }
      );
  },
});

export default fetchExercisesSlice.reducer;
