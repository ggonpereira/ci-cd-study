import { httpClient } from "../httpClient";

export interface SignInParams {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
}

export const signIn = async (params: SignInParams) => {
  const { data } = await httpClient.post<SignInResponse>(
    "/auth/sign-in",
    params,
  );

  return data;
};
