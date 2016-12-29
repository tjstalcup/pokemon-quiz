var questions = [
	{
		title: 'What color is Bulbasaur',
		answers: ['blue','red','green','purple'],
		correct: 2
	},{
		title: 'What color is Charmander',
		answers: ['blue','red','green','purple'],
		correct: 1
	},{
		title: 'What color is Ditto',
		answers: ['blue','red','green','purple'],
		correct: 3
	},{
		title: 'What color is Squirtle',
		answers: ['blue','red','green','purple'],
		correct: 0
	},
];
var current = 0;
var score = 0;


$(document).ready(function(){

	showQuestion();

	$('ul').on('click','li',function(){
		$('li.highlight').removeClass('highlight');
		$(this).addClass('highlight');
	});

	$('.container').on('click','.submit-answer',function(){
		var answer = $('li.highlight').attr('data-answer');
		checkAnswer(answer);
	});

	$('.container').on('click','.restart-quiz',function(){
		restartQuiz();
	});

});

function showQuestion(){
	if(current < questions.length){
		var question = questions[current];
		$('h2').text(question.title);
		$('ul').html('');
		for (var i = 0; i < question.answers.length; i++) {
			$('ul').append('<li data-answer="'+i+'">'+question.answers[i]+'</li>');
		}
	} else {
		showSummary();
	}
}

function checkAnswer(answer){
	var question = questions[current];
	if(question.correct == answer){
		score++;
	}
	current++;
	showQuestion();
}

function showSummary(){
	$('ul').html('');
	$('h2').text('You scored '+score+' out of '+questions.length);
	$('.submit-answer').removeClass('submit-answer').addClass('restart-quiz').text('Restart Quiz');
}

function restartQuiz(){
	score = 0;
	current = 0;
	$('.restart-quiz').removeClass('restart-quiz').addClass('submit-answer').text('Submit Answer');
	showQuestion();
}