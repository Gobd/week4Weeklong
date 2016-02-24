angular.module('quizApp').service('quizService', function($q){

  // {1: "T", 2: "scope", 3: "asfijoasjkn", 4: "scope", 5: "scope"}

  this.checkMyAnswers = function(questions, answers){
    var defer = $q.defer();
    console.log(questions);
    console.log(answers);
    var right = 0;
    var wrong = 0;
      for (var i =0; i<questions.length; i++) {
        if(questions[i].qtype === 'multiple') {
          if (answers[i+1] === questions[i].choices[questions[i].correct]) {
            console.log('right' + answers[i+1]);
            console.log('right' + questions[i].choices[questions[i].correct]);
            right ++;
          } else {
            console.log(answers[i+1]);
            console.log(questions[i].choices[questions[i].correct]);
            wrong ++;}
        } else {
          if (questions[i].correct === answers[i+1]) {
            console.log('right' + questions[i].correct);
            console.log('right' + answers[i+1]);
            right ++;
          } else {
            console.log(questions[i].correct);
            console.log(answers[i+1]);
            wrong ++;}
        }
      }
      console.log({right: right, wrong: wrong});
      defer.resolve({right: right, wrong: wrong});
      return defer.promise;

  };

  this.getQuestions = function(){
    return quizSampleObj;
  };

  var quizSampleObj = {
        'html': {
            id: 1,
            name: 'HTML',
            questions: [{
                id: 1,
                title: 'Box-model order from outside in is: Content, Border, Margin, Padding (T/F)',
                qtype: 'multiple',
                choices: ['T', 'F'],
                correct: 1
            },
                {
                    id: 2,
                    title: 'Which is not a semantic html element?',
                    qtype: 'multiple',
                    choices: ['header', 'div', 'footer', 'article'],
                    correct: 1
                }]
        },
        'angular': {
            id: 2,
            name: 'Angular',
            questions: [{
                id: 1,
                title: 'DOM manipulation should be performed in an angular directive? (T/F)',
                qtype: 'multiple',
                choices: ['T', 'F'],
                correct: 0
            },
            {
                id: 2,
                title: 'Which is not a valid option for a directive?',
                qtype: 'multiple',
                choices: ['transclude', 'link', 'scope', 'raccoon'],
                correct: 3
            },
            {
                id: 3,
                title: 'ng-click is a built-in angular _____.',
                qtype: 'blank',
                correct: 'directive'
            },
            {
                id: 4,
                title: 'DOM? (T/F)',
                qtype: 'multiple',
                choices: ['T', 'F'],
                correct: 0
            },
            {
                id: 5,
                title: 'Which is not a valid option for a directive?',
                qtype: 'multiple',
                choices: ['transclude', 'link', 'scope', 'The frenzied scratching of a rabid badger'],
                correct: 3
            }]
        }
    };

});
