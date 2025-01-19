import Bubble from "./Bubble.js";
const canvas = document.getElementById("game-port");
canvas.width = 1000;
canvas.height = 600;
Window.ctx = canvas.getContext("2d");
let image = new Image();
image.src = "/assets/sprites/shadow_dog.png";
Window.frame = 0
const bubbles = [];
Window.gameSpeed = 1;
for(let i=0; i < 50; i++){
    let bubbleDimesion = Math.round(((Math.random() *100 ) * 50 + 20) / 100);
    let bubbleLifespan = Math.round(Math.random() * 200 + 100);
    bubbles.push(new Bubble(bubbleDimesion, 500, 300, bubbleLifespan, 1));
}
function lifespanExpireyArray(objectArray, property, status){
    objectArray.every(object =>{
        object[property] === status;
    });
    objectArray = [];
}
console.log(bubbles);
function animate(){
    Window.ctx.clearRect(0, 0, 1000, 600);

    bubbles.forEach(
        bubble => {
            bubble.update();
        }
    )
    lifespanExpireyArray(bubbles, "popped", true);
    //Window.ctx.drawImage(image, animationNumber * spriteWidth, spriteRow * spriteHeight, spriteWidth, spriteHeight, startPositionX, 0, spriteWidth, spriteHeight);
   //console.log(bubbles);
    Window.frame++;
    requestAnimationFrame(animate);
}
animate()