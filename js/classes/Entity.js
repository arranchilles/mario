import Control from "./Controls.js";
import Animations from "./Animations.js";
export default class Entity{
    constructor(name, posX, posY, animations){
        this.posX = posX;
        this.posY = posY;
        this.sprites = new Map();
        this.Animations = new Animations(animations);
        //this.imageRef = "/assests/sprites/player-sprites.png";
       // this.animations = new Animations();
      // this.controls = new Control(this);
       this.name = name;
    }
    announce(){
        console.log("Player is active", this);
    }
   render(sprite){
        this.sprites.get(this.name).outputSprite(Window.ctx, sprite, this.posX, this.posY);//shortcut function
    }

}