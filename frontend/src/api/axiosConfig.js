import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend server URL if different
});

// Add a request interceptor to attach the token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
