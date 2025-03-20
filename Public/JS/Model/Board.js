class Board{
    constructor(){
        this.board  = Array(8).fill().map(() => Array(8).fill(null));
    }

    fillBoard(){
        //Fills the board with the starting position 
        //Creating pieces and assigning them to team 
        //While they are getting filled the previous pieces has to update their legal moves
    }

    calculateLegalMoves(piece){
        //Checks what the legal moves are for the specific piece 
    }

    updateBoard(){
        //Updates the board after verifying the move is legal 
    }
}