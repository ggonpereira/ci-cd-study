import { httpClient } from "../httpClient";

export interface MeResponse {
  name: string;
  email: string;
}

export const me = async () => {
  const { data } = await httpClient.get<MeResponse>("/users/me");

  return data;
};
