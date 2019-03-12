function Quiz() {
    this._score = 0
    this._questions = [
      { text: "Complete the British Value:\nThe Rule of ...", answer: "law" },
      {
        text: "Which of the following is a Brtish Value?\n" +
              "1. Fish and Chips\n" +
              "2. Democracy\n" +
              "3. Football\n" +
              "4. Sovereignty\n",
        answer: "democracy"
      },
      { text: "Complete the British Value:\n... Liberty", answer: "individual" },
      { text: "How many British Values are there?", answer: "4" }
    ]
};

Quiz.prototype.correctAnswer = function() {
  quiz.updateScore();
  quiz.giveFeedback(true)
}

Quiz.prototype.updateScore = function(final = false) {
  scoreBox = document.getElementById('score')
  if (final) {
    scoreBox.innerText = "Final score: " + this._score
  } else {
    this._score +=1
    scoreBox.innerText = "Current score: " + this._score
  }
}

Quiz.prototype.showQuestion = function(questionIndex) {
  if (questionIndex <= 3) {
    this.ask(quiz._questions[questionIndex].text)
  } else {
    this.updateScore(true)
    submitButton = document.getElementById('submit')
    submitButton.remove()
  }
}

Quiz.prototype.checkAnswer = function(userAnswer, questionIndex) {
  var question = this._questions[questionIndex]

  if (userAnswer.toLowerCase().trim() == question.answer) {
    this.correctAnswer();
  } else {
    this.incorrectAnswer(question.answer)
  }
}

Quiz.prototype.incorrectAnswer = function(correctAnswer) {
  quiz.giveFeedback(false, correctAnswer)
}

Quiz.prototype.giveFeedback = function(bool, correctAnswer = null) {
  var feedbackBox = document.getElementById('feedback')

  if (bool) {
    feedbackBox.innerText = "CORRECT!!"
  } else {
    feedbackBox.innerText = "INCORRECT!!  The answer to the last question was " + correctAnswer.toUpperCase()
  }
}

Quiz.prototype.finalScore = function() {
  console.log("Your final score is: " + this._score);
}

Quiz.prototype.ask = function(questionText) {
  questionBox = document.getElementById('question-text');
  questionBox.innerText = questionText;
}
