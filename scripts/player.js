// var Game = require("./g                    ame.js");

class Player {
    constructor(id, token) {
        this.id = id;
        this.token = token;
        this.wins = 0;
        this.chosenSpots = [];
    }

    increaseWins() {
        this.wins++;
    }
}

//per Architecture instructions, Player file must include methods:
//constructor with id, token, and wins
//increaseWins() to count player's wins
