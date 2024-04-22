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

const userSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true,
      unique: true
  },
  password: {
      type: String,
      required: true,
      minlength: 8
  }
});

const Scoreboard = mongoose.model('Scoreboard', scoreboardSchema);
const User = mongoose.model('User', userSchema)

export { Scoreboard, User };