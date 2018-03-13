var randomNum = '';
var wins = 0;
var losses = 0;
var c1;
var c2;
var c3;
var c4;
var yourScore = 0;
var activeGame = false;


//Document Ready function
$(document).ready(function () {
    console.log('ready!');

    //Random number chosen at beginning and displayed in randomNumber div//
    function getNumber() {
        for (i = 0; i < randomNum.length; i++) {
            min = 19;
            max = 120;
            var chosenNum = Math.floor(Math.random() * ((max - min) + 1) + min);
            randomNum = chosenNum;
            $('#randomNumber').text('<div>' + randomNum + '</div>');
        }
    };
    //A random number is generated for each crystal//
    function crystalNumber() {
        var crystalArray = [];

        for (var i = 0; i < 3; i++) {
            var randomcrystalNum = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
            crystalArray = randomcrystalNum;
        }

        c1 = crystalArray[0];
        c2 = crystalArray[1];
        c3 = crystalArray[2];
        c4 = crystalArray[3];
    }
    //The random number is assigned to each button//
    $(function setValues() {
        $('#gemImg1').val(c1);
        $('#gemImg2').val(c2);
        $('#gemImg3').val(c3);
        $('#gemImg4').val(c4);
    });


    //When a crystal is clicked the value of that crystal is added to yourScore div//
    $('#buttonContainer').on('click', 'button', function () {

    })

    //If yourScore is equal to the randomNumber then you have a Win added//
    if (youScore = randomNum) {
        wins++;
        $('yourWins').text(wins);
        activeGame = false;
    }

    //If yourScore goes above the randomNumber then you have a Loss added//
    else if (yourScore > randomNum) {
        losses++;
        $('yourLosses').text(losses);
        activeGame = false;
    }
    //Reset Game//
    else {
        resetGame;
        activeGame = true;
    };

})