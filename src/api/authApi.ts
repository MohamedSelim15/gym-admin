import api from "./axios";
import { User } from "../types";
interface LoginResponse{
    status: String;
    token: string;
    data:{
        user:User;
    };
}
export const login = async (
  credentials: { email: string; password: string }
): Promise<{ user: User,token:string}> => {
  const { data } = await api.post<LoginResponse>("/api/v1/auth/login", 
    credentials);
  return { user: data.data.user,token:data.token};
};
