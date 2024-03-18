// server/index.js

import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/db.js';
import cors from 'cors';


const app = express();
app.use(cors());

const __dirname = process.cwd();

app.use(express.static(__dirname + '/public'));

app.get('/', (_, res) => {
    res.render('index.html');
});

app.get('/trivia', (_, res) => {
  res.sendFile(__dirname + '/public/trivia.html');
});

app.get('/pokemon', (_, res) => {
  res.sendFile(__dirname + '/public/pokemon.html');
});


// Define mongoose schema and models, handle routes, etc.

// Start the server
const URL = 'mongodb+srv://admin:mongoDB@quizapp.7wkctzy.mongodb.net/QuizApp?retryWrites=true&w=majority'
const port = process.env.PORT || 3000
const start = async ()=>{
  try {
      await connectDB(URL)
      app.listen(port,  console.log('Connected to database and server has started'))
  } catch (error) {
      console.log(error)
  }
}

start()