document.querySelector("button").onclick = function rollDice() {

  var message = document.querySelector("h1");
  var diceImgArray = ["Images/dice1.png", "Images/dice2.png", "Images/dice3.png", "Images/dice4.png", "Images/dice5.png", "Images/dice6.png"];
  var diceArray = []
  var randomArray = []

  for (var i = 0; i < 4; i++) {
    diceArray.push(document.querySelector((".dice" + [i + 1])));
    randomArray.push(Math.floor(Math.random() * 6));
    diceArray[i].setAttribute("src", diceImgArray[randomArray[i]]);
  }

  if ((randomArray[0] + randomArray[1]) > (randomArray[2] + randomArray[3])) {
    message.innerHTML = "🚩Player 1 Wins!";
  } else if ((randomArray[0] + randomArray[1]) < (randomArray[2] + randomArray[3])) {
    message.innerHTML = "Player 2 Wins!🚩";
  } else {
    message.innerHTML = "Draw!";
  }
}
