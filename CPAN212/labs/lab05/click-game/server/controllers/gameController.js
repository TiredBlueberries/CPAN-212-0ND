const User = require('../models/User');

exports.updateHighScore = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (req.body.score > user.highScore) {
      user.highScore = req.body.score;
      await user.save();
    }
    res.json({ highScore: user.highScore });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find()
      .sort({ highScore: -1 })
      .limit(10)
      .select('username highScore -_id');
    res.json(users);
  } catch (err) {
    console.error('Leaderboard error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};