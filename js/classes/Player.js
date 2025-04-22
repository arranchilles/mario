import Camera from "./Camera.js";
import Control from "./Controls.js";
import Entity from "./Entity.js";
export default class Player extends Entity{
    constructor(name, posX, posY, spriteSheet){
        super(name, posX, posY, spriteSheet);
       this.controls = new Control(this);
       this.controls.moveRight = this.moveRight;
       this.controls.moveLeft = this.moveLeft;
       this.camera = new Camera;
       this.name = name;
    }
    announce(){
        console.log("Player is active", this);
    }
    /*render(sprite){
        this.sprites.get(this.name).outputSprite(Window.ctx, sprite, this.posX, this.posY);//shortcut function
    }*/
    moveRight(){
        let xLimit  = Window.level.buffer.canvas.width;
        if(this.entity.posX > xLimit - 16 ){
            return;
        }
        this.entity.posX +=3;
       // this.entity.camera.moveRight(3);
        if(Window.config.debug.player){
            console.log(this.entity.posX);
        }
        if( this.entity.posX >= 85 &&  this.entity.posX <= (xLimit * 16 - 170)){
            this.entity.camera.moveRight(3);
        }
        if(this.entity.animation != this.entity.moveRight){
            if(Window.config.debug.player){
                console.log(this.entity.moveRight);
            }
            this.entity.currentAnimation = this.entity.animations.moveRight;
        }
        this.entity.direction = "Right";
    }
    moveLeft(){
        let xLimit = Window.level.buffer.canvas.width;
        if(this.entity.posX < 0 ){
            return;
        }
        this.entity.posX -=3;
        if(this.entity.animation != this.entity.moveLeft){
            this.entity.currentAnimation =this.entity.animations.moveLeft;
        }
        if( this.entity.posX >= 85 &&  this.entity.posX <= (xLimit * 16 - 170)){
            this.entity.camera.moveLeft(3);
        }
        this.entity.direction = "Left";
    }


}