/* var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree); 

if (cardsInPlay.length === 2){
	console.log ("Two cards played.");
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Awww.. Try again.");
	}
	*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length < 2){
		return ;
	}else if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
    checkForMatch();
} 

flipCard(0);
flipCard(3);




