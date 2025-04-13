import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home({ user, setHighScore }) {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setGameActive(false);
            submitScore();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameActive, timeLeft]);

  const handleClick = () => {
    if (gameActive) setScore(prev => prev + 1);
  };

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(10);
  };

  const submitScore = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/game/score`,
        { score },
        { headers: { 'x-auth-token': token } }
      );

      if (res.data.highScore !== undefined) {
        setHighScore(res.data.highScore);
        console.log('New high score:', res.data.highScore);
      }
      
    } catch (err) {
      console.error('Score submission failed:', err.response?.data || err.message);
    }
  };

  return (
    <div className="game-container">
      <h1>Click Game!</h1>
      <div className="stats">
        <p>High Score: {user?.highScore || 0}</p>
        <p>Time Left: {timeLeft}s</p>
        <p>Clicks: {score}</p>
      </div>
      <button
        onClick={startGame}
        disabled={gameActive}
        className="start-button"
      >
        {gameActive ? 'Game Running...' : 'Start New Game'}
      </button>
      <button
        onClick={handleClick}
        disabled={!gameActive}
        className="click-button"
      >
        CLICK ME!
      </button>
    </div>
  );
}