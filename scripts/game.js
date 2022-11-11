var Player = require("./player.js");

class Game {
    constructor() {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    }

    select(parameter) {
        for (var i = 0; i < this.boardPositions.length; i++) {
            if (parameter === this.boardPositions[i]) {
                this.boardPositions.splice(i, 1);
                player.chosenSpots.push(parameter);  //how do I differentiate which player? They're going to have discrete arrays
            }
        }
            //else &/or return stmt wasn't working in replit, but I need here the piece where a player can't select something not there. 
            //I might not need anything? Since there's nothing to pull from the Array if the position has already been selected.
    }
    
    var playerThem = new Player(id, token);
    var playerOther = new Player(id, token);
}

//per Architecture instructions, Game file must include:
//2 Player instances
//track the data for the game board
//check game board data for wins
//detect a draw (no wins)
//reset game board for a new game

//COPIED FROM MY REPLIT:
//***Manipulating boardPosition Array and player's chosenSpots Array: ***/
// var boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var playerArray = [];
// var player;
// var number;

// function select(number) {
//   for (var i = 0; i < boardPositions.length; i++) {
//     if (number === boardPositions[i]) {
//       console.log(i);
//       console.log('what is it: ' + number);
//       boardPositions.splice(i, 1);
//       playerArray.push(number);
//     } 
//   }
// }

// select(2);
// select(9);
// select(3);
// select(5);
// select(8);
// console.log(boardPositions);
// console.log(playerArray);
//-------------------------
// //*** WORKING THROUGH WIN RECORDING AND RECOGNITION ***//
// var winCons = [123, 147, 159, 258, 357, 369, 456, 789];
// var winner = [4, 5, 9, 1];
// winner.sort();
// var dinner = winner.join('');
// // console.log(dinner);
// dinnerStr = dinner.toString();
// // console.log(dinnerStr);
// winEval();-->
// if(dinnerStr.includes('1') && dinnerStr.includes('5') && dinnerStr.includes('9')) {
//   console.log(dinnerStr); ---> then trigger a win method (banner, timeout, then reset stuff)
    //ADD DRAW HERE (like if a player array has 5 or more index positions, declare draw)(is it 5 or 4?)
// }
// so do this for every combo ^^
