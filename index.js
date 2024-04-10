// server/index.js

import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/db.js';
import cors from 'cors';
import routes from './Routers/routes.js';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json())
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

app.get('/leaderboard', (_, res) => {
  res.sendFile(__dirname + '/public/leaderboard.html');
});

app.get('/about', (_, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (_, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.get('/login', (_, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/signup', (_, res) => {
  res.sendFile(__dirname + '/public/signup.html');
});

app.use("/api",routes)

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

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