var guessButton = document.getElementById('guess');
var inputField = document.getElementById('input');
var lastGuess = document.getElementById('last-guess');
var clearButton = document.getElementById('clear');
var highlow = document.querySelector('.highlow');
var reset = document.getElementById('reset');
var minimumInput = document.getElementById('minimum-input');
var maximumInput = document.getElementById('maximum-input');
var enterButton = document.getElementById('enter-min-max');
var resetButton = document.getElementById('reset');

guessButton.addEventListener('click', guessInput);
enterButton.addEventListener('click', getRandomNumber);
clearButton.addEventListener('click', clearField);
guessButton.addEventListener('click', compare);
guessButton.addEventListener('click', numberOutOfRange);
inputField.addEventListener('keyup', disableGuess);
inputField.addEventListener('keyup', disableClear);
enterButton.addEventListener('click', disableMinMaxInputField);
resetButton.addEventListener('click', reset);
enterButton.addEventListener('click', disableReset);


function guessInput (){
	event.preventDefault();
	console.log(document.getElementById('input').value)
	lastGuess.innerText=inputField.value;
}

function clearField (){
	event.preventDefault();
	inputField.value="";
}

function disableMinMaxInputField (){
	minimumInput.disabled=true;
	maximumInput.disabled=true;
	enterButton.disabled=true;
}

function getRange (){
	event.preventDefault();
	console.log(minimumInput.value);
	console.log(maximumInput.value);
	minimumInput.innerText=minimumInput.value;
	maximumInput.innerText=maximumInput.value;
}

function getRandomNumber(){
	randomNum = (Math.floor(Math.random()*(parseInt(maximumInput.value)-parseInt(minimumInput.value)+1)+(parseInt(minimumInput.value))))
	console.log(randomNum);
}

function compare (){
	var makeThingsNumber = parseInt(inputField.value);


	if (makeThingsNumber === randomNum){
		levelUp();
	}
	else if (makeThingsNumber < randomNum){
		highlow.innerText = "Your guess is too low";
	}
	else if (makeThingsNumber > randomNum){
		highlow.innerText = "Your guess is too high";
	}
	else {
		highlow.innerText = "Invalid"
	}
}

function numberOutOfRange() {
	if(inputField.value >= (parseInt(maximumInput.value)+1)){
		highlow.innerText= 'That number is out of range';
		clearField();
	}
	else if(inputField.value <= (parseInt(minimumInput.value)-1)){
		highlow.innerText = "That number is out of range";
		clearField();
	}
	else if (isNaN(inputField.value)){
		highlow.innerText= "That is not a number";
	}
}

function disableGuess(){
	if(inputField.value >= 101) {guessButton.disabled= true;
	}
	else if(inputField.value <= -101){guessButton.disabled= true;
	}
	else if (isNaN(inputField.value)){guessButton.disabled= true;
	}
	else {guessButton.disabled=false;}
}

function disableClear(){
	if(inputField.value == '') {clearButton.disabled = true;
	}
	else {clearButton.disabled = false;
	}
}

function reset(){
	document.getElementById('main').reset();
}

function disableReset(){
	resetButton.disabled=false;
}

function levelUp(){
	if(highlow.innerText="BOOM! Level Up!"){
		maximumInput.value = (parseInt(maximumInput.value)+10);
		minimumInput.value = (parseInt(minimumInput.value)-10);
		getRandomNumber()
	}
}
