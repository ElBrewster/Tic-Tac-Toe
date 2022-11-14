
class Player {
    constructor(id, token) {
        this.id = id;
        this.token = token;
        this.tokenPlacement = false;
        this.wins = 0;
        this.won = false;
        this.chosenSpots = [];
        this.start = true;
    } 

    squarePicker(spotNumber) {
        for (var i = 0; i < newGame.boardPositions.length; i++) {
            if (spotNumber === newGame.boardPositions[i]) {
                newGame.boardPositions.splice(i, 1);
                this.chosenSpots.push(spotNumber); 
                console.log(this.chosenSpots);
            }
        }
    }

    increaseWins() {
        this.wins++;
    }
}
