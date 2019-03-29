function View() {
  this.questionBox = document.getElementById('question-text');
  this.submitButton = document.getElementById('submit');
  this.feedbackBox = document.getElementById('feedback')
  this.scoreBox = document.getElementById('score')
  this.input = document.getElementById('answer')
};

View.prototype.updateScore = function(score, final = false) {
 if (final) {
   this.scoreBox.innerText = "Final score: " + score
 } else {
   this.scoreBox.innerText = "Current score: " + score
 }
}

View.prototype.getAnswer = function() {
  return this.input.value.toLowerCase().trim()
}

View.prototype.showFeedback = function(feedback) {
  if(feedback.outcome.match(/correct/)) {
    this.feedbackBox.innerText = "CORRECT!!"
  } else if(feedback.outcome.match(/incorrect/)) {
    this.feedbackBox.innerText = "INCORRECT!!  The answer to the last question was " + feedback.correctAnswer
  } else {
    console.error('INVALID OUTCOME');
  }
}

View.prototype.clearInput = function() {
  this.input.value = ""
}

View.prototype.showQuestion = function(questionText) {
  this.questionBox.innerText = questionText;
}

View.prototype.endGame = function() {
  this.submitButton.remove()
}
