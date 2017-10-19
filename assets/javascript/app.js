$( document ).ready(function() {

	var myQuestions = [
		{
			question: "How many holes are played in a round of golf?",
			answers: {
				a: '12',
				b: '5',
				c: '18'
			},
			correctAnswer: 'c'
		},
		{
			question: "What sport is played with a shuttlecock?",
			answers: {
				a: 'tennis',
				b: 'badmiton',
				c: 'polo'
			},
			correctAnswer: 'b'
		},
		{
			question: "Who is the most decorated olympic athlete?",
			answers: {
				a: 'Michael Phelps',
				b: 'Usain Bolt',
				c: 'Tom Brady'
			},
			correctAnswer: 'a'
		},
		{
			question: "How many points does a half court shot give in basektball?",
			answers: {
				a: '2',
				b: '5',
				c: '3'
			},
			correctAnswer: 'c'
		},
		{
			question: "What NBA team has the most championships?",
			answers: {
				a: 'Lakers',
				b: 'Celtics',
				c: 'Warriors'
			},
			correctAnswer: 'b'
		},
		{
			question: "Madison Square Garden is home to what two teams?",
			answers: {
				a: 'New York Knicks and New York Rangers',
				b: 'Los Angeles Clippers and Los Angeles Lakers',
				c: 'Boston Celtics and Boston Bruins'
			},
			correctAnswer: 'a'
		},
		{
			question: "What number is retired in all of the MLB?",
			answers: {
				a: '23',
				b: '42',
				c: '9'
			},
			correctAnswer: 'b'
		},
		{
			question: "Who invented the game of basektball?",
			answers: {
				a: 'Roger Goodell',
				b: 'James Naismith',
				c: 'Wilt Chamberlain'
			},
			correctAnswer: 'c'
		},


	];

	var output = [];
	var answers;
	var newQuiz = true;
	var time = 60;
	var endTime =0;


	var intervalId = document.getElementById('timer');

	var quizContainer = document.getElementById('quiz');
	var resultsContainer = document.getElementById('results');
	var submitButton = document.getElementById('submit');
	var statButton = document.getElementById('start');
	
	function startPage() {
		$("#start").html("<button>Start</button>");

		$("#start").on("click", function () {
			
			runTimer();
				for (i=0; i<myQuestions.length ; i++) {
				answers = [];
				for(letter in myQuestions[i].answers){

					answers.push(
						'<label>'
							+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
							+ letter + ': '
							+ myQuestions[i].answers[letter]
						+ '</label>'
					);
				}
				output.push(
					'<div class="question">' + myQuestions[i].question + '</div>'
					+ '<div class="answers">' + answers.join(' ') + '</div>'
				);
			}
			quizContainer.innerHTML = output.join('');
		});
	};
	var now = time;

	function runTimer() {
		intervalId = setInterval(function() {
				var distance = now - endTime;

			

			  // Find the distance between now an the count down date
			  
			  console.log("distance: " + distance);

			  // Time calculations for days, hours, minutes and seconds
			  var minutes = Math.floor(distance / 60);
			  var seconds = distance - (minutes * 60);
			  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			  console.log("min: " + minutes);
			  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			  console.log("sec: " + seconds);

			  // Display the result in the element with id="demo"
			  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

			  now --;
			  console.log("now: " + now);

			  // If the count down is finished, write some text 
			  if (distance < 0) {
			    clearInterval(intervalId);
			    document.getElementById("timer").innerHTML = "EXPIRED";
			    showResults();
			  }
		}, 1000)
	}



	function timeConverter(t) {

	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60);

	    if (seconds < 10) {
	      seconds = "0" + seconds;
	    }

	    if (minutes === 0) {
	      minutes = "00";
	    }
	    else if (minutes < 10) {
	      minutes = "0" + minutes;
	    }

	    return minutes + ":" + seconds;
	 }
	

	function showResults() {
		var answerContainer = quizContainer.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;
		var numWrong =0;

		for(var i=0; i<myQuestions.length; i++){
			userAnswer = (answerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;

			if (userAnswer === myQuestions[i].correctAnswer) {

				numCorrect ++;

			}
			else {
				numWrong ++;
			}
		}
		resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
	};

	submitButton.onclick = function(){
		showResults();
	}

	// function timesUp() {
	// 	alert("sorry time's up!");
	// 	showResults();
	// }

		
	startPage();
	// getQuestions();


});


