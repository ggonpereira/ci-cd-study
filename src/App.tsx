import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Router } from "./Router";
import { AuthProvider } from "./app/contexts/AuthContext";
import { AxiosInterceptor } from "./app/services/httpClient";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AxiosInterceptor>
          <Router />
          <Toaster />
        </AxiosInterceptor>
      </AuthProvider>
    </QueryClientProvider>
  );
};
