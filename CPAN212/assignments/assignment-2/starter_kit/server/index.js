const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const recipeRouter = require('./routes/recipes_router');

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/recipeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/recipe', recipeRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});