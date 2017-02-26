var word = "";
var manUnder = [];
var correctGuess = [];
var wrong = 0;
var manWin = false;
var hangWin = false;
var right = 0;

function setWord(newWord) {
  word = newWord;
  for (i = 0; i < newWord.length; i++) {
    manUnder[i] = "_";
  }
}

function checkMan() {
  do {
    var inWord = false;
    var manGuess = prompt("First player enter guess", "");
    for (i = 0; i < word.length; i++) {
      if (word.charAt(i) == manGuess) {
        manUnder[i] = manGuess;
        inWord = true;
      }
    }
    if (!inWord) {
      wrong++;
      alert("first player guess wrong " + wrong + " out of 5");
      if (wrong == 5) {
        hangWin = true;
        alert("hang win");

      }
    } else {
      alert("first player guess right");
        right++;
      if (compareWords(manUnder)) {
        
        inWord = false;
        manWin = true;
        alert("free win");
      }
    }
  } while (inWord);
}

function checkHang() {
  var inGuess = false;
  var hangGuess = prompt("second player enter guess", "");
  var i = 0;
  do {
    if (hangGuess == correctGuess[i]) {
      inGuess = true;
      wrong++;
      alert("hang guessed correct " + wrong +" out of 5");
    }
    i++
  } while (!inGuess && i <= right);
  if (wrong == 5) {
    hangWin = true;
    alert("hang win");
  }
}

function getGuess() {
  manWin = false;
  hangWin = false;
  wrong = 0;
  while (!manWin && !hangWin) {

    checkMan();
    if (!manWin && !hangWin) {
      checkHang();
    }
  }

}

function main() {

  var newWord = prompt("enter word to guess", "hi");
  setWord(newWord);
  getGuess();
}


function compareWords(under) {
  for (var i = 0; i < word.length; i++) {
    if (!(under[i] == word[i])) {
      return false;
    }
  }
  return true;
}
$( document ).ready(function() {
$('#startbtn').click(main);
});