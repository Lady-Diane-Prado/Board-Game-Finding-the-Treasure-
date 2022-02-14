// variable for all user inputs
let userInput = require("readline-sync");

// ask for user name
let askName = userInput.question("What is your name?");
// make the first letter of name capitalize
let playerName = askName.charAt(0).toUpperCase() + name.slice(1);
// print name
console.log(`Player Name: ${playerName}`);

// create board
/* Sample Board (3x3)
[?, ?, ?]
[?, ?, ?]
[?, ?, ?]
*/

let playerBoard = [];
let rowBoard = 3;
let columnBoard = 3;

// print rows
for (let i = 0; i < rowBoard; i++) {
  playerBoard.push([]);
  // print columns
  for (let j = 0; j < columnBoard; j++) {
    playerBoard[i].push('?'); 
  }
}

// print the board
for (i = 0; i < rowColumn; i++) {
  console.log(playerBoard[i]); 
}


