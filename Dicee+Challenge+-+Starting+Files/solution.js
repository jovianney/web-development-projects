
function rollDice() {
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImageSource1);
document.querySelector(".img2").setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "Player 1 is the Winner! 🏆";

} else if (randomNumber1 < randomNumber2) {

    document.querySelector("h1").innerHTML = "Player 2 is the Winner! 🏆";

} else {

    document.querySelector("h1").innerHTML = "Draw!";

}

}