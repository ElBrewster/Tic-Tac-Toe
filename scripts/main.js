var newGame;

var spotNumber;

// --------------------------------------------------------
var topBanner = document.querySelector("#topBanner");
var firstPlayerScore = document.querySelector("#firstPlayerScore");
var secondPlayerScore = document.querySelector("#secondPlayerScore");
var startBtn = document.querySelector("#startButton");
var btnField = document.querySelector("#buttonField");
// --------------------------------------------------------
var btn7 = document.querySelector("#numPad7");
var btn8 = document.querySelector("#numPad8");
var btn9 = document.querySelector("#numPad9");
var btn4 = document.querySelector("#numPad4");
var btn5 = document.querySelector("#numPad5");
var btn6 = document.querySelector("#numPad6");
var btn1 = document.querySelector("#numPad1");
var btn2 = document.querySelector("#numPad2");
var btn3 = document.querySelector("#numPad3");
var allNumPad = document.querySelectorAll(".numpadBtns");
// --> use this for resest: allNumPad[i].innerText = default
// --> maybe od a document.createElement for scores in our aside!
// --------------------------------------------------------
startBtn.addEventListener("click", startBtnInit);

// btnField.addEventListener("click", cosmeticClick);
btn7.addEventListener("click", cosmeticClick7);
// btn8.addEventListener("click", cosmeticClick8);
// btn9.addEventListener("click", cosmeticClick9);
// btn4.addEventListener("click", cosmeticClick4);
// btn5.addEventListener("click", cosmeticClick5);
// btn6.addEventListener("click", cosmeticClick6);
// btn1.addEventListener("click", cosmeticClick1);
// btn2.addEventListener("click", cosmeticClick2);
// btn3.addEventListener("click", cosmeticClick3);

function cosmeticClick7() {
    var tokenGrab = newGame.squarePicker(7);
    if (tokenGrab === null) {
        return;
    }
    btn7.textContent = tokenGrab;
    var winningPlayer = newGame.getWinner();
    if (winningPlayer !== null) {
        endGame(winningPlayer.id);
    }
    if (newGame.getTie()) {
        tieGame();
    }
    updateBannerForActivePlayer();
}

function updateBannerForActivePlayer() {
    var current = newGame.getCurrentPlayerName();
    topBanner.innerText = `${current} picks and clicks a spot now.`
}
// --------------------------------------------------------

function startBtnInit() {
    //buttons 1-9 activate (see endGame)
    newGame = new Game();
    activePlayer = player1;
    topBanner.innerText = "Let's goooooo!";
    updateBannerForActivePlayer();
    console.log(player1, player2, newGame);
}

function endGame(winningPlayerName) {
    //disable all buttons execept start
    topBanner.innerText = `Hey yea! ${winningPlayerName} wins this one!`

}
// topBanner.innerText = `${player1.id} picks and clicks a spot now.`
function tieGame() {
    //disable all buttons except start
    topBanner.innerText = "Game Over: Nobody Won!"
}
// end of game function that calls gameReset()
function updateScoreSheet(player1, player2) {
    topBanner.innerText = `Hey yea! ${player1.id} wins this one!`
    topBanner.innerText = "Game Over: Nobody Won!"

    if (player1.won === true) {
        firstPlayerScore.innerText = `First Player: ${player1.wins}`;
    }
    if (player2.won === true) {
        secondPlayerScore.innerText = `Second Player: ${player2.wins}`;
    }
}
