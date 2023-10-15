import axios, { InternalAxiosRequestConfig } from "axios";
import { cookieKeys } from "../config/cookieKeys";
import { getCookie } from "../utils/cookie";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const reqSuccessInterceptor = async (config: InternalAxiosRequestConfig) => {
  const token = getCookie(cookieKeys.ACCESS_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

httpClient.interceptors.request.use(reqSuccessInterceptor);
