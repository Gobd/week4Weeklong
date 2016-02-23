angular.module('quizApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

$stateProvider
  .state('home', {
      'url': '/',
      'controller': 'homeCtrl',
      'templateUrl': '/components/home/homeView.html',
  })
  .state('quiz', {
      'url': '/quiz',
      'controller': 'quizCtrl',
      'templateUrl': '',
  })
  .state('quiz.view', {
      'url': '/quizView',
      'controller': 'quizCtrl',
      'templateUrl': '',
  })
  .state('results', {
      'url': '/results',
      'controller': 'resultsCtrl',
      'templateUrl': '/components/results/resultsView.html',
  });

  $urlRouterProvider.otherwise('/');

});
