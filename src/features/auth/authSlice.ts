import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "../../types/index";
import { login } from "../../api/authApi";
import { ServerFailure } from "../../utils/ApiError";
import { K } from "../../constant";
interface AuthState {
  user: User | null;
  token:string|null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem(K.TOKENBOX),
  isLoading: false,
  error: null,
};
export const loginFun = createAsyncThunk<{user:User; token:string}
,{email:string; password:string},
{rejectValue: string}>(
    "auth/login",
    async (credentials,{rejectWithValue})=>{
      try
      {
       const res= await login(credentials);
       return res;
      }catch(err: any){
        const failure = ServerFailure.fromAxiosError(err);
    return rejectWithValue(failure.failureMsg);
   }
    }
) ;
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
  },
  extraReducers(builder) {
      builder
      .addCase(loginFun.pending, (state)=>{
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginFun.fulfilled, (state,action)=>{
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem(K.TOKENBOX,action.payload.token);
      })
      .addCase(loginFun.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.payload ?? "Login failed"
      })
  },
});


export default authSlice.reducer;
