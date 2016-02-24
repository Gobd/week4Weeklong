angular.module('quizApp').controller('quizCtrl', function ($scope, quizService, $stateParams) {

  $scope.questions = quizService.getQuestions()[$stateParams.quizName].questions;
  $scope.answers = {};
  $scope.currentQuestion = $scope.questions[0];
  $scope.question = $scope.currentQuestion;

  $scope.setCurrentQuestion = function (question) {
    $scope.currentQuestion = question;
  };

  $scope.nextQuestion = function () {
    var idx = $scope.questions.indexOf($scope.currentQuestion);
    if ($scope.questions[idx + 1]) {
      $scope.currentQuestion = $scope.questions[idx + 1];
    } else {
      return;
    }
  };

  $scope.checkMyAnswers = function (questions, answers) {
    quizService.checkMyAnswers(questions, answers).then(function (response) {
      $scope.results = response;
    });
  };

  $scope.isDisabled = true;

$scope.update = function(choice){
  $scope.choice = choice;
  $scope.isDisabled = false;
};

  $scope.saveAnswer = function (ans) {
    $scope.answers[$scope.currentQuestion.id] = ans;
    $scope.nextQuestion();
    $scope.isDisabled = true;
  };

  $scope.reset = function () {
    $scope.answers = {};
    $scope.currentQuestion = $scope.questions[0];
  };


});
