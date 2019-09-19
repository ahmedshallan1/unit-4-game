$(document).ready(function() 
{
	var rand = [];

	for (var r = 19; r < 121; r++) 
	{
		rand.push(r);
	}

	var crystals = [];

	for (var c = 1; c < 13; c++) 
	{

		crystals.push(c);
	}

	var randNumber; 
	var crystalNumbers = []; 

	var c1;
	var c2;
	var c3;
	var c4;

  var totalScore = 0; 

	var wins = 0;
	var losses = 0;


	function pickRandomNumber(arr) 
	{

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

	} 

	function pickRandomCrystals(arr) 
	{

		for (var y = 0; y < 4; y++)
		{

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}
    
		console.log("crystal numbers: " + crystalNumbers);

	} 

	function crystalValues(arr) {

		for (i = 0; i < arr.length; i++) 
		{

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}

		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} 

	function gameReset(x) 
	{

		crystalNumbers = []; 

		pickRandomNumber(rand);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} 

	pickRandomNumber(rand); 
	pickRandomCrystals(crystals); 
	crystalValues(crystalNumbers);



		$("#button-1").on("click", function() 
		{

			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() 
		{

			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() 
		{

			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() 
		{

			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() 
	{
		if (totalScore == randNumber) 
		{

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}

		else if (totalScore > randNumber)
		{

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("WOMP-WOMP...YOU LOSE!")}, 200);
		}
	});

}); 