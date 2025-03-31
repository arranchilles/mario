export default class Camera{
    constructor(x = 0, y = 0){
        this.posX = x;
        this.posY = y;
        this.ctx = Window.ctx;
    }
    moveRight(xdiff){
        this.posX += xdiff;
        //this.ctx.save();
        this.ctx.translate(-xdiff, 0);
        //this.ctx.restore();
    }
    moveLeft(xdiff){
        this.posX -= xdiff;
       // this.ctx.save();
        this.ctx.translate(xdiff, 0);
        //this.ctx.restore();
    }
    panTo(endX, endY, time){
        let xStep = Math.abs(endX  - this.posX)/ time;
        let yStep = Math.abs(endY  - this.posY) / time;
        let interval = /*time / (Math.abs(endX  - this.posX) / xStep);//*/Window.timer.timePerFrame;

        const callback = () =>{
            if(endX > this.posX){
                requestAnimationFrame(this.moveRight(xStep));
            }
            if(endX < this.posX){
                requestAnimationFrame(this.moveleft(xStep))
            }
            if(endY > this.posY){
                requestAnimationFrame(this.moveUp(yStep));
            }
            if(endY < this.posY){
                requestAnimationFrame(this.moveDown(yStep));
            }
            if(endX === this.posX && endY == this.posY ){
                clearInterval(id);
            } 
        }
        let id = setInterval(callback, interval);
    }
}