
//per Architecture instructions, main file contains all DOM related Javascript
//try to use parent nodes or sth like that for event bubbling, especially with our button field
// var playerObj1 = new Player(them, theirToken);
// var playerObj2 = new Player(other, otherToken);
// var gameObj1 = new Game();
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
var allNumPadBtns = document.querySelectorAll(".numpadBtn");
// --------------------------------------------------------
startBtn.addEventListener("click", startBtnInit);
btn7.addEventListener("click", squarePicker(spot));

// ---> how do I assign the #7 to button 7 always?
// --------------------------------------------------------

//*** WORKING THROUGH WIN RECORDING AND RECOGNITION ***//
// var winCons = [123, 147, 159, 258, 357, 369, 456, 789];

function startBtnInit() {
    //buttons 1-9 activate
    //this starts my game
    var player1 = new Player('Rex', 'smelly');
    var player2 = new Player('Lex', 'stinky');
    var newGame = new Game();
    // newGame.gameNo++;
    newGame.setPlayerTurn(player1, player2);
    //banner announcement

}

function bannerUpdate () {
    console.log(bannerstuff);
}

function otherGameResetFunction() {
    console.log(timeout);
}