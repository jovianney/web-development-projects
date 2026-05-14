//Game Status
var gameStarted = false;
var gameLevel = 0;

//Played Patterns
var userClickedPattern = [];
var gamePattern = [];

//Colors
var buttonColors = ["red", "blue", "green", "yellow"];

$(document).on("keydown", function() {

    if (gameStarted === false) {
       nextSequence();
        gameStarted = true;
    } 




});



//Simon's Turn

function nextSequence() {
userClickedPattern = [];

var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColor);

gameLevel++
$("#level-title").text("Level " + gameLevel);


}


//User Turn

$(".btn").click(function() {

var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);

playSound(userChosenColor);

animatePress(userChosenColor);

checkAnswer(userClickedPattern.length - 1);

});

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play()

}

function animatePress(currentColor) {

$("#" + currentColor).addClass("pressed");
setTimeout(function() {

$("#" + currentColor).removeClass("pressed");

}, 100);
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");  

        if (userClickedPattern.length === gamePattern.length) {

        setTimeout(function() {

            nextSequence();

        }, 1000)

    }
    }
    
    

    else {
        console.log("wrong");
        
        playSound("wrong");

        $("body").addClass("game-over")
        setTimeout(function() {

        $("body").removeClass("game-over");

        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart")

        startOver();
       
    }

} 

function startOver() { 

        gameStarted = false;
        gamePattern = [];
        gameLevel = 0;

}