$(document).ready(function () {
    var Random = Math.floor(Math.random() * 102) + 19;
    $('#scoreToMatch').text(Random);

    // var randomArray = []; 
    // 	console.log("randomArray: " + randomArray); 
	// 	var gemNumber = Math.floor(Math.random() * 12) + 1; 
	// 		console.log 
	// 	randomArray.push(Number); 
    //Generate random number for each crystal
    var num1 = Math.floor(Math.random() * 12 + 1)
    console.log(num1);
    var num2 = Math.floor(Math.random() * 12 + 1)
    console.log(num2);

    var num3 = Math.floor(Math.random() * 12 + 1)
    console.log(num3);

    var num4 = Math.floor(Math.random() * 12 + 1)
    console.log(num4);


    // Variables to keep track of wins, losses and total
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;


    $('#wins').text(wins);
    $('#losses').text(losses);

    // Reset game
    function reset() {
        Random = Math.floor(Math.random() * 102 + 19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1 = Math.floor(Math.random() * 12 + 1);
        console.log(num1);

        num2 = Math.floor(Math.random() * 12 + 1);
        console.log(num2);

        num3 = Math.floor(Math.random() * 12 + 1);
        console.log(num3);

        num4 = Math.floor(Math.random() * 12 + 1);
        console.log(num4);

        playerTotal = 0;
        $('#totalScore').text(playerTotal);
    }
    // Display wins
    function youWin() {
        console.log("win")
        alert("Congrats! You won!");
        wins++;
        $('#wins').text(wins);
        reset();
    }
    // Display losses
    function loser() {
        alert("Sorry! You lose!");
        losses++;
        $('#losses').text(losses);
        reset()
    }
    // Clicking crystals
    $('.red').on('click', function () {
        playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        console.log(playerTotal, Random)
        //Win & lose conditions
        if (playerTotal == Random) {
            console.log("equals")
            youWin();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('.blue').on('click', function () {
        playerTotal = playerTotal + num2;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        console.log(playerTotal, Random)
        if (playerTotal == Random) {
            console.log("equals")
            youWin();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('.yellow').on('click', function () {
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        console.log(playerTotal, Random)
        if (playerTotal == Random) {
            console.log("equals")
            youWin();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('.green').on('click', function () {
        playerTotal = playerTotal + num4;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        console.log(playerTotal, Random)
        if (playerTotal == Random) {
            console.log("equals")
            youWin();
        }
        else if (playerTotal > Random) {
            loser();
        }
    });
}); 