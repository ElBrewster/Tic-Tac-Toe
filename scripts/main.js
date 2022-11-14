// var player1 = new Player("Rex", "X");
// var player2 = new Player("Lex", "O");
// var newGame = new Game(player1, player2);
var player1;
var player2;
var newGame;
var spotNumber;
// --------------------------------------------------------
var topBanner = document.querySelector("#topBanner");
var firstPlayerScore = document.querySelector("#firstPlayerScore");
var secondPlayerScore = document.querySelector("#secondPlayerScore");
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
// btnField.addEventListener("click", whatever);
btn7.addEventListener("click", cosmeticClick);
function cosmeticClick(player1) {
    alert("hi El");
    btn7.textContent = player1.token;
}
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
    //this starts my game
    //buttons 1-9 activate
    player1 = new Player("Rex", "X");
    // "&#128566"
    player2 = new Player("Lex", "O");
    // "&#128565"
    newGame = new Game(player1, player2);
    // newGame.gameNo++;
    //banner announcement
    topBanner.innerText = "Let's goooooo!";
    //we need a pause here somehow before player turn is announced
    topBanner.innerText = `${player1} picks and clicks a spot now.`

    console.log(player1, player2, newGame);

}

// function turnStart(player1, player2) {
//     topBanner.innerText = `${player1} picks and clicks a spot now.`;
//     newGame.setPlayerTurn(player1, player2);
// }

function setPlayerTurn(player1, player2) {
    var spotNumber;
    if(player1.tokenPlacement === false) {
        topBanner.innerText = `${player1} picks and clicks a spot now.`
        player1.squarePicker(spotNumber);
        player1.tokenPlacement = true;
        player2.tokenPlacement = false;
        //banner function to say who's turn it is
    }
    if(player2.tokenPlacement === false) {
        topBanner.innerText = `${player1} picks and clicks a spot now.`
        player2.squarePicker(spotNumber);
        player2.tokenPlacement = true;
        player1.tokenPlacement = false;
        //banner function to say who's turn it is
    }
    console.log(player1, player2);
}

function updateScoreSheet(player1, player2) {
    if (player1.won === true) {
        firstPlayerScore.innerText = `First Player: ${player1.wins}`;
    }
    if (player2.won === true) {
        secondPlayerScore.innerText = `Second Player: ${player2.wins}`;
    }
}

function otherGameResetFunction() {
    console.log(timeout);
}

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
//HTML emoji stuf: lightning 9889 star11088 diamond 128142 explosion128165
//explosion speech bubble 128495 siren 128680
//point left arrow
//128566 face without mouth
//128565	 face with x eyes
function whatever() {
    // alert("hi El");
    //how do I attach specific variable to these eventListeners? or what even am I doing here?
    console.log(newGame);
} 