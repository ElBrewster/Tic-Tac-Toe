
class Game {
    constructor(player1, player2) {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.playerX = `${player1.id}: ${player1.token}` || "heart";
        this.playerO = `${player2.id}: ${player2.token}` || "star";
        this.gameNo = 0;
        this.winner = false;
        this.draw = false;
        this.firstTurn = player1;
        //^^ reassign to 2 at reset
    } 

    gameEndCheck() {
        if (newGame.boardPositions.length <= 5) {
            newGame.winEval();
            newGame.drawEval(); 
        }
    }
    
    winEval(player1) {
        player1.chosenSpots.sort();
        console.log(player1.chosenSpots);
        var chosenSpots1 = player1.chosenSpots.join("");
        var spotsStr = chosenSpots1.toString();
        console.log(spotsStr);
        if(spotsStr.includes("1") && spotsStr.includes("2") && spotsStr.includes("3")) {
            console.log(spotsStr);
            this.winner = true;
            topBanner.innerText = `Hey yea! ${player1.id} wins this one!`
        } else if(spotsStr.includes("1") && spotsStr.includes("4") && spotsStr.includes("7")) {
            this.winner = true;
            topBanner.innerText = `Hey yea! ${player1.id} wins this one!`
            console.log(spotsStr); 
        } else if(spotsStr.includes("1") && spotsStr.includes("5") && spotsStr.includes("9")) {
            this.winner = true;
            topBanner.innerText = `Hey yea! ${player1.id} wins this one!`
            console.log(spotsStr); 
        } else if(spotsStr.includes("2") && spotsStr.includes("5") && spotsStr.includes("8")) {
            this.winner = true;
            player1.wins++;
            topBanner.innerText = `Hey yea! ${player1.id} wins this one!`
            console.log(spotsStr); 
        } else if(spotsStr.includes("3") && spotsStr.includes("5") && spotsStr.includes("7")) {
            this.winner = true;
            topBanner.innerText = `Hey yea! ${player1.id} wins this one!`
            console.log(spotsStr, "YOU WIN!"); 
        } else if(spotsStr.includes("3") && spotsStr.includes("6") && spotsStr.includes("9")) {
            this.winner = true;
            topBanner.innerText = `Hey yea! ${player1.id} wins this one!`
            console.log(spotsStr); 
        } else if(spotsStr.includes("4") && spotsStr.includes("5") && spotsStr.includes("6")) {
            this.winner = true;
            topBanner.innerText = `Hey yea! ${player1.id} wins this one!`
            console.log(spotsStr); 
        } else if(spotsStr.includes("7") && spotsStr.includes("8") && spotsStr.includes("9")) {
            this.winner = true;
            topBanner.innerText = `Hey yea! ${player1.id} wins this one!`
            console.log(spotsStr); 
        } else {
            this.drawEval();
        }
        //   ---> then trigger a win method (banner, timeout, then reset stuff)
        //     ADD DRAW HERE (like if a player array has 5 or more index positions, declare draw)(is it 5 or 4?)
    }
    
    drawEval() {
        if (this.boardPositions.length === 0 && this.winner === false) {
            this.draw = true;
        }
        if(this.draw === true) {
            // ^^change to truthy val
            topBanner.innerText = "Game Over: Nobody Won!"
            this.gameReset();
        }
    }
    
    gameReset() {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        //add the boolean switch here to switch starting player
    }
}





//per Architecture instructions, Game file must include:
//2 Player instances
//track the data for the game board
//check game board data for wins
//detect a draw (no wins)
//reset game board for a new game

// var winCons = [123, 147, 159, 258, 357, 369, 456, 789];

    // setPlayerTurn(player1, player2) {
    //     if(player1.tokenPlacement === false) {
    //         player1.squarePicker(player1, spot);
    //         player1.tokenPlacement = true;
    //         player2.tokenPlacement = false;
    //     }
    //     if(player2.tokenPlacement === false) {
    //         player2.squarePicker(player2, spot);
    //         player2.tokenPlacement = true;
    //         player1.tokenPlacement = false;
    //     }
    //     console.log(player1, player2);
    // }
