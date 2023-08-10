import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getCookie } from "../utils/cookie";
import { toast } from "react-hot-toast";
import { cookieKeys } from "../config/cookieKeys";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuth";

interface AxiosInterceptorProps {
  children: React.ReactNode;
}

interface BackendError {
  message: string;
}

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  const { signOut } = useAuthContext();

  useEffect(() => {
    const reqSuccessInterceptor = (config: InternalAxiosRequestConfig) => {
      const token = getCookie(cookieKeys.ACCESS_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    };
    const reqErrorInterceptor = (error: unknown) => {
      return Promise.reject(error);
    };

    const resSuccessInterceptor = (response: AxiosResponse) => response;
    const resErrorInterceptor = (error: AxiosError<BackendError>) => {
      const response = error?.response;
      let errorMessage = "An error occurred. Please try again.";

      if (response?.data?.message) {
        errorMessage = response.data.message;
      }

      if (response?.status && [401, 403].includes(response?.status)) {
        signOut();
      }

      toast.error(errorMessage);

      return Promise.reject(error);
    };

    const reqInterceptor = httpClient.interceptors.request.use(
      reqSuccessInterceptor,
      reqErrorInterceptor,
    );
    const resInterceptor = httpClient.interceptors.response.use(
      resSuccessInterceptor,
      resErrorInterceptor,
    );

    return () => {
      httpClient.interceptors.request.eject(reqInterceptor);
      httpClient.interceptors.request.eject(resInterceptor);
    };
  }, [signOut]);
  return children;
};
