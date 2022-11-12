
//per Architecture instructions, main file contains all DOM related Javascript
//try to use parent nodes or sth like that for event bubbling, especially with our button field
var gamerThem = new Player(them, theirToken);
var gamerOther = new Player(other, otherToken);
var tictacGame = new Game();
// --------------------------------------------------------
var startBtn = document.querySelector("#startButton");
var btnField = document.querySelector("#buttonField");
var btn7 = document.querySelector("#numPad7");
var btn8 = document.querySelector("#numPad8");
var btn9 = document.querySelector("#numPad9");
var btn4 = document.querySelector("#numPad4");
var btn5 = document.querySelector("#numPad5");
var btn6 = document.querySelector("#numPad6");
var btn1 = document.querySelector("#numPad1");
var btn2 = document.querySelector("#numPad2");
var btn3 = document.querySelector("#numPad3");
// --------------------------------------------------------
startBtn.addEventListener("click", startNewGame);
btn7.addEventListener("click", squarePicker(7));
// --------------------------------------------------------
var them;
var theirToken;
var other;
var otherToken;

function startNewGame(them, theirToken, other, otherToken) {
    //when the start button is clicked, do this:
    var gamerThem = new Player(them, theirToken);
    var gamerOther = new Player(other, otherToken);
    var tictacGame = new Game();
    //set turn
}

function playerTurn() {
    //switch turn -->this probably goes in our Game class?
}


function squarePicker(spot) {
    for (var i = 0; i < tictacGame.boardPositions.length; i++) {
        if (spot === tictacGame.boardPositions[i]) {
            tictacGame.boardPositions.splice(i, 1);
            gamerThem.chosenSpots.push(spot); 
            console.log(gamerThem.chosenSpots);
             //how do I differentiate which player? They're going to have discrete arrays
        }
    }

}

//*** WORKING THROUGH WIN RECORDING AND RECOGNITION ***//
var winCons = [123, 147, 159, 258, 357, 369, 456, 789];
var winner = [4, 5, 9, 1];
winner.sort();
var dinner = winner.join("");
// console.log(dinner);
var dinnerStr = dinner.toString();
// console.log(dinnerStr);
function winEval() {
    if(dinnerStr.includes("1") && dinnerStr.includes("2") && dinnerStr.includes("3")) {
        console.log(dinnerStr);
    } 
    if(dinnerStr.includes("1") && dinnerStr.includes("4") && dinnerStr.includes("7")) {
        console.log(dinnerStr); 
    }
    if(dinnerStr.includes("1") && dinnerStr.includes("5") && dinnerStr.includes("9")) {
        console.log(dinnerStr); 
    }
    if(dinnerStr.includes("2") && dinnerStr.includes("5") && dinnerStr.includes("8")) {
        console.log(dinnerStr); 
    }
    if(dinnerStr.includes("3") && dinnerStr.includes("5") && dinnerStr.includes("7")) {
        console.log(dinnerStr); 
    }
    if(dinnerStr.includes("3") && dinnerStr.includes("6") && dinnerStr.includes("9")) {
        console.log(dinnerStr); 
    }
    if(dinnerStr.includes("4") && dinnerStr.includes("5") && dinnerStr.includes("6")) {
        console.log(dinnerStr); 
    }
    if(dinnerStr.includes("7") && dinnerStr.includes("8") && dinnerStr.includes("9")) {
        console.log(dinnerStr); 
    }
    //   ---> then trigger a win method (banner, timeout, then reset stuff)
    //     ADD DRAW HERE (like if a player array has 5 or more index positions, declare draw)(is it 5 or 4?)
}
// so do this for every combo ^^