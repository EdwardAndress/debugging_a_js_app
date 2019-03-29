window.onload = function() {
  var quiz = new Quiz();
  var view = new View();
  var quizController = new QuizController(quiz, view);
  var form = document.getElementById('form');

  quizController.showQuestion();
  quizController.addSubmitListener(form);
}
