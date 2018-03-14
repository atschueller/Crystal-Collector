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
    // Random number chosen at beginning and clears yourScore area//
    function resetGame() {
        var gameNum = chosenNum;
        $('#randomNumber').text(gameNum.toString());
        yourScore = 0;
    };
    resetGame();
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
    function checkValues() {
        if (yourScore === chosenNum) {
            wins++;
            $('#yourWins').text("Wins:" + wins.toString());
            activeGame = true;
            resetGame();
        };
        if (yourScore >= chosenNum) {
            losses++;
            alert('You Lose');
            $('#yourLosses').text("Losses:" + losses.toString());
            activeGame = true;
            resetGame();
        };
    }
    $("button").click(checkValues);
});