import api from "./axios";
import type { Exercise } from "../types/exercise";
import { K } from "../../constant";

interface exerciseResponse {
  status: string;
  data: {
    exercises: Exercise[];
  };
}

export const fetchExercises = async (): Promise<Exercise[]> => {
  const token = localStorage.getItem(K.TOKENBOX);
  const { data } = await api.post<exerciseResponse>(
    "/api/v1/exercises/fetchExercises",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data.data.exercises;
};
