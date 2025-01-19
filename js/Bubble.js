export default class Bubble{
    constructor(height, posX, posY, lifespan, speed){
        console.log(Window.gameSpeed, speed);
        this.width = height;
        this.height = height;
        this.x = posX;
        this.y = posY;
        this.speed = speed;
        this.runSpeed = speed * Window.gameSpeed;
        this.devider = 1 / this.runSpeed;
        this.image = this.createImage("assets/sprites/bubble.png");
        this.lifespan = lifespan;
        this.popped = false;
    }
    update(){
        if(!this.animatationFrame()){
            return;
        }
        this.lifespan --;
        if(this.lifespan === 0){
            this.pop();
            return;
        }
        if(this.popped ===true){
            return;
        }
        let yChange = (Math.random() * 10 - 5) //* this.runSpeed;
        let xChange = (Math.random() * 10 - 5) //* this.runSpeed;
        this.x += xChange;
        this.y += yChange;
        this.draw();
    }
    draw(){
        Window.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    pop(){
        console.log("Pop!")
        this.popped = true;
    }
    createImage(imageUrl){
        let image = new Image();
        image.src = imageUrl;
        return image;
    }
    animatationFrame(){
        let Updateframe = Window.frame % this.devider;
        console.log(Updateframe);
        if(!Updateframe === 0 ){
            return false;
        }
        return true;
    }
}