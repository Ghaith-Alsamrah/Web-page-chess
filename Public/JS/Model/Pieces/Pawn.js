class Pawn extends PieceInterface {
    constructor(team, x, y) {
        super(team, x, y)
        this.color = team === 1 ? "white" : "black";
        this.moves = []
        this.hasMoved = false; 
    }
    
    legalMoveMethod(board) {
        this.moves = []

        const direction = this.team === 1 ? -1 : 1; 
        
        const newY = this.y + direction;
        
        if (newY >= 0 && newY < 8) {
                this.moves.push({x: this.x, y: newY});
                
                if (!this.hasMoved) {
                    const doubleY = this.y + (direction * 2);
                    if (doubleY >= 0 && doubleY < 8) {
                            this.moves.push({x: this.x, y: doubleY});
                    }
                

                }
        }
    }
}