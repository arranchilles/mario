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
       this.name = name;
    }
    announce(){
        console.log("Player is active", this);
    }
   render(sprite){
        this.sprites.get(this.name).outputSprite(Window.ctx, sprite, this.posX, this.posY);//shortcut function
    }

}