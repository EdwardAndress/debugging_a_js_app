function QuizController() {
  this.quiz = new Quiz();
};

QuizController.prototype.questionBox = function() {
  return document.getElementById('question-text');
}

QuizController.prototype.submitButton = function() {
  return document.getElementById('submit')
}

QuizController.prototype.feedbackBox = function() {
  return document.getElementById('feedback')
}

QuizController.prototype.scoreBox = function() {
  return document.getElementById('score')
}

QuizController.prototype.showQuestion = function(questionText) {

  if(!questionText) {
    questionText = this.quiz.nextQuestion().text
  }

  this.questionBox().innerText = questionText;
}

QuizController.prototype.proceed = function() {
  answerInput.value = ""
  question = this.quiz.nextQuestion()
  if (question) {
    this.showQuestion(question.text)
  } else {
    this.updateScore(true)
    this.submitButton().remove()
  }
}

QuizController.prototype.showFeedback = function(userAnswer) {
  var feedback = this.quiz.checkAnswer(userAnswer)

  if (feedback.outcome == 'correct') {
    this.feedbackBox().innerText = "CORRECT!!"
    this.updateScore();
  } else {
    this.feedbackBox().innerText = "INCORRECT!!  The answer to the last question was " + feedback.correctAnswer
  }
}

 QuizController.prototype.updateScore = function(final = false) {
  if (final) {
    this.scoreBox().innerText = "Final score: " + this.quiz._score
  } else {
    this.scoreBox().innerText = "Current score: " + this.quiz._score
  }
}
