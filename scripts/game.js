
class Game {
    constructor() {
        this.boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.player1 = "X";
        this.player2 = "O";
        this.gameNo = 0;
    } 

    startNewGame() {
        var gamerThem = new Player(them, theirToken);
        var gamerOther = new Player(other, otherToken);
        this.
    }
    setPlayerTurn(player1, player2) {
        //switch turn -->this probably goes in our Game class?
            // do I instantiate two instances of gamers here? or in the Game class somewhere?
        if(player1.tokenPlacement === false) {
            //run squarePicker, in squarePicker switch to "true"
            player1.tokenPlacement = true;
            player2.tokenPlacement = false;
        }
        if(player2.tokenPlacement === false) {
            //run squarePicker, in squarePicker switch to "true"
            player2.tokenPlacement = true;
            player1.tokenPlacement = false;
        }
        console.log(player1, player2);
    }
}





//per Architecture instructions, Game file must include:
//2 Player instances
//track the data for the game board
//check game board data for wins
//detect a draw (no wins)
//reset game board for a new game

