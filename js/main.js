
console.log("Up and running!");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suite: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  },
];

var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  };
};

var flipCard = function () {
  var cardId = this.getAttribute("data-id");
  var card = cards[cardId];
  this.setAttribute("src", card.cardImage);
  cardsInPlay.push(cards[cardId].rank);
  console.log("User flipped" + " " + cards[cardId].rank);
  console.log("User flipped" + " " + cards[cardId].suit);
  console.log("User flipped" + " " + cards[cardId].cardImage);
};

var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i)
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
  }
}

checkForMatch();

if (cardsInPlay.length === 2) {
  checkForMatch();
}

if (cardsInPlay[0] === cardsInPlay[1]); {console.log("You found a match!");}

createBoard();

/*var cardOne = cards[0];

cardsInPlay.push("cardOne");

console.log("User flipped " + cardOne);

var cardTwo = cards[1];

cardsInPlay.push("cardTwo");

console.log("User flipped " + cardTwo);*/
