import mongoose from 'mongoose';

const scoreboardSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

const Scoreboard = mongoose.model('Scoreboard', scoreboardSchema);

// ../Models/mongoose.js

export { Scoreboard };