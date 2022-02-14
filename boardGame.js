// user input
let userInput = require('readline-sync');

// ask for player name
let askName = userInput.question("Player Name: ");
// convert first letter of name to uppercase
let playerName = askName.charAt(0).toUpperCase() + askName.slice(1);
// print name
console.log(`Welcome ${playerName}!`);

/* Player Board (3x3)
[?], [?], [?]
[?], [?], [?]
[?], [?], [?]
*/
// initialize a player board
const playerBoard = [];
// initialize number of rows
const rowCount = 3;
// initialize number of columns
const columnCount = 3;

// add rows
for (let i = 0; i < rowCount; i++) {
  playerBoard.push([]);
  // add columns
  for (let j = 0; j < columnCount; j++) {
    playerBoard[i].push('?');
  }
}

// print the original board
console.log("The Board");
for (i = 0; i < rowCount; i++) {
  console.log(playerBoard[i]);
}

// initialize number of guesses
const maxGuesses = 3;
let playerGuess = maxGuesses;

// randomly pick the treasure position from 0 to 3
shipColumn = Math.floor(Math.random() * 3);
shipRow = Math.floor(Math.random() * 3);

// // print randomly selected sample row and column
// console.log(`Ship Position: Row: ${shipRow}, Column: ${shipColumn}`);

while (playerGuess > 0) {
  // print number of guesses
  console.log(`Remaining Guess: ${playerGuess}`);

  // ask user for moves
  let askMove = userInput.question(`Enter your move: (Example: 1, 2 (it means Row 1 and Column 2)): `);
  
  // split two numbers the user inputs
  let userMove = askMove.split(' ');

  // check if the user only inputs 0, 1, or 2
  if (userMove[0] > 2 || userMove[1] > 2) {
    console.log(`Please enter a number between 0, 1 and 2`);
  } else {
      // check if the user inputs only two numbers
      if (askMove.length > 3) {
        console.log(`Please enter only two numbers`);
      } else {
        // convert two numbers into first and second index of array
        let userRow = +userMove[0];
        let userColumn = +userMove[1];
        
        // change row and column "?" to "x" the user picks
        playerBoard[userRow][userColumn] = 'x';

        // print new board
        for (i = 0; i < rowCount; i++) {
          console.log(playerBoard[i]);
        }
        // print if the user hits the ship
        if (userRow === shipRow && userColumn === shipColumn) {
          console.log("Congratulations, You found the TREASURE!");
          // break to end the program
          break;
        }
      }
  }
  // post-decrement the value of playerGuess
  playerGuess--;
}
