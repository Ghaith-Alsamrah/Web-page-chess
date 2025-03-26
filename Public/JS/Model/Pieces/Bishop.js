class Bishop extends PieceInterface {
    constructor(team, x, y) {
        super(team, x, y)
        this.color = team === 1 ? "white" : "black";
        this.moves = []
    }
    
    legalMoveMethod() {
        this.moves = []
        const directions = [
            {dx: 1, dy: 1},  
            {dx: 1, dy: -1},  
            {dx: -1, dy: 1},  
            {dx: -1, dy: -1}  
        ];
        for (const dir of directions) {
            for (let step = 1; step < 8; step++) {
                const newX = this.x + dir.dx * step;
                const newY = this.y + dir.dy * step;
                
                if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                    this.moves.push({x: newX, y: newY});
                }
            }
        }
    }
}
