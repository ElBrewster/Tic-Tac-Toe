
class Game {
    constructor(player1, player2) {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.playerX = `${player1.id}: ${player1.icon}` || "heart";
        this.playerO = `${player2.id}: ${player2.icon}` || "star";
        // this.newGame = gameObj1;
        this.gameNo = 0;
        this.draw = false;
    } 

    setPlayerTurn(player1, player2) {
        if(player1.tokenPlacement === false) {
            player1.squarePicker();
            player1.tokenPlacement = true;
            player2.tokenPlacement = false;
        }
        if(player2.tokenPlacement === false) {
            player2.squarePicker();
            player2.tokenPlacement = true;
            player1.tokenPlacement = false;
        }
        console.log(player1, player2);
    }

    switchPlayerTurn() {
        this.setPlayerTurn();
    }

    winEval() {
        var winner = [4, 5, 9, 1]; 
        // -->probably refer to our player instances to refer to their array
        winner.sort();
        var dinner = winner.join("");
        var dinnerStr = dinner.toString();
        if(dinnerStr.includes("1") && dinnerStr.includes("2") && dinnerStr.includes("3")) {
            console.log(dinnerStr);
        } else if(dinnerStr.includes("1") && dinnerStr.includes("4") && dinnerStr.includes("7")) {
            console.log(dinnerStr); 
        } else if(dinnerStr.includes("1") && dinnerStr.includes("5") && dinnerStr.includes("9")) {
            console.log(dinnerStr); 
        } else if(dinnerStr.includes("2") && dinnerStr.includes("5") && dinnerStr.includes("8")) {
            console.log(dinnerStr); 
        } else if(dinnerStr.includes("3") && dinnerStr.includes("5") && dinnerStr.includes("7")) {
            console.log(dinnerStr); 
        } else if(dinnerStr.includes("3") && dinnerStr.includes("6") && dinnerStr.includes("9")) {
            console.log(dinnerStr); 
        } else if(dinnerStr.includes("4") && dinnerStr.includes("5") && dinnerStr.includes("6")) {
            console.log(dinnerStr); 
        } else if(dinnerStr.includes("7") && dinnerStr.includes("8") && dinnerStr.includes("9")) {
            console.log(dinnerStr); 
        } else {
            this.drawEval();
        }
        //   ---> then trigger a win method (banner, timeout, then reset stuff)
        //     ADD DRAW HERE (like if a player array has 5 or more index positions, declare draw)(is it 5 or 4?)
    }

    drawEval() {
        if (this.boardPositions.length = 0) {
          this.draw = true;
        }
    }

    gameReset() {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
}





//per Architecture instructions, Game file must include:
//2 Player instances
//track the data for the game board
//check game board data for wins
//detect a draw (no wins)
//reset game board for a new game

// var winCons = [123, 147, 159, 258, 357, 369, 456, 789];
