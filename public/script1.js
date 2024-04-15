
let questionIndex = 0;
let questions = [];
let score = 0;
const correctSound = new Audio('./audio/correct.mp3');
const incorrectSound = new Audio('./audio/incorrect.mp3');
const startButton = document.getElementById('start-btn');
const rules = document.getElementById('rules');
const questionContainer = document.getElementById('questionContainer');
const username = localStorage.getItem('username');
const body = document.querySelector('body');
let correctAnswerh = 0;
let wrongAnswerh = 0;
let User = localStorage.getItem('username');

startButton.addEventListener('click', () => {
  startButton.classList.add('hide');
  rules.classList.remove('active');
  rules.style.display = 'none';
  questionContainer.classList.add('active');
  questionContainer.style.display = 'none';
  // Display loading animation
  const loadingAnimation = document.createElement('div');
  loadingAnimation.innerHTML = `
    <div class="loader">
      <div class="upper ball"></div>
      <div class="right ball"></div>
      <div class="lower ball"></div>
      <div class="left ball"></div>
    </div>
  `;
  body.appendChild(loadingAnimation);
  
  // Fetch questions and render them
  fetchQuestionsBatch()
    .then(() => {
      body.removeChild(loadingAnimation);
      questionContainer.style.display = 'flex';
      renderMultipleChoiceQuestion(questions[questionIndex]);
    })
    .catch(error => {
      body.removeChild(loadingAnimation);
      console.error('Error fetching questions:', error);
    });
});


// Function to make an API request and fetch a batch of questions
async function fetchQuestionsBatch() {
  const apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json({ encoding: 'utf-8' });

    if (data.results.length > 0) {
      questions = data.results.map(question => {
        // Decode HTML entities in the question and answer options
        question.question = decodeEntities(question.question);
        question.correct_answer = decodeEntities(question.correct_answer);
        question.incorrect_answers = question.incorrect_answers.map(answer => decodeEntities(answer));
        return question;
      });
    } else {
      console.error('No questions received from the API.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to decode HTML entities
function decodeEntities(text) {
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'"
  };
  return text.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, match => entities[match]);
}

// Function to render a multiple-choice question
function renderMultipleChoiceQuestion(question) {
  const questionContainer = document.getElementById('questionContainer');

  // Clear previous question
  questionContainer.innerHTML = '';

  // Display question
  const questionElement = document.createElement('h1');
  questionElement.textContent = question.question;
  questionContainer.appendChild(questionElement);

  // Display answer options
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'options';
  optionsContainer.addclass = 'choices';

  const allOptions = [...question.incorrect_answers, question.correct_answer];
  shuffleOptions(allOptions);

  allOptions.forEach((option, index) => {
    const optionContainer = document.createElement('div');
    optionContainer.id = `option-${index + 1}`;
    optionContainer.className = 'choices';

    const optionCircle = document.createElement('div');
    optionCircle.className = 'option-circle';
    optionContainer.appendChild(optionCircle);

    const optionNumber = document.createElement('h2');
    optionNumber.textContent = `${String.fromCharCode(65 + index)}. `;
    optionCircle.appendChild(optionNumber);

    const optionText = document.createElement('h3');
    optionText.textContent = option;
    optionContainer.appendChild(optionText);

    optionContainer.addEventListener('click', () => handleOptionClick(optionText.textContent, question.correct_answer));

    optionsContainer.appendChild(optionContainer);
  });

  questionContainer.appendChild(optionsContainer);

  // Append the buttons
  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'btns';

  const nextButton = document.createElement('button');
  nextButton.id = 'next-btn';
  nextButton.textContent = 'Next Question';
  buttonsContainer.appendChild(nextButton);
  if(questionIndex === questions.length - 1) {
    nextButton.style.display = 'none';
  }
  nextButton.addEventListener('click', () => {
    if(questionIndex !== questions.length - 1) {
    questionIndex += 1;
    renderMultipleChoiceQuestion(questions[questionIndex]);
    }
  }); 

  const finishButton = document.createElement('button');
  finishButton.id = 'finish-btn';
  finishButton.textContent = 'Finish Quiz';
  buttonsContainer.appendChild(finishButton);

  finishButton.addEventListener('click', () => {
    currentScore = score;
    postDataTrivia();
    swal({
      title: "Quiz Finished!",
      text: `You scored ${score} out of ${questions.length}`,
      icon: "success",
      button: "OK",
    }).then(() => {
      displayResult();
    });
  });

  questionContainer.appendChild(buttonsContainer);
}

// Function to shuffle an array of elements
function shuffleOptions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to handle option click (customize this based on your needs)
function handleOptionClick(selectedOption, correctAnswer) {

  let optionz = document.querySelectorAll('.options h3');
  let choicez = document.querySelectorAll('.choices');
  let optionNumber = document.querySelectorAll('.option-circle h2');
  for(let i = 0; i < optionz.length; i++) {
    if(optionz[i].textContent === correctAnswer) {
      optionz[i].style.borderColor = 'green';
      optionz[i].style.color = 'green';
      optionNumber[i].style.borderColor = 'green';
      optionNumber[i].style.color = 'green';
      choicez[i].style.borderColor = 'green';
    }else{
      optionz[i].style.borderColor = 'red';
      optionz[i].style.color = 'red';
      optionNumber[i].style.borderColor = 'red';
      optionNumber[i].style.color = 'red';
      choicez[i].style.borderColor = 'red';
    }
  }

  if (selectedOption === correctAnswer) {
    correctAnswerh++;
    score += 1;
    correctSound.play();
  }
  else {
    incorrectSound.play();
    wrongAnswerh++;
  }
}

  // Move to the next question
async function postDataTrivia() {
  try {
    // Ensure that username and currentScore are defined
    if (!currentScore) {
      console.error('Error: username and currentScore are required.');
      return;
    }

    const response = await fetch('http://localhost:3000/api/storescore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ playerName: User, score: currentScore, type: 'trivia' }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

var startTime = new Date();

// End time when the user completes the quiz
var endTime = new Date();

// Calculate duration in milliseconds
var duration = endTime - startTime;

// Convert duration to seconds
var durationInSeconds = duration / 1000;

console.log("User spent " + durationInSeconds + " seconds on the quiz.");

function displayResult() {
  questionContainer.style.display = 'none';
  document.querySelector('.result-container').classList.add('active');
  document.querySelector('.result-container').style.display = 'block';
  const timetaken = document.getElementById('time-taken');
  timetaken.textContent = `${duration} seconds`;
  const totalQuestions = document.getElementById('total-questions');
  totalQuestions.textContent = `${correctAnswerh + wrongAnswerh}/10`;
  const correctAnswershh = document.getElementById('correct-answers');
  correctAnswershh.textContent = `${correctAnswerh}/10`;
  const wrongAnswershh = document.getElementById('wrong-answers');
  wrongAnswershh.textContent = `${wrongAnswerh}/10`;

  const percentage = (correctAnswerh + wrongAnswerh) / 10 * 100;
  const correctPercentage = (correctAnswerh / 10) * 100;
  const wrongPercentage = (wrongAnswerh / 10) * 100;

  const progressbarq = document.querySelector('.progress-bar-q');
  const progressbarc = document.querySelector('.progress-bar-c');
  const progressbarw = document.querySelector('.progress-bar-w');

  progressbarq.style.width = `${percentage}%`;
  progressbarc.style.width = `${correctPercentage}%`;
  progressbarw.style.width = `${wrongPercentage}%`;
  
}