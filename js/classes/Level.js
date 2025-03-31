import Pixel from "./Pixel.js";
import Player from "./Player.js";
import SpriteSheet from "./SpriteSheet.js";
import {loadImg} from "/js/functions/Loaders.js";

export default class Level{
    constructor(levelPlan){
        if(typeof levelPlan !== "object"){
            this.level = JSON.parse(levelPlan); 
        }
        this.level =levelPlan;
        this.pixel = Pixel;
        this.spriteSheet = SpriteSheet;
        this.backgrounds = new Map();
        this.entities = new Map();
        this.resources = new Map();
        this.buffer = this.createBackgroundBuffer();

    }
    render(context){
        for(let canvasSprite in  this.level.structure){
            //console.log(canvasSprite);
            let spriteValues = this.level.structure[canvasSprite];
            let spriteType = spriteValues.type;
            console.log(context);
            switch(spriteType){
                    case "spriteSheet":
                        console.log( spriteValues);
                        if(spriteValues.spriteType === "entity"){
                            let character =  new this.spriteSheet(this.resources.get(spriteValues.url), spriteValues.width , spriteValues.height);
                            character.defineSprite(canvasSprite, spriteValues.sheetX, spriteValues.sheetY);
                            //character.outputSprite(context, canvasSprite, spriteValues.posX, spriteValues.posY)
                            let player = new Player(canvasSprite, spriteValues.posX, spriteValues.posY, spriteValues.animationsheet);
                            player.sprites.set(canvasSprite, character);

                            this.entities.set(canvasSprite, player);
                            break;
                        }
                        let levelSprite = new this.spriteSheet(this.resources.get(spriteValues.url), spriteValues.width , spriteValues.height);
                        levelSprite.defineSpriteTile(canvasSprite, spriteValues.sheetX, spriteValues.sheetY);
                        //console.log(context);
                        levelSprite.outputMultipleSprites(context, canvasSprite, spriteValues.xStart, spriteValues.xEnd, spriteValues.yStart, spriteValues.yEnd);
                        this.backgrounds.set(canvasSprite ,levelSprite);
                        break;
                    case "pixel": 
                        let levelPixels = new this.pixel();
                        levelPixels.definePixel(canvasSprite ,spriteValues.height, spriteValues.width, spriteValues.color);
                        levelPixels.drawMultipleAdjecent(context, canvasSprite, spriteValues.xStart, spriteValues.xEnd, spriteValues.yStart, spriteValues.yEnd);
                        this.backgrounds.set(canvasSprite ,levelPixels);
                        break;

                    default: console.log("your render type is whack, look at you level json");
                    break;
            }
        }
    }
    loadResources() {
        let loadPromises = []; // Initialize an array to hold promises
    
        // Iterate over each item in the level structure
        for (let canvasSprite in this.level.structure) {
            let spriteValues = this.level.structure[canvasSprite]; // Get sprite values for the current item
            
            // Check if the current item is a sprite sheet
            switch(spriteValues.type){
                case "spriteSheet":
                    console.log(spriteValues.url);
                    if(this.resources.get(spriteValues.url)){
                        continue;
                    }
                    // Load the image and set up a .then handler to store it in the resources map
                    let promise = loadImg(spriteValues.url).then((img) => {
                        console.log(img);
                        this.resources.set(spriteValues.url, img);
                        console.log("promised started");
                    }).then(() => console.log(this.resources));
                    // Add the promise to the array
                    console.log("promises loaded");
                    loadPromises.push(promise);
                    break;
                case "pixel":
                    //this.pixel.definePixel(canvasSprite,  spriteValues.width, spriteValues.height, spriteValues.color);
                    console.log("pixel render pathway");
                    break;
                default:
                    console.log(`invalid render type(${spriteValues.type}), check level json `);
                break;
            }
        }
    
        // Return a promise that resolves when all image loading promises resolve
        return Promise.all(loadPromises);//.catch(error => console.log(Error(error)));
    }
    createBackgroundBuffer(){
        let buffer = document.createElement("canvas");
        buffer.width = 256;
        buffer.height = 240;
        return buffer.getContext("2d");
    }
}