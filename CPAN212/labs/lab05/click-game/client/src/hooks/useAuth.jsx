import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      
      try {
        const res = await axios.get('/api/auth/verify', {
          headers: { 'x-auth-token': token }
        });
        setUser(res.data);
      } catch (err) {
        localStorage.removeItem('token');
      }
    };
    verifyToken();
  }, []);

  const login = async (username, password) => {
    try {
      const res = await axios.post('/api/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      setUser({ username: res.data.username, highScore: res.data.highScore });
    } catch (err) {
      throw err;
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('token');
      setUser(null);
    }
  };

  return { user, login, logout, setUser };
}