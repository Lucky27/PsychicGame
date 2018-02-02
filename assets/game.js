// alert("Want to play a psychic game?")

var answer=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerChoice;
var i= (0);
var wins= 0;
var losses= 0;
var guess= 10;
var yourGuess=[];


	// var guess=prompt("guess a letter")

	function choices(){
		
		computerChoice=answer[Math.floor(Math.random()*26+1)];
		console.log(computerChoice);
	}

	document.onkeyup = function(event){
		yourGuess = event.key;
		choices ();

	if (yourGuess === computerChoice){
		wins === wins++;
		guess = 10;
		yourGuess = [];
		// console.log(wins)
	}

	else {
		guess === guess--;
		guess = guess + yourGuess + ",";
	}

	if (guess === 0){
		losses === losses++;
		guess = 10;
		yourGuess = [];
		choices ();
	}





		
		

	document.querySelector("#wins").innerHTML = "wins:"+ wins;
	document.querySelector("#losses").innerHTML = "losses:" + losses;
	document.querySelector("#guess").innerHTML= "guess:" + guess; 
	document.querySelector("#yourGuess").innerHTML= "yourGuess:" + yourGuess;

	}//end of onkeyup function.	
		
	// document.querySelector("#wins").innerHTML "wins:"+ wins++;
	// document.querySelector("#losses").innerHTML "lossses:" + losses++;
	// document.querySelector("#guess").innerHTML "guess:" + guess++; 
	// document.querySelector("#yourGuess").innerHTML "yourGuess:" + yourGuess++;