/*
//Random number generator (x) amount of times
function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;
while (counter < 10000 ) {
  var randNum = randomNumber(6);
  document.write(randNum + ' ');
  counter += 1;
}



//Computer guesses the correct number and counts how many times.
var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== randomNumber) {
  guess = getRandomNumber( upper );
  attempts += 1;
}

document.write("<p>The random number was: " + randomNumber + "<p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right.<p>");


//The Do-While Loop

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false; //called a flag

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess)
  document.write('<h1>You guess the number!</h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);

*/

//For Loops

for (int i = 4; i <= 156; i++) {
  console.log(i);
}



















