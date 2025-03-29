class Board{
    constructor(){
        this.board  = Array(8).fill().map(() => Array(8).fill(null));
    }

    fillBoard(){
        //Fills the board with the starting position 
        //Creating pieces and assigning them to team 
        //While they are getting filled the previous pieces has to update their legal moves

        const pieces = {

            //White pieces 
            0: [new Rook(1, 0, 0), new Knight(1, 1, 0), new Bishop(1, 2, 0), new Queen(1, 3, 0), 
                new King(1, 4, 0), new Bishop(1, 5, 0), new Knight(1, 6, 0), new Rook(1, 7, 0)], 
            
            1: Array(8).fill().map((_, i) => new Pawn(1, i, 1)), 
            //-----------------------------------------------------------------------------// 

            //Black Pieces
            6: Array(8).fill().map((_, i) => new Pawn(0, i, 6)), 
            
            7: [new Rook(0, 0, 7), new Knight(0, 1, 7), new Bishop(0, 2, 7), new Queen(0, 3, 7), 
                new King(0, 4, 7), new Bishop(0, 5, 7), new Knight(0, 6, 7), new Rook(0, 7, 7)] 
        };

        this.board = Array(8).fill().map((_, row) => 
            pieces[row] ? pieces[row] : Array(8).fill(null)
        );
        
    }

    calculateLegalMoves(piece){
        //Checks what the legal moves are for the specific piece 
    }

    updateBoard(){
        //Updates the board after verifying the move is legal 
    }
}