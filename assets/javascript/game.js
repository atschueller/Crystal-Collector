var wins = 0;
var losses = 0;
var c1 = 10;
var c2 = 5;
var c3 = 1;
var c4 = 3;
var yourScore = 0;
var activeGame = false;
var chosenNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
console.log(chosenNum);

//Document Ready function
$(document).ready(function () {
    console.log('ready!');

    // Random number chosen at beginning and displayed in randomNumber div//
    function getNumber() {
        var gameNum = chosenNum;
        $('#randomNumber').text(gameNum.toString());
    };
    getNumber();
    //When a crystal is clicked the value of that crystal is added to yourScore div//
    $('#gemImg1').on('click', function () {
        yourScore += c1;
        $('#yourScore').text(yourScore);
        console.log(yourScore);
    });
    $('#gemImg2').on('click', function () {
        yourScore += c2;
        $('#yourScore').text(yourScore);
        console.log(yourScore);
    });
    $('#gemImg3').on('click', function () {
        yourScore += c3;
        $('#yourScore').text(yourScore);
        console.log(yourScore);
    });
    $('#gemImg4').on('click', function () {
        yourScore += c4;
        $('#yourScore').text(yourScore);
        console.log(yourScore);
    });
    //If yourScore is equal to the randomNumber then you have a Win added//
    if (youScore = chosenNum) {
        wins++;
        $('yourWins').text(wins.toString());
        activeGame = false;
        reset(game);
    }
    //If yourScore goes above the randomNumber then you have a Loss added//
    else {
        losses++;
        alert('You Lose');
        $('yourLosses').text(losses.toString());
        activeGame = false;
        reset(game);
    }
    //resetGame function to clear the randomNumber and crystal values//
    function reset() {
        yourScore = 0,
        $('#yourScore').text(toString);
    }
})