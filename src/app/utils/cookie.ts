import Cookies from "js-cookie";

export const setCookie = (tokenName: string, token: string, expDate = 7) => {
  Cookies.set(tokenName, token, { expires: expDate });
};

export const destroyCookie = (tokenName: string) => {
  Cookies.remove(tokenName);
};

export const getCookie = (tokenName: string) => {
  return Cookies.get(tokenName);
};
