import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';


export default function App() {
  const { user, login, logout, setUser } = useAuth();
  const [highScore, setHighScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      if (user === null) {
        setLoading(false);
      }
    };
    verifyAuth();
  }, [user]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <div className="app-container">
        <Navigation user={user} logout={logout} />
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home user={user} setHighScore={setHighScore} />}
            />
            <Route
              path="/login"
              element={<Login login={login} setUser={setUser} />}
            />
            <Route
              path="/register"
              element={<Register setUser={setUser} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}