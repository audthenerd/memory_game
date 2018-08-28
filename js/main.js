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

var cards = [
{
rank: "queen",
suit: "heart",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length < 2){
		return ;
	}else if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
} 

flipCard(0);
flipCard(3);




