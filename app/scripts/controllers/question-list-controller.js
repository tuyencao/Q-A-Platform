var QuestionsList = angular.module('QuestionsList',[]);

QuestionsList.controller('QuestionsListController', function($scope) {
	$scope.questions = [
	    {'id': '01',
		'title': 'Question 1',
		'user': "user 1",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '02',
		'title': 'Question 2',
		'user': "user 2",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '03',
		'title': 'Question 3',
		'user': "user 3",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '04',
		'title': 'Question 4',
		'user': "user 4",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '05',
		'title': 'Question 5',
		'user': "user 5",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '06',
		'title': 'Question 6',
		'user': "user 6",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '07',
		'title': 'Question 7',
		'user': "user 7",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '08',
		'title': 'Question 8',
		'user': "user 8",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '09',
		'title': 'Question 9',
		'user': "user 9",
		'date': '20-04-2014',
		'anwsers': 12},
		{'id': '10',
		'title': 'Question 10',
		'user': "user 10",
		'date': '20-04-2014',
		'anwsers': 12}
	];
});
var categoryList = [
         {id: '01',name: 'Hardware', number:'1'},
         {id: '02',name: 'Software', number:'5'},
         {id: '03',name: 'Life experiences', number:'8'},
         {id: '04',name: 'The love', number:'10'},
         {id: '05',name: 'The family', number:'15'},
         {id: '06',name: 'Beauty', number:'20'},
         {id: '07',name: 'Entertainment', number:'11'},
         {id: '08',name: 'Motherhood', number:'12'}
        ];
QuestionsList.controller('AskQuestionController', function($scope) {
	$scope.categoryList =  categoryList;
	console.log('AskQuestionController is running');
});
