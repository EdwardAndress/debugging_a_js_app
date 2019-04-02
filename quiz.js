function Quiz() {
    this.previousOutcome = {};
    this._questionIndex = 0;
    this.gameOver = false;
    this.score = 0
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

Quiz.prototype.nextQuestion = function() {
  if (this._questionIndex <= 3) {
    return(this._questions[this._questionIndex])
  } else {
    this.gameOver = true
    return({text: "Game over"})
  }
}

Quiz.prototype.checkAnswer = function(userAnswer) {
  var question = this._questions[this._questionIndex]
  this._questionIndex += 1;
  if(userAnswer == question.answer) {
    this.score += 1;
    this.previousOutcome = { outcome: 'correct' }
  } else {
    this.previousOutcome = { outcome: 'incorrect', correctAnswer: question.answer }
  }
}
