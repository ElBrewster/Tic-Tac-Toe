class Game {
    constructor(player1Name, player2Name) {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.player1 = new Player(player1Name, "☝");
        this.player2 = new Player(player2Name, "😍");
        this.activePlayer = this.player1;
        this.goesFirst = this.player1;
        // this.gameNo = 0;
        this.winner = false;
        this.draw = false;
    
    } 

    getCurrentPlayerName() {
        return this.activePlayer.id;
    }

    getCurrentNicknamePlayer1() {
        return this.player1.id;
    }
    
    getCurrentNicknamePlayer2() {
        return this.player2.id;
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

    switchWhoGoesFirst() {
        if (this.goesFirst === this.player1) {
            this.goesFirst = this.player2;
        } else if (this.goesFirst === this.player2) {
            this.goesFirst = this.player1;
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
        this.switchWhoGoesFirst();
        this.activePlayer = this.goesFirst;
        this.winner = false;
        this.draw = false;
    }

    getPlayer1Score() {
        return this.player1.wins;
    }

    getPlayer2Score() {
        return this.player2.wins;
    }
}

