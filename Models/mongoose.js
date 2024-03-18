const mongoose = require('mongoose');

const scoreboardSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

const Scoreboard = mongoose.model('Scoreboard', scoreboardSchema);

export default Scoreboard;