import { createContext, useCallback, useEffect, useState } from "react";
import { destroyCookie, getCookie, setCookie } from "../utils/cookie";
import { cookieKeys } from "../config/cookieKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/usersService";
import { toast } from "react-hot-toast";
import { PageLoader } from "../../view/components/PageLoader";
import { MeResponse } from "../services/usersService/me";

interface AuthContextValue {
  signedIn: boolean;
  signIn: (accessToken: string) => void;
  signOut: () => void;
  user?: MeResponse;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue,
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [signedIn, setSignedIn] = useState(() => {
    const token = getCookie(cookieKeys.ACCESS_TOKEN);

    return !!token;
  });

  const { isError, isSuccess, data, isFetching } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signIn = useCallback((accessToken: string) => {
    if (!accessToken) return;

    setCookie(cookieKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  const signOut = useCallback(() => {
    destroyCookie(cookieKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("You session has expired. Please sign in again.");
      signOut();
    }
  }, [isError, signOut]);

  if (isFetching) {
    return <PageLoader />;
  }

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        signIn,
        user: data,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
