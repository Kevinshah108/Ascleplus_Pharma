import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user_data');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const signup = async (name, email, password) => {
    try {
      const res = await fetch('https://ascleplus-backend.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.msg || 'Signup failed');
        return false;
      }
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      const res = await fetch('https://ascleplus-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.msg || 'Invalid Credentials');
        return { success: false };
      }
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_data', JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);
      return { success: true, user: data.user };
    } catch (err) {
      console.error(err);
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
const res = await fetch('https://ascleplus-backend.onrender.com/api/auth/delete', { // Check port 5000
  method: 'DELETE',
  headers: { 
    'Content-Type': 'application/json',
    'x-auth-token': currentToken 
  }
});

    // If server rejects it (e.g. 401 Unauthorized or 500 Error)
    if (!res.ok) {
      const errorData = await res.json();
      console.error("Delete Failed:", errorData);
      alert(errorData.msg || "Server rejected the delete request");
      return false;
    }

    // Success
    logout(); 
    return true;

  } catch (err) {
    console.error("Network Error:", err);
    alert("Could not connect to server");
    return false;
  }
};

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, deleteAccount, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};