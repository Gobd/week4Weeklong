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

  $scope.checkMyAnswers = function () {
    quizService.checkMyAnswers($scope.questions, $scope.answers).then(function (response) {
      $scope.results = response;
    });
  };

$scope.update = function(choice){
  $scope.choice = choice;
};

  $scope.saveAnswer = function (ans) {
    $scope.answers[$scope.currentQuestion.id] = ans;
    $scope.nextQuestion();
  };

  $scope.reset = function () {
    $scope.answers = {};
    $scope.currentQuestion = $scope.questions[0];
  };


});
