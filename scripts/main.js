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
btn7.addEventListener("click", cosmeticClick);
btn8.addEventListener("click", cosmeticClick);
btn9.addEventListener("click", cosmeticClick);
btn4.addEventListener("click", cosmeticClick);
btn5.addEventListener("click", cosmeticClick);
btn6.addEventListener("click", cosmeticClick);
btn1.addEventListener("click", cosmeticClick);
btn2.addEventListener("click", cosmeticClick);
btn3.addEventListener("click", cosmeticClick);

function cosmeticClick() {
        alert("hi El");
        btn7.textContent = "☝";
    // btn7.style.property = new style;
}

// function cosmeticClick(player1, player2) {
//     alert("hi El");
//     btn7.textContent = player1.token;
// btn7.style.property = new style;

// --------------------------------------------------------

function startBtnInit() {
    //buttons 1-9 activate
    newGame = new Game();
    activePlayer = player1;
    topBanner.innerText = "Let's goooooo!";
    topBanner.innerText = `${player1.id} picks and clicks a spot now.`
    console.log(player1, player2, newGame);
}

function setPlayerTurn(player1, player2) {
    var spotNumber;
    if(player1.tokenPlacement === false) {
        topBanner.innerText = `${player1.id} picks and clicks a spot now.`
        player1.squarePicker(spotNumber);
        player1.tokenPlacement = true;
        player2.tokenPlacement = false;
        //banner function to say who's turn it is
    }
    if(player2.tokenPlacement === false) {
        topBanner.innerText = `${player1.id} picks and clicks a spot now.`
        player2.squarePicker(spotNumber);
        player2.tokenPlacement = true;
        player1.tokenPlacement = false;
    }
    console.log(player1, player2);
}

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
