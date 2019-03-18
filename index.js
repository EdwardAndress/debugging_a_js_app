var quiz;

window.onload = function() {
  form = document.getElementById('form')
  form.addEventListener('submit', submitAnswer)
  quiz = new Quiz();
  showQuestion(quiz.nextQuestion())
}

var submitAnswer = function(event) {
  event.preventDefault();

  answerInput = document.getElementById('answer')
  answer = answerInput.value.toLowerCase().trim()

  if (answer) {
    showFeedback(answer)
    proceed()
  }
}

var showFeedback = function(userAnswer) {
  var feedbackBox = document.getElementById('feedback')

  if (quiz.checkAnswer(userAnswer)) {
    feedbackBox.innerText = "CORRECT!!"
    updateScore();
  } else {
    feedbackBox.innerText = "INCORRECT!!  The answer to the last question was " // + correctAnswer.toUpperCase()
  }
}

 var updateScore = function(final = false) {
  scoreBox = document.getElementById('score')
  if (final) {
    scoreBox.innerText = "Final score: " + quiz._score
  } else {
    scoreBox.innerText = "Current score: " + quiz._score
  }
}

var proceed = function() {
  answerInput.value = ""
  question = quiz.nextQuestion()
  if (question) {
    showQuestion(quiz.nextQuestion())
  } else {
    updateScore(true)
    submitButton = document.getElementById('submit')
    submitButton.remove()
  }
}

var showQuestion = function(questionText) {
  questionBox = document.getElementById('question-text');
  questionBox.innerText = questionText;
}
