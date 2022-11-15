var newGame;
var timeout;
var topBanner = document.querySelector("#topBanner");
var firstPlayerScore = document.querySelector("#firstPlayerScore");
var secondPlayerScore = document.querySelector("#secondPlayerScore");
var startBtn = document.querySelector("#startButton");
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
// --------------------------------------------------------
window.addEventListener("load", disableNumpad);
startBtn.addEventListener("click", startBtnInit);
btn7.addEventListener("click", cosmeticClick7);
btn8.addEventListener("click", cosmeticClick8);
btn9.addEventListener("click", cosmeticClick9);
btn4.addEventListener("click", cosmeticClick4);
btn5.addEventListener("click", cosmeticClick5);
btn6.addEventListener("click", cosmeticClick6);
btn1.addEventListener("click", cosmeticClick1);
btn2.addEventListener("click", cosmeticClick2);
btn3.addEventListener("click", cosmeticClick3);
// --------------------------------------------------------
function startBtnInit() {
    var timeout2;
    enableNumpad();
    resetTokensToNumpad();
    newGame = new Game(player1NameInput.value, player2NameInput.value);
    topBanner.innerText = "Let's goooooo!";
    timeout2 = setTimeout(updateBannerForActivePlayer, 500);
}

function pauseThenRestart() {
    timeout = setTimeout(resetGameAfterTimeoutForCurrentPlayers, 5000);
}

function resetGameAfterTimeoutForCurrentPlayers() {
    enableNumpad();
    resetTokensToNumpad();
    newGame.gameReset();
    updateBannerForActivePlayer();
}

function cosmeticClick7() {
    cosmeticClick(btn7, 7);
}

function cosmeticClick8() {
    cosmeticClick(btn8, 8);
}

function cosmeticClick9() {
    cosmeticClick(btn9, 9);
}

function cosmeticClick4() {
    cosmeticClick(btn4, 4);
}

function cosmeticClick5() {
    cosmeticClick(btn5, 5);
}

function cosmeticClick6() {
    cosmeticClick(btn6, 6);
}

function cosmeticClick1() {
    cosmeticClick(btn1, 1);
}

function cosmeticClick2() {
    cosmeticClick(btn2, 2);
}

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

function endGame(winningPlayerName) {
    disableNumpad();
    scoreSheetUpdates();
    topBanner.innerText = `Hey yea! ${winningPlayerName} wins this one!`
    pauseThenRestart()
}

function tieGame() {
    disableNumpad();
    scoreSheetUpdates();
    topBanner.innerText = "Game Over: Nobody Won!"
    pauseThenRestart()
} 

function scoreSheetUpdates() {
    var currentScore1 = newGame.getPlayer1Score();
    var currentScore2 = newGame.getPlayer2Score();
    var currentNickname1 = newGame.getCurrentNicknamePlayer1();
    var currentNickname2 = newGame.getCurrentNicknamePlayer2();
    firstPlayerScore.innerText = `${currentNickname1} has ${currentScore1} wins!`
    secondPlayerScore.innerText = `${currentNickname2} has ${currentScore2} wins!`
}

function updateBannerForActivePlayer() {
    var current = newGame.getCurrentPlayerName();
    topBanner.innerText = `${current} picks and clicks a spot now.`
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