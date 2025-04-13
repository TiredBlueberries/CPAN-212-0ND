const express = require('express');
const router = express.Router();
const { 
  updateHighScore, 
  getLeaderboard 
} = require('../controllers/gameController');
const auth = require('../middlewares/auth');

router.post('/score', auth, updateHighScore);

router.get('/leaderboard', getLeaderboard);

module.exports = router;