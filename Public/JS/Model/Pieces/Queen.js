class Queen extends PieceInterface {
    constructor(team, x, y) {
        super(team, x, y)
        this.color = team === 1 ? "white" : "black";
        this.moves = []
        
        this.bishop = new Bishop(team, x, y);
        this.rook = new Rook(team, x, y);
    }
    

    updatePosition(x, y) {
        this.x = x;
        this.y = y;
        this.bishop.x = x;
        this.bishop.y = y;
        this.rook.x = x;
        this.rook.y = y;
    }
    
    legalMoveMethod() {
        this.moves = [];
        this.bishop.legalMoveMethod();
        this.rook.legalMoveMethod();

        this.moves = [...this.bishop.moves, ...this.rook.moves];
    }
}