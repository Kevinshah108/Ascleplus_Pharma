// src/api.js
import axios from 'axios';

// This points to your backend server.
// If your backend runs on port 5000, keep it as is.
const API_URL = 'http://localhost:5000/api'; 

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;