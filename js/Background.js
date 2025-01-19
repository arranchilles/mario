export default class Background {
    constructor(image, speedModifier, width, height){
        this.image = image;
        this.x = 0;
        this.y = 0; 
        this.width = width;
        this.height = height;
        this.x2 = width;
        this.speedModifier = speedModifier;
        this.speed = this.speedModifier * Window.gameSpeed;
    }
    update(){
        this.speed = this.speedModifier * Window.gameSpeed;
        if(this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed;
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw(){
       // console.log(this.speed);
        Window.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        Window.ctx.drawImage(this.image, this.x2, this.y, this.width, this.height)
    }

}