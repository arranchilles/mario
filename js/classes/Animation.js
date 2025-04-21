import {loadJSON} from "../functions/Loaders.js";
export default class Animation{

    entity;

    spriteIteration;

    frameTime;

    frames;

    name;

    constructor(entity, name){
        this.entity = entity;
        this.name = name;
        this.spriteIteration = 0;
       // throw console.log(this.entity.animationData);
        this.frameTime = this.entity.animationData[name].frameTime;
        this.frames = this.entity.animationData[name].sprites.length;
        this.ElapsedTime = 0;
       // this.entity.sprite.set(name);
    }

    //need to load in js objects as animations not read json every tijjme 

    addFrames(){
        let animation = this.animationData.name;
        this.entity.spriteSheet.defineSpriteTile()
    }

    update(deltaTime){
        this.ElapsedTime += deltaTime;
        console.log(`frametime ${this.frameTime}`, `ElapsedTime ${this.ElapsedTime}`);
        if(this.ElapsedTime >= this.frameTime){
            this.spriteIteration = (this.spriteIteration + 1) % this.frames;
            this.ElapsedTime = 0;
        }
        this.entity.sprite = this.name + this.spriteIteration
        console.log( this.entity.sprite);
    }

} 