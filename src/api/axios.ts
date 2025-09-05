import axios from "axios";
import {K} from "../constant"
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(K.TOKENBOX);
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
console.log("➡️ Request:", config.method?.toUpperCase(), config.url, config.data,config.headers.Authorization);

  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("✅ Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("❌ Error:", error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export default api;