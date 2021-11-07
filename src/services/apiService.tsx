import {API_URL} from '@/constants';
import {store} from '@/store';
import axios from 'axios';

const apiService = axios.create({
  baseURL: API_URL,
});

apiService.interceptors.request.use(
  (config: any) => {
    const {token} = store.getState();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  },
);

export {apiService};
