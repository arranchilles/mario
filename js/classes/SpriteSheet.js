export default class SpriteSheet{
    constructor(image, width, height){
        /*let image = new Image();
        image.src = imageRoute;*/
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }
    defineSpriteTile(name, startposx, startposy){
       const buffer = document.createElement("canvas");
       buffer.width = this.width;
       buffer.height = this.height;
       buffer.getContext("2d").drawImage(
            this.image,
            startposx * this.width,
            startposy * this.height,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height
       );
       this.tiles.set(name, buffer);
    }
    defineSprite(name, startposx, startposy){
        const buffer = document.createElement("canvas");
        buffer.width = this.width;
        buffer.height = this.height;
        buffer.getContext("2d").drawImage(
             this.image,
             startposx, /* this.width,*/
             startposy, /* * this.height,*/
             this.width,
             this.height,
             0,
             0,
             this.width,
             this.height
        );
        this.tiles.set(name, buffer);
    }
    defineVariedDimensionsSprite(name, startposx, startposy, width, height){
        const buffer = document.createElement("canvas");
        buffer.width = width;
        buffer.height = height;
        buffer.getContext("2d").drawImage(
             this.image,
             startposx, /* this.width,*/
             startposy, /* * this.height,*/
             width,
             height,
             0,
             0,
             width,
             height
        );
        this.tiles.set(name, buffer);
    }
    outputSprite(context, sprite, posx, posy){
        sprite = this.tiles.get(sprite);
        context.drawImage(sprite, posx, posy);
    }

    outputSpriteAtWidthApart(context, sprite, posx, posy){
        //console.log(context);
        sprite = this.tiles.get(sprite); 
        //console.log(sprite, posx, posy);
        context.drawImage(sprite, posx * this.width, posy * this.height);
    }
    outputMultipleSprites(context, sprite, xStart, xEnd, yStart, yEnd){
        for(let x = xStart; x < xEnd; x++){
            for(let y = yStart; y < yEnd; y++){
                this.outputSpriteAtWidthApart(context, sprite, x,  y);
            } 
        }
    }

}