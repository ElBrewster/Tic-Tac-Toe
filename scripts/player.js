
class Player {
    constructor(id, token) {
        this.id = id;
        this.token = token;
        this.tokenPlacement = false;
        this.wins = 0;
        this.chosenSpots = [];
    } 

    increaseWins() {
        this.wins++;
    }

    resetChosenSpots() {
        this.chosenSpots = [];
    }
}
