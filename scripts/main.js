var newGame;
var topBanner = document.querySelector("#topBanner");
var firstPlayerScore = document.querySelector("#firstPlayerScore");
var secondPlayerScore = document.querySelector("#secondPlayerScore");
var startBtn = document.querySelector("#startButton");
var btnField = document.querySelector("#buttonField");
var player1NameInput = document.querySelector("#nickName1");
var player2NameInput = document.querySelector("#nickName2");
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
// --> maybe od a document.createElement for scores in our aside!
// --------------------------------------------------------
window.addEventListener("load", disableNumpad);
startBtn.addEventListener("click", startBtnInit);

function startBtnInit() {
    enableNumpad();
    resetTokensToNumpad();
    newGame = new Game(player1NameInput.value, player2NameInput.value);
    topBanner.innerText = "Let's goooooo!";
    // setTimeout(updateBannerForActivePlayer(), 5000);
    updateBannerForActivePlayer();
}


function resetGameAfterTimeoutForCurrentPlayers() {
    enableNumpad();
    resetTokensToNumpad();
    newGame.gameReset();
    updateBannerForActivePlayer();
}

btn7.addEventListener("click", cosmeticClick7);
function cosmeticClick7() {
    cosmeticClick(btn7, 7);
}
btn8.addEventListener("click", cosmeticClick8);
function cosmeticClick8() {
    cosmeticClick(btn8, 8);
}
btn9.addEventListener("click", cosmeticClick9);
function cosmeticClick9() {
    cosmeticClick(btn9, 9);
}
btn4.addEventListener("click", cosmeticClick4);
function cosmeticClick4() {
    cosmeticClick(btn4, 4);
}
btn5.addEventListener("click", cosmeticClick5);
function cosmeticClick5() {
    cosmeticClick(btn5, 5);
}
btn6.addEventListener("click", cosmeticClick6);
function cosmeticClick6() {
    cosmeticClick(btn6, 6);
}
btn1.addEventListener("click", cosmeticClick1);
function cosmeticClick1() {
    cosmeticClick(btn1, 1);
}
btn2.addEventListener("click", cosmeticClick2);
function cosmeticClick2() {
    cosmeticClick(btn2, 2);
}
btn3.addEventListener("click", cosmeticClick3);
function cosmeticClick3() {
    cosmeticClick(btn3, 3);
}

function cosmeticClick(spotButton, spotNumber) {
    var tokenGrab = newGame.squarePicker(spotNumber);
    if (tokenGrab === null) {
        return;
    }
    spotButton.textContent = tokenGrab;
    var winningPlayer = newGame.getWinner();
    if (winningPlayer !== null) {
        endGame(winningPlayer.id);
        
    } else if (newGame.getTie()) {
        tieGame();
    } else {
        updateBannerForActivePlayer();
    }
}

function resetTokensToNumpad() {
    btn7.textContent = 7;
    btn8.textContent = 8;
    btn9.textContent = 9;
    btn4.textContent = 4;
    btn5.textContent = 5;
    btn6.textContent = 6;
    btn1.textContent = 1;
    btn2.textContent = 2;
    btn3.textContent = 3;
}
function disableNumpad() {
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}
function enableNumpad() {
    btn7.disabled = false;
    btn8.disabled = false;
    btn9.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
}


function endGame(winningPlayerName) {
    disableNumpad();
    console.log(`${winningPlayerName} won!`)
    topBanner.innerText = `Hey yea! ${winningPlayerName} wins this one!`
    
}

function tieGame() {
    disableNumpad();
    topBanner.innerText = "Game Over: Nobody Won!"
}
// end of game function that calls gameReset()

function updateBannerForActivePlayer() {
    var current = newGame.getCurrentPlayerName();
    topBanner.innerText = `${current} picks and clicks a spot now.`
}

// function updateScoreSheet(player1, player2) {
//     topBanner.innerText = `Hey yea! ${player1.id} wins this one!`
//     topBanner.innerText = "Game Over: Nobody Won!"

//     if (player1.won === true) {
//         firstPlayerScore.innerText = `First Player: ${player1.wins}`;
//     }
//     if (player2.won === true) {
//         secondPlayerScore.innerText = `Second Player: ${player2.wins}`;
//     }
// }
