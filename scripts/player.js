
class Player {
    constructor(nickname, icon) {
        this.id = nickname;
        this.token = icon;
        //"&#128566" or "&#128565"
        this.tokenPlacement = false;
        this.wins = 0;
        this.chosenSpots = [];
        // this.start = true;
    } 

    squarePicker(spotNumber) {
        for (var i = 0; i < newGame.boardPositions.length; i++) {
            if (spotNumber === newGame.boardPositions[i]) {
                newGame.boardPositions.splice(i, 1);
                this.chosenSpots.push(spotNumber); 
                console.log(this.chosenSpots);
                //add in a "disabled" state for the button clicked perhaps
            }
        }
    }

    increaseWins() {
        this.wins++;
    }
}

//per Architecture instructions, Player file must include methods:
//constructor with id, token, and wins
//increaseWins() to count player's wins

//tokens: hot or cold? to be warm or cool button tones?