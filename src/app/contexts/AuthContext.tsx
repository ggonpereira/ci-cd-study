import { useQuery } from "@tanstack/react-query";
import { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { LaunchScreen } from "../../view/components/LaunchScreen";
import { cookieKeys } from "../config/cookieKeys";
import { usersService } from "../services/usersService";
import { MeResponse } from "../services/usersService/me";
import { destroyCookie, getCookie, setCookie } from "../utils/cookie";

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

  const { isError, isSuccess, data, isFetching, remove } = useQuery({
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
    remove();
  }, [remove]);

  useEffect(() => {
    if (isError) {
      toast.error("You session has expired. Please sign in again.");
      signOut();
    }
  }, [isError, signOut]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        signIn,
        user: data,
        signOut,
      }}
    >
      <LaunchScreen isLoading={isFetching} />

      {!isFetching && children}
    </AuthContext.Provider>
  );
};
