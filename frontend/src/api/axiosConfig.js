import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Backend server base URL
});

// Automatically attach token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
