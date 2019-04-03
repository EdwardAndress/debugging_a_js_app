function View() {
  this.questionBox = document.getElementById('question-text');
  this.submitButton = document.getElementById('submit');
  this.feedbackBox = document.getElementById('feedback')
  this.scoreContainerH = document.getElementById('scoreContainerH')
  this.scoreBox = document.getElementById('score')
  this.input = document.getElementById('answer')
  this.form = document.getElementById('form');
};

View.prototype.updateScore = function(score) {
   this.scoreBox.innerText =  score
}

View.prototype.getAnswer = function() {
  return this.input.value.toLowerCase().trim()
}

View.prototype.showPreviousOutcome = function(object) {
  if(object.outcome == undefined) {
    this.feedbackBox.innerText = ""
  } else if(object.outcome.match(/incorrect/)) {
    this.feedbackBox.innerText = "INCORRECT!!  The answer to the last question was " + object.correctAnswer
  } else if(object.outcome.match(/correct/)) {
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

View.prototype.showQuestion = function(question) {
  this.questionBox.innerText = question.text;
}

View.prototype.endGame = function() {
  this.clearInput()
  this.updateScoreContainerH()
  this.submitButton.remove()
}

View.prototype.render = function(quiz) {
  this.updateScore(quiz.score)
  this.showPreviousOutcome(quiz.previousOutcome)
  this.clearInput()
  this.showQuestion(quiz.currentQuestion())

  if(quiz.gameOver) {
    this.endGame()
  }
}
