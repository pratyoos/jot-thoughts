import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.BACKEND_URL || 'https://jot-thoughts-backend.onrender.com/api',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;