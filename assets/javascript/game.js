//Word pool//
var ranWords = ["powderblue", "apple", "chocolate", "bicycle", "javascript", "refrigerator", "airconditioner", "chairs", "tomato"];

//Generate random words from the ranWords array//
var generateRandom = Math.floor(Math.random() * ranWords.length);

//Answer generated randomly from the ranWords array and break them down to each letters//
var ranAnswer = ranWords[generateRandom].split("");
console.log(ranAnswer);

//Current answer the user has to guess. When the user guesses the letters correctly, they get stored in here.//
var currentAnswer = [];

//Display randomly generated answers and show them as underscores//
function displayUnderscore() {
  document.getElementById("inputAnswer").innerHTML = " ";
  for (var i = 0; i < ranAnswer.length; i++) {
    if (currentAnswer[i] === undefined) {
      document.getElementById("inputAnswer").innerHTML = document.getElementById("inputAnswer").innerHTML + " _ ";
    } else {
      document.getElementById("inputAnswer").innerHTML = document.getElementById("inputAnswer").innerHTML + " " + currentAnswer[i] + " ";
    }
  }
}
displayUnderscore();

//Display total number of guesses left and letters already used//
var guesses = 15;
var usedLetters = [];

function displayGuesses() {
  //Player wins if all the letters are guessed correctly//
  if (ranAnswer.toString() === currentAnswer.toString()) {
    alert("You are correct! The answer is: " + ranAnswer.join("") + ". " + "Great Job!");
    location.reload();
    //Player loses if the number of guesses becomes 0//
  } else if (guesses === 0) {
    alert("You Lost! The answer is: " + ranAnswer.join("") + ". " + "Better luck next time!");
    location.reload();
  }
  document.getElementById("guess").innerHTML = "Total Number of Guesses Left: " + guesses;
  document.getElementById("lettersUsed").innerHTML = "Letters used: " + usedLetters;
}
displayGuesses();

//User types keyboard to guess the answer. If the letters are guessed correctly, the letters are generated in the currentAnswer array.//
document.onkeypress = function(event) {
  event = event || window.event;
  var charCode = event.keyCode || event.which;
  var charStr = String.fromCharCode(charCode);
  if (charStr && usedLetters.indexOf(charStr) === -1) {
    guesses--;
    usedLetters[i] = charStr;
    usedLetters.push(charStr);
    document.getElementById("lettersUsed").innerHTML = "Letters used: " + " " + usedLetters + " ";
    console.log(usedLetters);
  }
  for (var i = 0; i < ranAnswer.length; i++) {
    if (ranAnswer[i] === charStr) {
      currentAnswer[i] = charStr;
      displayUnderscore();
    }
  }
  displayGuesses();
};
