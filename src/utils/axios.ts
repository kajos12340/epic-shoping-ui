import axios from 'axios';

export const setupAxiosBaseUrl = (url: string = '') => {
  axios.defaults.baseURL = url;
};

export const setToken = (token: string | null) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};
