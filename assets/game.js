

var answer=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerChoice;
var i=(0);
var wins=0;
var losses=0;
var guesses=10;
var yourGuess=[];
var words= [];


	// var guess=prompt("guess a letter")

	function choices(){
		computerChoice=answer[Math.floor(Math.random()*26) +1]
	console.log(computerChoice)
	}

	choices()
 
 	document.onkeyup = function(event){
 		yourGuess = event.key;
 		console.log(yourGuess);
 	



		if(yourGuess === computerChoice){
		wins === wins++;
		guess = 10;
		words = [];
		console.log(wins)
		choices()
		}

		else {
			guesses == guesses--;
			words = words + yourGuess + ","
		}

	    if(guesses=== 0){
	    	losses === losses++;
	    	guesses = 10;
	    	words = [];
	    	choices();
	    }
		
		

		

	document.querySelector("#wins").innerHTML = "wins:"+ wins;
	
	document.querySelector("#losses").innerHTML = "losses:" + losses;
	
	document.querySelector("#guess").innerHTML= "guesses:" + guesses; 
	
	document.querySelector("#yourGuess").innerHTML= "yourGuess:" + words;

		}

	
		
	// document.querySelector("#wins").innerHTML "wins:"+ wins++;
	// document.querySelector("#losses").innerHTML "lossses:" + losses++;
	// document.querySelector("#guess").innerHTML "guess:" + guess++; 
	// document.querySelector("#yourGuess").innerHTML "yourGuess:" + yourGuess++;