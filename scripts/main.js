
var player1;
// this is undefined until you define it
var player2;
var newGame;
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

function startBtnInit() {
    //buttons 1-9 activate
    //this starts my game
    player1 = new Player('Rex', 'smelly');
    player2 = new Player('Lex', 'stinky');
    newGame = new Game(player1, player2);
    // newGame.gameNo++;
    newGame.setPlayerTurn(player1, player2);
    //banner announcement

}

//something that runs squarePicker so that it loops through turn switches until positions filled at 9
function squarePicker(player.click) {
    for (var i = 0; i < this.boardPositions.length; i++) {
        if (click === this.boardPositions[i]) {
            this.boardPositions.splice(i, 1);
            player.chosenSpots.push(click); 
            console.log(player.chosenSpots);
            //add in a "disabled" state for the button clicked, or do this in the DOM
        }
    }
    if (this.boardPositions.length <= 5) {
        this.winEval();
        this.drawEval(); 
    }
}

function bannerUpdate () {
    console.log(bannerstuff);
}

function otherGameResetFunction() {
    console.log(timeout);
}