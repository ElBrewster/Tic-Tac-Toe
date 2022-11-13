
class Player {
    constructor(nickname, icon) {
        this.id = nickname;
        this.token = icon;
        this.tokenPlacement = false;
        this.wins = 0;
        this.chosenSpots = [];
        // this.start = true;
    }

    increaseWins() {
        this.wins++;
    }
}

//per Architecture instructions, Player file must include methods:
//constructor with id, token, and wins
//increaseWins() to count player's wins

//tokens: hot or cold? to be warm or cool button tones?