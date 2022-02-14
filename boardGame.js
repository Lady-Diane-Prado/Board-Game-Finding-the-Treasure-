// variable for all user inputs
let userInput = require("readline-sync");

// ask for user name
let askName = userInput.question("What is your name?");
// make the first letter of name capitalize
let playerName = askName.charAt(0).toUpperCase() + name.slice(1);
// print name
console.log(`Player Name: ${playerName});

// create board
/* Sample Board (3x3)
[?, ?, ?]
[?, ?, ?]
[?, ?, ?]
/*

const 
