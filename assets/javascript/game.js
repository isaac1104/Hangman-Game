//Word pool//
var ranWords = ["banana", "apple", "chocolate", "bicycle", "javascript", "refrigerator", "airconditioner", "chairs"];

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
var guesses = 10;
var usedLetters = [];

function displayGuesses() {
  document.getElementById("guess").innerHTML = "Total Number of Guesses Left: " + guesses;
}
displayGuesses();

//User types keyboard to guess the answer. If the letters are guessed correctly, the letters are generated in the currentAnswer array.//
document.onkeypress = function(event) {
  event = event || window.event;
  var charCode = event.keyCode || event.which;
  var charStr = String.fromCharCode(charCode);

  //When the number of guesses becomes 0, player loses//
  guesses--;
  displayGuesses();
  if (guesses === 0) {
    alert("You Lost! The answer is: " + ranAnswer.join("") + ". " + "Better luck next time!");
    location.reload();

    //The player wins if he/she guesses all the letters correctly//
  } else if (ranAnswer.join("") === currentAnswer.join("")) {
    alert("You have guessed the answer correctly! Great Job!");
    location.reload();
  }

  for (var i = 0; i < ranAnswer.length; i++) {
    if (ranAnswer[i] === charStr) {
      currentAnswer[i] = charStr;
      usedLetters[i] = charStr;
        document.getElementById("lettersUsed").innerHTML = "Letters used: " + usedLetters[i];
      displayUnderscore();
      console.log(currentAnswer);
    }
  }
};
