import { setToken as setAxiosToken } from '../axios/axios';

export const login = (token: string) => {
  localStorage.setItem('token', token);
  setAxiosToken(token);
};

export const logout = () => {
  localStorage.removeItem('token');
  setAxiosToken(null);
};
