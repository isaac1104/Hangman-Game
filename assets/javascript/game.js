var answerScreen = document.getElementById("inputAnswer");

//Word pool//
var ranBands = ["muse", "systemofadown", "metallica", "acdc", "gunsnroses", "greenday", "redhotchilipeppers", "oasis", "beatles", "slayers", "megadeath"];

//Generate random words from the ranBands array//
var generateRandom = Math.floor(Math.random() * ranBands.length);

//Answer generated randomly from the ranBands array//
var ranAnswer = ranBands[generateRandom].split("");
console.log(ranAnswer);

//Current answer the user has to guess//
var currentAnswer = [];

var underscores = [];

//Display randomly generated answers and show them as underscores//
function displayUnderscore () {
  answerScreen.innerHTML = "";
  for (var i = 0; i < ranAnswer.length; i++) {
    if (currentAnswer.indexOf() === -1) {
      answerScreen.innerHTML = underscores.join(" ");
    } else if (currentAnswer.indexOf() === 0){
      answerScreen.innerHTML = answerScreen.innerHTML + currentAnswer[i];
    }
  }
}
displayUnderscore();
console.log(underscores);

//User types keyboard to guess the answer//
document.onkeypress = function(event) {
  event = event || window.event;
  var charCode = event.keyCode || event.which;
  var charStr = String.fromCharCode(charCode);
  for (var i = 0; i < ranAnswer.length; i++) {
    if (ranAnswer[i] === charStr) {
      ranAnswer[i] = "";
      underscores[i] = charStr;
      displayUnderscore();
    }
  }
};
