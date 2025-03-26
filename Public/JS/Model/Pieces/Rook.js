class Rook extends PieceInterface {
    constructor(team,x,y){
        super(team,x,y)
        this.color = team === 1 ? "white" : "black"; 
        this.moves = []
    }

    legalMoveMethod(){
        this.moves = []
        for (let _x = 0; _x < 8; _x++){
            if (_x != this.x){
                this.moves.push({x: _x, y: this.y})  
            }    
        }

        for (let _y = 0; _y < 8; _y++){
            if (_y != this.y){
                this.moves.push({x: this.x, y: this._y})
            }
        }
    }



}