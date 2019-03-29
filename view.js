function View() {
  this.questionBox = document.getElementById('question-text');
  this.submitButton = document.getElementById('submit');
  this.feedbackBox = document.getElementById('feedback')
  this.scoreContainerH = document.getElementById('scoreContainerH')
  this.scoreBox = document.getElementById('score')
  this.input = document.getElementById('answer')
};

View.prototype.updateScore = function(score) {
   this.scoreBox.innerText =  score
}

View.prototype.getAnswer = function() {
  return this.input.value.toLowerCase().trim()
}

View.prototype.showFeedback = function(feedback) {
  if(feedback.outcome.match(/incorrect/)) {
    this.feedbackBox.innerText = "INCORRECT!!  The answer to the last question was " + feedback.correctAnswer
  } else if(feedback.outcome.match(/correct/)) {
    this.feedbackBox.innerText = "CORRECT!!"
  } else {
    console.error('INVALID OUTCOME');
  }
}

View.prototype.clearInput = function() {
  this.input.value = ""
}

View.prototype.updateScoreContainerH = function() {
  this.scoreContainerH.innerText = "Final score"
}

View.prototype.showQuestion = function(questionText) {
  this.questionBox.innerText = questionText;
}

View.prototype.endGame = function() {
  this.clearInput()
  this.updateScoreContainerH()
  this.submitButton.remove()
}

View.prototype.update = function(object) {
  if(object.score) {
    this.updateScore(object.score)
  }

  if(object.feedback) {
    this.showFeedback(object.feedback)
  }

  if(object.nextQuestion) {
    this.showQuestion(object.nextQuestion)
  }

  if(object.endGame) {
    this.endGame()
  }

  if(object.clearInput) {
    this.clearInput()
  }

  if(object.question) {
    this.showQuestion(object.question)
  }
}
