window.onload = function() {
  var quiz = new Quiz();
  var view = new View();
  var quizController = new QuizController(quiz, view);
  quizController.setup();
}
