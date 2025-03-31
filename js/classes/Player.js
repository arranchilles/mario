import Control from "./Controls.js";
import Entity from "./Entity.js";
export default class Player extends Entity{
    constructor(name, posX, posY){
        super(name, posX, posY);
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