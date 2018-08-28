/* var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree); */

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay);

var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay);

if (cardsInPlay.length === 2){
	console.log ("Two cards played.");
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Awww.. Try again.");
	}
} else {
	console.log("Error");
}

