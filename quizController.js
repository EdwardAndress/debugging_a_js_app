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
  this.view.render(this.quiz);
}

QuizController.prototype.checkAnswer = function(userAnswer) {
  this.quiz.checkAnswer(userAnswer)
  this.view.render(this.quiz)
}

QuizController.prototype.addSubmitListener = function(form) {
  var that = this;
  var submitAnswer = function(event) {
    event.preventDefault();

    answer = that.view.getAnswer();

    if (answer) {
      that.checkAnswer(answer)
    }
  }

  form.addEventListener('submit', submitAnswer)
}
