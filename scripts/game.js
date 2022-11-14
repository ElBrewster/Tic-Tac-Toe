
class Game {
    constructor(player1, player2) {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.playerX = `${player1.id}: ${player1.token}` || "heart";
        this.playerO = `${player2.id}: ${player2.token}` || "star";
        this.gameNo = 0;
        this.winner = false;
        this.draw = false;
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

    }
    
    drawEval() {
        if (this.boardPositions.length === 0 && this.winner === false) {
            this.draw = true;
        }
        if(this.draw === true) {
            topBanner.innerText = "Game Over: Nobody Won!"
            this.gameReset();
        }
    }
    
    gameReset() {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
}
