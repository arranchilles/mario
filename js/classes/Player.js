import Camera from "./Camera.js";
import Control from "./Controls.js";
import Entity from "./Entity.js";
export default class Player extends Entity{
    constructor(name, posX, posY){
        super();
        this.posX = posX;
        this.posY = posY;
        this.sprites = new Map();
        //this.imageRef = "/assests/sprites/player-sprites.png";
       // this.animations = new Animations();
       this.controls = new Control(this);
       this.controls.moveRight = this.moveRight;
       this.controls.moveLeft = this.moveLeft;
       this.camera = new Camera;
       this.name = name;
    }
    announce(){
        console.log("Player is active", this);
    }
    render(sprite){
        this.sprites.get(this.name).outputSprite(Window.ctx, sprite, this.posX, this.posY);//shortcut function
    }
    moveRight(){
        this.entity.posX +=3;
       // this.entity.camera.moveRight(3);
       console.log(this.entity.posX);
        if( this.entity.posX >= 85 &&  this.entity.posX <= (Window.level.level.dimensions.xEnd * 16 - 170)){
            this.entity.camera.moveRight(3);
        }
        this.entity.render(this.entity);
        console.log("righasdgsdl;fjasdl;j");
    }
    moveLeft(){
        this.entity.posX -=3;
        if( this.entity.posX >= 85 &&  this.entity.posX <= (Window.level.level.dimensions.xEnd * 16 - 170)){
            this.entity.camera.moveLeft(3);
        }
        this.entity.render(this.entity);
        console.log("righasdgsdl;fjasdl;j");
    }


}