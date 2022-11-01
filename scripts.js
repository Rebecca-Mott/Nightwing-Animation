let audio = document.getElementById("audio");
let PlayPauseBTN = document.getElementById("PlayPauseBTN");
let count = 0;

// adding the variables and event handler code to an onclick event.The method is document.getElementById(id).onclick = function(){code}. One of many JavaScript HTML methods is getElementById()

function playpause() {
  if (count == 0) {
    count = 1;
    audio.play();
    PlayPauseBTN.innerHTML = "Pause &#9208";
  } else {
    count = 0;
    audio.pause();
    PlayPauseBTN.innerHTML = "Play &#9658;";
  }
}

function stop() {
  playpause();
  audio.pause();
  audio.currentTime = 0;
  PlayPauseBTN.innerHTML = "Play &#9658;";
}

//A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it)

// // A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)
// The code to be executed, by the function, is placed inside curly brackets: {}

// Parentheses are included in the syntaxes of many programming languages. Typically needed to denote an argument; to tell the compiler what data type the Method/Function needs to look for first in order to initialise.

// Use the else if statement to specify a new condition if the first condition is false.

//inner html is a property that help us modify the content of a html element or find and return an element. e.g The text inside a <p> html tag or a button.
