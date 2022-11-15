
class Game {
    constructor() {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.player1 = new Player("me", "☝");
        this.player2 = new Player("you", "😍");
        this.activePlayer = this.player1;
        this.gameNo = 0;
        this.winner = false;
        this.draw = false;
    } 

    getCurrentPlayerName() {
        return this.activePlayer.id;
    }

    squarePicker(spotNumber) {
        var token;
        if (!this.boardPositions.includes(spotNumber)){
            return null;
        }
        for (var i = 0; i < this.boardPositions.length; i++) {
            if (spotNumber === this.boardPositions[i]) {
                this.boardPositions.splice(i, 1);
                this.activePlayer.chosenSpots.push(spotNumber); 
                token = this.activePlayer.token;
            }
        }

        this.gameEndCheck();
        if (this.winner === true || this.draw === true) {
        return token;
        }

        this.switchActivePlayer();
        return token;
    }

    switchActivePlayer() {
        if (this.activePlayer === this.player1) {
            this.activePlayer = this.player2;
        } else if (this.activePlayer === this.player2) {
            this.activePlayer = this.player1;
        }
    }

    gameEndCheck() {
        this.winEval();
        this.drawEval(); 
    
    }
    
    winEval() {
        this.activePlayer.chosenSpots.sort();
        var chosenSpots1 = this.activePlayer.chosenSpots.join("");
        var spotsStr = chosenSpots1.toString();
        console.log(spotsStr);
        if(spotsStr.includes("1") && spotsStr.includes("2") && spotsStr.includes("3")) {
            this.winner = true;
            this.activePlayer.increaseWins();
        } else if(spotsStr.includes("1") && spotsStr.includes("4") && spotsStr.includes("7")) {
            this.winner = true;
            this.activePlayer.increaseWins();
        } else if(spotsStr.includes("1") && spotsStr.includes("5") && spotsStr.includes("9")) {
            this.winner = true;
            this.activePlayer.increaseWins();
        } else if(spotsStr.includes("2") && spotsStr.includes("5") && spotsStr.includes("8")) {
            this.winner = true;
            this.activePlayer.increaseWins();
        } else if(spotsStr.includes("3") && spotsStr.includes("5") && spotsStr.includes("7")) {
            this.winner = true;
            this.activePlayer.increaseWins();
        } else if(spotsStr.includes("3") && spotsStr.includes("6") && spotsStr.includes("9")) {
            this.winner = true;
            this.activePlayer.increaseWins();
        } else if(spotsStr.includes("4") && spotsStr.includes("5") && spotsStr.includes("6")) {
            this.winner = true;
            this.activePlayer.increaseWins();
        } else if(spotsStr.includes("7") && spotsStr.includes("8") && spotsStr.includes("9")) {
            this.winner = true;
            this.activePlayer.increaseWins();
        }

    }
    
    drawEval() {
        if (this.boardPositions.length === 0 && this.winner === false) {
            this.draw = true;
        }
    }
    
    getWinner() {
        if (this.winner === true) {
            return this.activePlayer;
        } else {
            return null;
        }
    }

    getTie() {
        return this.draw;
    }

    gameReset() {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.player1.resetChosenSpots();
        this.player2.resetChosenSpots();
    }
}
