// var player1 = new Player('Rex', 'smelly');
// var player2 = new Player('Lex', 'stinky');
// var newGame = new Game(player1, player2);
var player1;
var player2;
var newGame;
var spotNumber;
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
// var allNumPadBtns = document.querySelectorAll(".numpadBtn");
// --------------------------------------------------------
startBtn.addEventListener("click", startBtnInit);
btn7.addEventListener("click", whatever);
btn8.addEventListener("click", whatever);
btn9.addEventListener("click", whatever);
btn4.addEventListener("click", whatever);
btn5.addEventListener("click", whatever);
btn6.addEventListener("click", whatever);
btn1.addEventListener("click", whatever);
btn2.addEventListener("click", whatever);
btn3.addEventListener("click", whatever);
// --------------------------------------------------------

function startBtnInit() {
    //buttons 1-9 activate
    //this starts my game
    player1 = new Player('Rex', 'smelly');
    player2 = new Player('Lex', 'stinky');
    newGame = new Game(player1, player2);
    // newGame.gameNo++;
    // newGame.setPlayerTurn(player1, player2);
    //banner announcement
    console.log(player1, player2, newGame);

}

function whatever() {
    //how do I attach specific variable to these eventListeners? or what even am I doing here?
    console.log(newGame);
} 
//something that runs squarePicker so that it loops through turn switches until positions filled at 9

function bannerUpdate () {
    console.log(bannerstuff);
}

function otherGameResetFunction() {
    console.log(timeout);
}