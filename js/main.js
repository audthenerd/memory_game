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

var createBoard = function() {
for (var i=0; i<cards.length; i++){
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src','images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	console.log(document.getElementById('game-board') );

	var gameBoard = document.getElementById('game-board').appendChild(cardElement);
}	
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
} 

var checkForMatch = function(){
	if (cardsInPlay.length < 2){
		return ;
	}else if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
}
}


createBoard();





