import axios from 'axios';

// 1. SET YOUR BACKEND URL
// Replace this string with your exact Render Backend URL
// IMPORTANT: Do not put a slash (/) at the very end
const BASE_URL = 'https://ascleplus-backend.onrender.com/api';

// 2. CREATE THE AXIOS INSTANCE
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 3. HELPER TO ATTACH TOKEN
// We call this function whenever the user logs in or refreshes
export const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    api.defaults.headers.common['x-auth-token'] = token;
    // Also save to localStorage so it persists on refresh
    localStorage.setItem('token', token);
  } else {
    // Delete header
    delete api.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};