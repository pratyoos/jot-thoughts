import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3050/api/',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // if using cookies, else false
});

export default axiosClient;
