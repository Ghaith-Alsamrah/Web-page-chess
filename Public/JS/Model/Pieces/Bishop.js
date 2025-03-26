class Bishop extends PieceInterface {
    constructor(team,x,y){
        super(team,x,y)
        this.color = team === 1 ? "white" : "black"; 
        this.moves = []
    }

    legalMoveMethod(){
        this.moves = []
        for (let _x = 0; _x < 8; _x++){
            if (_x != this.x && _y != this.y){
                this.moves.push({x: _x, y: _y})  
                this.moves.push({x: _x, y: 7 - _y})
                this.moves.push({})
                this.moves.push({})
            }    
        

        }
    }
}   