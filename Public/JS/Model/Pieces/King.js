class King extends PieceInterface {
    constructor(team, x, y) {
        super(team, x, y)
        this.color = team === 1 ? "white" : "black";
        this.moves = []
        this.hasMoved = false; 
    }
    
    legalMoveMethod() {
        this.moves = []
        
        const directions = [
            {dx: 1, dy: 0},   
            {dx: -1, dy: 0},  
            {dx: 0, dy: 1},   
            {dx: 0, dy: -1},  
            {dx: 1, dy: 1},   
            {dx: 1, dy: -1},  
            {dx: -1, dy: 1},  
            {dx: -1, dy: -1}  
        ];
        

        for (const dir of directions) {
            const newX = this.x + dir.dx;
            const newY = this.y + dir.dy;
            
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                this.moves.push({x: newX, y: newY});
            }
        }
    }
}