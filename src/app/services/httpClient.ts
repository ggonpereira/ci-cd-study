import axios, { InternalAxiosRequestConfig } from "axios";
import { cookieKeys } from "../config/cookieKeys";
import { getCookie } from "../utils/cookie";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

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
httpClient.interceptors.response.use(async (data) => {
  await sleep(500);

  return data;
});
