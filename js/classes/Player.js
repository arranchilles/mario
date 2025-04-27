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
       this.maxXVelocity = 32;
       this.acceleration = 1;
    }
    announce(){
        console.log("Player is active", this);
    }
    /*render(sprite){
        this.sprites.get(this.name).outputSprite(Window.ctx, sprite, this.posX, this.posY);//shortcut function
    }*/
    updateCameraPosition(deltaTime){
        let xLimit  = Window.level.buffer.canvas.width;
        let distance = this.xVelocity * deltaTime;
        if(this.xVelocity > 0){
            if(this.posX > xLimit - 16 ){
                return;
            }
            //this.posX += this.acceleration * deltaTime;
        // this.camera.moveRight(3);
            if(Window.config.debug.player){
                console.log(this.posX);
            }
            if( this.posX >= 85 &&  this.posX <= (xLimit * 16 - 170)){
                this.camera.move(distance);
                console.log(distance, "distance camera changed");
            }
            if(this.animation != this.moveRight){
                if(Window.config.debug.player){
                    console.log(this.moveRight);
                }
                this.currentAnimation = this.animations.moveRight;
            }
            this.direction = "Right";
        }
        if(this.xVelocity < 0){
            if(this.posX < 0 ){
                return;
            }
            if(this.animation != this.moveLeft){
                this.currentAnimation =this.animations.moveLeft;
            }
            if( this.posX >= 85 &&  this.posX <= (xLimit * 16 - 170)){
                this.camera.move(distance);
            }
            this.direction = "Left";
        }
    }
    update(deltaTime){
        this.updatePosition(deltaTime);
        this.updateCameraPosition(deltaTime);
        if(this.currentAnimation){
            this.currentAnimation.update(deltaTime);
        }
        this.render();
    }
    moveYAxis(){
        this.updateVelocity("y");
        this.posY += this.yVelocity;
    }
    changePositon(deltaTime, dimension, increase=true){
        this.updateVelocity(dimension, increase);
        this.posX += this.xVelocity * deltaTime;
        console.log(this.xVelocity * deltaTime, "distance pos changed")

    }
    updatePosition(deltaTime){
        let inputs = this.controls.activeButtons;
        //console.log(inputs);
        if(inputs.ArrowRight){
            this.changePositon(deltaTime, "x");
        }
        if(inputs.ArrowLeft){
            this.changePositon(deltaTime, "x", false);
        }
        if(!inputs.ArrowLeft && !inputs.ArrowRight){
            this.slowToStanding(deltaTime);
        }
    }
    updateVelocity(dimension, increase=true){
        let maxXVelotcityVarName = "max"+dimension.toUpperCase()+"Velocity";
      //  console.log(maxXVelotcityVarName,  this[dimension+"Velocity"],  this[maxXVelotcityVarName]);
        if(increase){
            this[dimension+"Velocity"] += this.acceleration;
            if(this[dimension+"Velocity"] > this[maxXVelotcityVarName]){
                this[dimension+"Velocity"] = this[maxXVelotcityVarName];
            }
        }else{
            this[dimension+"Velocity"] -= this.acceleration;
            if(this[dimension+"Velocity"] < 0 - this[maxXVelotcityVarName]){
                this[dimension+"Velocity"] = 0 - this[maxXVelotcityVarName];
            }
        }
    }
    slowToStanding(deltaTime){
        let decelcarationIncrement = Window.config.physics.friction;
        let deceleration = this.xVelocity > 0 ? -1 * decelcarationIncrement : decelcarationIncrement;
        if(Math.abs(this.xVelocity) < Math.abs(deceleration)){
            this.xVelocity = 0;
            return
        }
        this.xVelocity += deceleration;
        this.posX += this.xVelocity * deltaTime;
        console.log(this.xVelocity, "let go");
    }

}