var questionIndex;
var quiz;

window.onload = function() {
  questionIndex = 0;
  quiz = new Quiz();
  quiz.showQuestion(questionIndex)
}

submitAnswer = function(event) {
  event.preventDefault();

  answerInput = document.getElementById('answer')
  answer = answerInput.value

  if (answer) {
    quiz.checkAnswer(answer, questionIndex)
    proceed()
  }
}

proceed = function() {
  questionIndex += 1
  answerInput.value = ""
  quiz.showQuestion(questionIndex)
}
