function Quiz() {
    this.questionIndex = 0;
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

Quiz.prototype.nextQuestion = function() {
  if (this.questionIndex <= 3) {
    return(this._questions[this.questionIndex])
  }
}

Quiz.prototype.checkAnswer = function(userAnswer) {
  var question = this._questions[this.questionIndex]
  this.questionIndex += 1;
  if(userAnswer == question.answer) {
    this._score += 1;
    return { outcome: 'correct' }
  } else {
    return { outcome: 'incorrect', correctAnswer: question.answer }
  }
}
