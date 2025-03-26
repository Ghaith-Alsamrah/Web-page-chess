class PieceInterface{
    constructor(team, x, y){
        if (this.constructor === PieceInterface){
            throw new Error("Cannot initialize an abstract class.")
        }
        this.team = team; 
        this.x = x;
        this.y = y;
        this.legalMoves = [];
    }

    legalMoveMethod() {
        throw new Error("Method 'legalMoveMethod()' must be implemented")
    }
}