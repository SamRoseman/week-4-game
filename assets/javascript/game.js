$(document).ready(function() {

//VARIABLES
// ======================================================= 
var gemArray = [];
var gem0 = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var compRandy;
var gemAll = gem0 + gem1 + gem2 + gem3;
var wins = 1;
var losses = 1;

//FUNCTIONS
// ======================================================= 

function getCompNumber() {
	compRandy = Math.floor(Math.random() * 120)+ 19;
	console.log("Computer Value: " + compRandy);
	};


function reset() {
	getCompNumber();
	for (var i = 0; i < 4; i++) {
	gemArray[i] = Math.floor(Math.random() * 12) + 1;
	console.log("GemArray Value " + [i] + ": " + gemArray[i]);
	}
	$("#targetNumber").text(compRandy);
	$("#userGuess").text("your guess");
	gem0 = 0;
	gem1 = 0;
	gem2 = 0;
	gem3 = 0;
	};

//MAIN PROCESS
// ======================================================= 
reset();






$("#gem0").on("click", function() {
	gem0 = gem0 + gemArray[0];
	// console.log(gem0);
	$("#userGuess").text(gem0 + gem1 + gem2 + gem3);
	if (compRandy < gem0+gem1+gem2+gem3) {
	alert("You lost");
	$("#losses").text("Losses: " + losses++);
	reset();
	}
	if (compRandy === gem0+gem1+gem2+gem3) {
	alert("You WON!");
	$("#wins").text("Wins: " + wins++);
	reset();
	}

});

$("#gem1").on("click", function() {
	gem1 = gem1 + gemArray[1];
	// console.log(gem1);
	$("#userGuess").text(gem0 + gem1 + gem2 + gem3);
	if (compRandy < gem0+gem1+gem2+gem3) {
	alert("You lost");	
	$("#losses").text("Losses: " + losses++);
	reset();
	}
	if (compRandy === gem0+gem1+gem2+gem3) {
	alert("You WON!");
	$("#wins").text("Wins: " + wins++);
	reset();
	}
});

$("#gem2").on("click", function() {
	gem2 = gem2 + gemArray[2];
	// console.log(gem2);
	$("#userGuess").text(gem0 + gem1 + gem2 + gem3);
	if (compRandy < gem0+gem1+gem2+gem3) {
	alert("You lost");
	$("#losses").text("Losses: " + losses++);
	reset();
	}
	if (compRandy === gem0+gem1+gem2+gem3) {
	alert("You WON!");
	$("#wins").text("Wins: " + wins++);
	reset();
	}
});

$("#gem3").on("click", function() {
	gem3 = gem3 + gemArray[3];
	// console.log(gem3);
	$("#userGuess").text(gem0 + gem1 + gem2 + gem3);
	if (compRandy < gem0+gem1+gem2+gem3) {
	alert("You Lost");
	$("#losses").text("Losses: " + losses++);
	reset();
	}
	if (compRandy === gem0+gem1+gem2+gem3) {
	alert("You WON!");
	$("#wins").text("Wins: " + wins++);
	reset();
	}
});



	

//final close
});