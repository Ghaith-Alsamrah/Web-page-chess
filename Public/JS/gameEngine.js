
class Board {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        if (!this.canvas){
            console.log("Error accesing the canvas")
        }
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width; 
        this.height = this.canvas.height;
        this.draw();
    }



    draw() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, 50, 50);
        this.ctx.fillStyle = "#000000";
        this.ctx.fill();
        this.ctx.closePath();
    }


}


const board = new Board();
