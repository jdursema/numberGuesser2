var guessButton = document.getElementById('guess');
var inputField = document.getElementById('input');
var lastGuess = document.getElementById('last-guess');
var clearButton = document.getElementById('clear');
var randomNumber=Math.floor(Math.random()*100+1);
var highlow = document.querySelector('.highlow');
var reset = document.getElementById('reset')

function guessInput (){
	event.preventDefault();
	console.log(inputField.value)
	lastGuess.innerText=inputField.value;
}

function clearField (){
	event.preventDefault();
	inputField.value="";
}


console.log(randomNumber)


// function createNumber (){
// 	event.preventDefault();
// 	console.log((Math.floor(Math.random()*100+1)))
// }



function compare (){
	if (inputField.value == randomNumber){
		console.log("BOOM!");
		highlow.innerText= "BOOM!"
	}
	else if (inputField.value < randomNumber){
		console.log("Your guess is too low");
		highlow.innerText = "Your guess is too low";
	}
	else if (inputField.value > randomNumber){
		console.log("Your guess is too high");
		highlow.innerText = "Your guess is too high";
	}
	else {
		console.log("Invalid");
		highlow.innerText = "Invalid"
	}
}

function numberOutOfRange() {
	if(inputField.value >= 101){
		highlow.innerText= 'That number is out of range';
		clearField();
	}
	else if(inputField.value <= 0){
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
	else if(inputField.value <= 0){guessButton.disabled= true;
	}
	else if (isNaN(inputField.value)){guessButton.disabled= true;
	}
	else {guessButton.disabled=false;}
}

function disableClear(){
	if(inputField.value == 3) {clearButton.disabled=false;
	}
	else {inputField.disabled=true;
	}
}



guessButton.addEventListener('click', guessInput)
guessButton.addEventListener('click', randomNumber)
clearButton.addEventListener('click', clearField)
guessButton.addEventListener('click', compare)
guessButton.addEventListener('click', numberOutOfRange)
inputField.addEventListener('keyup', disableGuess)
inputField.addEventListener('keyup', disableClear)



