angular.module('quizApp').controller('homeCtrl', function($scope, $state, $stateParams){

$scope.quizzes = [
  {quizName: 'angular'},
  {quizName: 'html'}
];

$scope.pastQuizzes = [];

});
