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
        this.sprite = "idleRight";
        this.direction = "right";
        this.animations = {};
        this.xVelocity = 0;
        this.yVelocity = 0;
      // this.controls = new Control(this);
    }
    announce(){
        console.log("Player is active", this);
    }
    render(){
       this.spriteSheet.outputSprite(Window.ctx, this.sprite, Math.floor(this.posX), Math.floor(this.posY));//shortcut function
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
            this.animationData[animationName].sprites.forEach((animationSprite, index) => {
                this.spriteSheet.defineVariedDimensionsSprite(animationName + index, animationSprite.posX, animationSprite.posY, animationSprite.width, animationSprite.height);
            })
            this.animations[animationName] = new Animation(this, animationName);
            console.log(this.animations);
        }
        this.sprites = this.spriteSheet.tiles;
    }
    update(deltaTime){
        this.updatePosition(deltaTime);
        if(this.currentAnimation){
            this.currentAnimation.update(deltaTime);
        }
        this.render();
    }
    resetSprite(){
        this.sprite = `idle${this.direction}`;
        this.currentAnimation = null;
    }
} 