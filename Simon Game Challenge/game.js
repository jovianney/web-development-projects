//Game Status
var gameStarted = false;
var gameLevel = 0;
var isSimonsTurn = false;

//Played Patterns
var userClickedPattern = [];
var gamePattern = [];

//Colors
var buttonColors = ["red", "blue", "green", "yellow"];

//Start button click
$("#start-btn").click(function() {
    if (!gameStarted) {
        gameStarted = true;
        gameLevel = 0;
        gamePattern = [];
        userClickedPattern = [];
        $("#start-btn").text("Game Started!").prop("disabled", true);
        $("#status-text").text("Simon's Turn");
        nextSequence();
    }
});

//Allow keyboard start with Enter
$(document).on("keydown", function(e) {
    if (!gameStarted && e.key === "Enter") {
        gameStarted = true;
        gameLevel = 0;
        gamePattern = [];
        userClickedPattern = [];
        $("#start-btn").text("Game Started!").prop("disabled", true);
        $("#status-text").text("Simon's Turn");
        nextSequence();
    }
});

//Simon's Turn
function nextSequence() {
    isSimonsTurn = true;
    $(".btn").addClass("disabled").css("pointer-events", "none");
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    gameLevel++;
    $("#score-text").text("Level: " + gameLevel);

    // Add delay before playing sequence
    setTimeout(function() {
        playSequence(0);
    }, 800);
}

function playSequence(index) {
    if (index < gamePattern.length) {
        var color = gamePattern[index];
        setTimeout(function() {
            flashButton(color);
            playSound(color);
            if (index < gamePattern.length - 1) {
                setTimeout(function() {
                    playSequence(index + 1);
                }, 600);
            } else {
                // Sequence complete, user's turn
                setTimeout(function() {
                    isSimonsTurn = false;
                    $(".btn").removeClass("disabled").css("pointer-events", "auto");
                    $("#status-text").text("Your Turn!");
                }, 600);
            }
        }, 400);
    }
}

//User Turn
$(".btn").click(function() {
    if (isSimonsTurn || !gameStarted) return;

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 200);
}

function flashButton(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function() {
        $("#" + color).removeClass("pressed");
    }, 300);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            $("#status-text").text("Correct! Next Level...");
            setTimeout(function() {
                nextSequence();
            }, 1200);
        }
    } else {
        playSound("wrong");
        
        $("body").addClass("game-over-flash");
        setTimeout(function() {
            $("body").removeClass("game-over-flash");
        }, 300);

        $("#status-text").text("Wrong! Game Over!");
        $("#start-btn").text("Start Game").prop("disabled", false);
        
        startOver();
    }
}

function startOver() { 
    gameStarted = false;
    gamePattern = [];
    gameLevel = 0;
    userClickedPattern = [];
    isSimonsTurn = false;
    $(".btn").removeClass("disabled").css("pointer-events", "auto");
    $("#score-text").text("Level: 0");
}