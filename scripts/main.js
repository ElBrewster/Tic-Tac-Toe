// var player1 = new Player('Rex', 'smelly');
// var player2 = new Player('Lex', 'stinky');
// var newGame = new Game(player1, player2);
var player1;
var player2;
var newGame;
var spotNumber;
// --------------------------------------------------------
var topBanner = document.querySelector("#topBanner");
var startBtn = document.querySelector("#startButton");
var btnField = document.querySelectorAll(".numpadBtn");
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
    player1 = new Player('Rex', "&#128566");
    player2 = new Player('Lex', "&#128565");
    newGame = new Game(player1, player2);
    // newGame.gameNo++;
    // newGame.setPlayerTurn(player1, player2);
    //banner announcement
    topBanner.innerText = "Let's goooooo!";

    console.log(player1, player2, newGame);

}

function whatever() {
    //how do I attach specific variable to these eventListeners? or what even am I doing here?
    console.log(newGame);
} 
//something that runs squarePicker so that it loops through turn switches until positions filled at 9

function bannerUpdate () {
    //this is more for record-keeping
    topBanner.innerText = "Let's goooooo!"
    topBanner.innerText = `${player1} picks and clicks a spot now.`
    topBanner.innerText = "Game Over: Nobody Won!"
    topBanner.innerText = `Hey yea! ${player1} wins this one!`
    //on second draw: "Maybe bribe your friend with sweets to let you win!" and so on
    //"What if you took turns planning to win?"
    //"Tic tac toe has garbage gameplay design, learn social engineering to get the results you want"
    //"I bet you wish you were playing chess!"
    //"Take a sharpie and draw a 'cat's tail' on this thing!"
    console.log(bannerstuff);
}

function otherGameResetFunction() {
    console.log(timeout);
}

//HTML emoji stuf: lightning 9889 star11088 diamond 128142 explosion128165
//explosion speech bubble 128495 siren 128680
//point left arrow
//128566 face without mouth
//128565	 face with x eyes