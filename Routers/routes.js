import { Router } from 'express';
import Scoreboard from './../Models/mongoose'; // Define your Mongoose model
import mongoose from 'mongoose';

const router = Router();

// POST route to store data
router.post('/api/postdata', async (req, res) => {
  try {
    await Scoreboard.create({
      playerName: req.body.playerName,
      score: req.body.score
    });

    res.json({ success: true, message: 'Data stored successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export default router;
