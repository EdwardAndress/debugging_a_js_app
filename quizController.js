function QuizController(quiz, view) {
  this.quiz = quiz;
  this.view = view;
};

QuizController.prototype.showQuestion = function(questionText) {
  if(!questionText) {
    questionText = this.quiz.nextQuestion().text
  }

  this.view.update({ question: questionText });
}

QuizController.prototype.proceed = function() {
  this.view.update({ clearInput: true });
  question = this.quiz.nextQuestion()
  if (question) {
    this.showQuestion(question.text)
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
