function QuizController(quiz, view) {
  this.quiz = quiz;
  this.view = view;
};

QuizController.prototype.showQuestion = function(questionText) {
  if(!questionText) {
    questionText = this.quiz.nextQuestion().text
  }

  this.view.showQuestion(questionText);
}

QuizController.prototype.proceed = function() {
  this.view.clearInput();
  question = this.quiz.nextQuestion()
  if (question) {
    this.showQuestion(question.text)
  } else {
    this.view.updateScore(this.quiz._score, true)
    this.view.endGame();
  }
}

QuizController.prototype.showFeedback = function(userAnswer) {
  var feedback = this.quiz.checkAnswer(userAnswer)

  if (feedback.outcome == 'correct') {
    this.view.updateScore(this.quiz._score);
  }

  this.view.showFeedback(feedback)
}

QuizController.prototype.addSubmitListener = function(form) {
  var controller = this;
  var submitAnswer = function(event) {
    event.preventDefault();

    answer = controller.view.getAnswer();

    if (answer) {
      controller.showFeedback(answer)
      controller.proceed()
    }
  }

  form.addEventListener('submit', submitAnswer)
}
