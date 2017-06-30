//Generate random answers
var ranBands = ["muse", "systemofadown", "metallica", "acdc", "gunsnroses", "greenday", "redhotchilipeppers", "oasis"];

var ranAnswer = ranBands[Math.floor(Math.random() * ranBands.length)];

console.log(ranAnswer);


//Count number of characters in the answer without spaces
var charCount = ranAnswer.split(" ").join("").length;

console.log(charCount);


//Display the underscores into the #inputAnswer DIV
window.onload = function displayUnderscore() {
  document.getElementById("inputAnswer").innerHTML = underscores;

  //Set total number of guesses remaining
  var guesses = 10;

  document.getElementById("guess").innerHTML = "Number of Guesses Remaining: " + guesses;
}


//Store correct letters
var underscores = " ";


//Create & match the numbers of underscores according to the length of the randomly generated answers
function createUnderscore() {
  for (var i = 0; i < charCount; i++) {
    underscores += "_ ";
  }
}
createUnderscore();

console.log(underscores);

//Replace underscores if letters are guessed correctly
function replaceUnderscore() {
  if (ranAnswer.indexOf() !== -1) {
    for (i = 0; i < ranAnswer.length; i++) {
      underscores = underscores.replace("_ ", ranAnswer.charAt(i));
    }
  }
}
replaceUnderscore();


//User clicks on alphabet buttons to guess the answer
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'
];
