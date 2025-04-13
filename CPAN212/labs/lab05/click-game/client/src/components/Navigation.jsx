import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({ user, logout }) {
  return (
    <nav className="main-nav">
      <div className="nav-brand">Click Game</div>
      <div className="nav-links">
        {user ? (
          <>
            <span className="nav-user">Hi, {user.username}</span>
            <button onClick={logout} className="nav-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}