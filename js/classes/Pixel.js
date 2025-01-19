export default class Pixel{
    constructor(){
        this.pixelSet = new Map();
    }
    definePixel(name, width, height, color){
        const canvas = document.createElement("canvas");
        canvas.height = height;
        canvas.width = width;
        canvas.getContext("2d").fillStyle = color;
        canvas.getContext("2d").fillRect( 0,0, width, height);
        //console.log(canvas);
        this.pixelSet.set(name, canvas);
    }
    drawPixel(context, name, posX, posY){
        let pixel = this.pixelSet.get(name);
        context.drawImage(pixel, posX, posY);
    }
    drawPixelAdjecent(context, name, posX, posY){
        let pixel = this.pixelSet.get(name);
       // console.log(pixel);
        context.drawImage(pixel, posX * pixel.width, posY * pixel.height);
    }
    drawMultipleAdjecent(context, name, xStart, xEnd, yStart, yEnd){
        for(let x = xStart; x < xEnd; x++){
            for(let y = yStart; y < yEnd; y++){
                //console.log(x +" x", y+ " y");
                this.drawPixelAdjecent(context, name, x, y);
            }
        }
    }
}