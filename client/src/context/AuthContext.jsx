import React, { createContext, useState, useEffect, useContext } from 'react';
import { api, setAuthToken } from '../api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const storedToken = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user_data');
  
  if (storedToken && storedUser) {
    setAuthToken(storedToken); // Restore the token header
    setUser(JSON.parse(storedUser));
  }
  setLoading(false);
}, []);

  const signup = async (name, email, password) => {
  try {
    // NOTICE: We just write '/auth/signup'. 
    // The 'api' tool automatically adds 'https://.../api' to the front.
    const res = await api.post('/auth/signup', { name, email, password });
    
    // If successful, save token
    setAuthToken(res.data.token);
    setUser(res.data.user);
    return true;
  } catch (err) {
    console.error(err.response?.data?.msg || "Signup failed");
    alert(err.response?.data?.msg || "Signup failed");
    return false;
  }
};

  const login = async (email, password) => {
  try {
    const res = await api.post('/auth/login', { email, password });
    
    setAuthToken(res.data.token);
    setUser(res.data.user);
    
    // Check if user has saved data (for cart/profile)
    if(res.data.user) {
        localStorage.setItem('user_data', JSON.stringify(res.data.user));
    }

    return { success: true };
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.msg || "Invalid Credentials");
    return { success: false };
  }
};

  // --- DELETE ACCOUNT FUNCTION (NEW) ---
  // Inside AuthProvider...

const deleteAccount = async () => {
  try {
    // FIX: Get the latest token directly from storage to avoid bugs
    const currentToken = localStorage.getItem('token');

    if (!currentToken) {
      alert("No active session found. Please login again.");
      return false;
    }

    // Inside deleteAccount function
const deleteAccount = async () => {
    try {
      // The 'api' instance already has the token in the headers!
      // No need to manually grab it from localStorage anymore.
      await api.delete('/auth/delete');

      // If successful, log the user out locally
      logout(); 
      return true;

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "Failed to delete account");
      return false;
    }
  };

  const logout = () => {
    setAuthToken(null); // Removes token from API headers & LocalStorage
    setUser(null);
    localStorage.removeItem('user_data');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, deleteAccount, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};