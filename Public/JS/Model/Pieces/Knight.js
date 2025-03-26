class Knight extends PieceInterface {
    constructor(team, x, y) {
        super(team, x, y)
        this.color = team === 1 ? "white" : "black";
        this.moves = []
    }
    
    legalMoveMethod() {
        this.moves = []
        
        const knightMoves = [
            {dx: 2, dy: 1},   
            {dx: 2, dy: -1},  
            {dx: -2, dy: 1},  
            {dx: -2, dy: -1}, 
            {dx: 1, dy: 2},   
            {dx: 1, dy: -2},  
            {dx: -1, dy: 2},  
            {dx: -1, dy: -2}  
        ];
        

        for (const move of knightMoves) {
            const newX = this.x + move.dx;
            const newY = this.y + move.dy;
            
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                this.moves.push({x: newX, y: newY});
            }
        }
    }
}