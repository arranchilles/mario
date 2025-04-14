import {loadJSON} from "../functions/Loaders.js";
export default class Animation{

    ElapsedTime;

    sprites;

    entity;

    spriteIteration;

    frameTime;

    frames;

    name;

    constructor(entity, name){
        this.entity = entity;
        this.name = name;
       // this.entity.sprite.set(name);
    }

    //need to load in js objects as animations not read json every tijjme 

    addFrames(){
        let animation = this.animationData.name;
        this.entity.spriteSheet.defineSpriteTile()
    }

    update(deltaTime){
        this.ElapsedTime += deltaTime;
        if(this.ElapsedTime >= this.frameTime){
            this.spriteIteration = (this.spriteIteration + 1) % this.frames;
        }
        this.entity.sprite = this.entity.sprites.get(this.name + this.spriteIteration)
    }

} 