function QuizController(quiz, view) {
  this.quiz = quiz;
  this.view = view;
};

QuizController.prototype.setup = function() {
  this.showQuestion();
  this.addSubmitListener(this.view.form);
}

QuizController.prototype.showQuestion = function() {
  question = this.quiz.nextQuestion()
  this.view.update({ question: question });
}

QuizController.prototype.proceed = function() {
  this.view.update({ clearInput: true });

  if (this.quiz.nextQuestion()) {
    this.showQuestion()
  } else {
    this.view.update({ endGame: true, score: this.quiz._score })
  }
}

QuizController.prototype.checkAnswer = function(userAnswer) {
  var feedback = this.quiz.checkAnswer(userAnswer)

  if (feedback.outcome == 'correct') {
    this.view.update({ score: this.quiz._score });
  }

  this.view.update({ feedback: feedback })
}

QuizController.prototype.addSubmitListener = function(form) {
  var that = this;
  var submitAnswer = function(event) {
    event.preventDefault();

    answer = that.view.getAnswer();

    if (answer) {
      that.checkAnswer(answer)
      that.proceed()
    }
  }

  form.addEventListener('submit', submitAnswer)
}
