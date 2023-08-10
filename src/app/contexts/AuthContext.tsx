import { createContext, useCallback, useEffect, useState } from "react";
import { destroyCookie, getCookie, setCookie } from "../utils/cookie";
import { cookieKeys } from "../config/cookieKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/usersService";
import { toast } from "react-hot-toast";

interface AuthContextValue {
  signedIn: boolean;
  signIn: (accessToken: string) => void;
  signOut: () => void;
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

  const { isError } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => usersService.me(),
    enabled: signedIn,
  });

  const signIn = useCallback((accessToken: string) => {
    if (!accessToken) return;

    setCookie(cookieKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  const signOut = useCallback(() => {
    console.info("hey");
    destroyCookie(cookieKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("You session has expired. Please sign in again.");
      signOut();
    }
  }, [isError, signOut]);

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
