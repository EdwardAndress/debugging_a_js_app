var quizController;

window.onload = function() {
  quizController = new QuizController()
  form = document.getElementById('form')
  form.addEventListener('submit', submitAnswer)
  quizController.showQuestion()
}

var submitAnswer = function(event) {
  event.preventDefault();

  answerInput = document.getElementById('answer')
  answer = answerInput.value.toLowerCase().trim()

  if (answer) {
    quizController.showFeedback(answer)
    quizController.proceed()
  }
}
