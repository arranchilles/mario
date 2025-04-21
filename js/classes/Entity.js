import Control from "./Controls.js";
import Animation from "./Animation.js";
import { loadJSON } from "../functions/Loaders.js";
export default class Entity{

    sprite;

    currentAnimation;

    animations

    constructor(name, posX, posY, spriteSheet){
        this.name = name;
        this.posX = posX;
        this.posY = posY;
        this.sprites = new Map();
        this.loadAnimationData(name);
        this.spriteSheet = spriteSheet;
        this.sprite = this.name;
        //this.imageRef = "/assests/sprites/player-sprites.png";
        //this.animations = new Animations();
        this.animations = {};
      // this.controls = new Control(this);
    }
    announce(){
        console.log("Player is active", this);
    }
    render(){
       this.spriteSheet.outputSprite(Window.ctx, this.sprite, this.posX, this.posY);//shortcut function
    }
    loadAnimationData(filename){
        const baseRoute = "/assets/animations/"
        let url = baseRoute + filename + ".json";
        loadJSON(url).then((data) => {
            this.animationData = data;
            this.createAnimationSprites(this.animationData);
        });
    }
    createAnimationSprites(){
        for( let animationName in this.animationData){
            this.animationData[animationName].sprites.forEach((animation, index) => {
                this.spriteSheet.defineSprite(animationName + index, animation.posX, animation.posY);
            })
            this.animations[animationName] = new Animation(this, animationName);
            console.log(this.animations);
        }
        this.sprites = this.spriteSheet.tiles;
    }
    update(deltaTime){
        if(this.currentAnimation){
            this.currentAnimation.update(deltaTime);
        }
        this.render();
    }

} 