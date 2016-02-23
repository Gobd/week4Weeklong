angular.module('quizApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

$stateProvider
  .state('home', {
      'url': '/',
      'controller': 'homeCtrl',
      'templateUrl': '/components/home/homeView.html',
  })
  .state('quiz', {
      url: '/quiz/:quizName',
      templateUrl: 'components/quiz/views/quizContainerView.html',
      controller: 'quizCtrl'
  })
  .state('quiz.view', {
    parent: 'quiz',
    views: {
        'list': {
            templateUrl: 'components/quiz/views/questionListWrapperView.html'
        },
        'detail': {
            templateUrl: 'components/quiz/views/questionDetailView.html'
        }
    }
});

  $urlRouterProvider.otherwise('/');

});
