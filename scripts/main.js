
var player1;
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
btn7.addEventListener("click", squarePicker(player, 7));
btn8.addEventListener("click", squarePicker(player, 8));
btn9.addEventListener("click", squarePicker(player, 9));
btn4.addEventListener("click", squarePicker(player, 4));
btn5.addEventListener("click", squarePicker(player, 5));
btn6.addEventListener("click", squarePicker(player, 6));
btn1.addEventListener("click", squarePicker(player, 1));
btn2.addEventListener("click", squarePicker(player, 2));
btn3.addEventListener("click", squarePicker(player, 3));
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
function squarePicker(player1clicka, spot) {
        var spot = btnchoice; 
        var player1clicka = theplayeratm;
        for (var i = 0; i < newGame.boardPositions.length; i++) {
            if (spot === newGame.boardPositions[i]) {
                newGame.boardPositions.splice(i, 1);
                player1clicka.chosenSpots.push(spot); 
                console.log(player1clicka.chosenSpots);
                //add in a "disabled" state for the button clicked perhaps
        }
        if (newGame.boardPositions.length <= 5) {
            newGame.winEval();
            newGame.drawEval(); 
        }
    }
}

function bannerUpdate () {
    console.log(bannerstuff);
}

function otherGameResetFunction() {
    console.log(timeout);
}