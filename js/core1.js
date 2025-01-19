import Background from "./Background.js";
console.log("crime against humanity");
const canvas = document.getElementById("game-port");
canvas.width = 1000;
canvas.height = 600;
Window.ctx = canvas.getContext("2d");
let image = new Image();
image.src = "/assets/sprites/shadow_dog.png";
let frame = 0
Window.ctx.fillRect(300,600, 400, 400);
Window.gameSpeed = 6;

let background1 = new Image(); 
background1.src = "/assets/backgrounds/layer-1.png";
let background2 = new Image(); 
background2.src = "/assets/backgrounds/layer-2.png";
let background3 = new Image(); 
background3.src = "/assets/backgrounds/layer-3.png";
let background4 = new Image(); 
background4.src = "/assets/backgrounds/layer-4.png";
let background5 = new Image(); 
background5.src = "/assets/backgrounds/layer-5.png";
console.log(background5);
const layers = [
    new Background(background1, 0,2, 2400, 720),
    new Background(background2, 0.4, 2400, 720),
    new Background(background3, 0.6, 2400,  720),
    new Background(background4, 0.8, 2400,  720),
    new Background(background5, 1, 2400,  720)
];

console.log(layers);

let startPositionX = 240;
let startPositionY = 0;
const anmiationLists ={
    "idle" : {
        sprites:6,
    },
    "jump" : {
        sprites:6,
    },
    "falling" : {
        sprites:6,
    },
    "run" : {
        sprites:7,
    },
    "power" : {
        sprites:10,
    },
    "sitting" : {
        sprites:4,
    },
    "sitting" : {
        sprites:4,
    },
    "spin" : {
        sprites:6,
    },
    "dash" : {
        sprites:6,
    },
    "sleep" : {
        sprites:11,
    },
    "sleep" : {
        sprites:11,
    },
    "trott" : {
        sprites:3,
    }
}
let animationNumber = anmiationLists.idle.sprites;
let spriteRow = Object.keys(anmiationLists).indexOf("idle");
function animate(spriteWidth, spriteHeight){
    spriteWidth = 575;
    spriteHeight = 523;
    animationNumber = Math.floor(frame / 6) % 7;
    Window.ctx.clearRect(0, 0, 1000, 600);
    layers.forEach(
        layer => {
            layer.update();
            layer.draw();
        }
    )
    Window.ctx.drawImage(image, animationNumber * spriteWidth, spriteRow * spriteHeight, spriteWidth, spriteHeight, startPositionX, 0, spriteWidth, spriteHeight);
    frame++;
    requestAnimationFrame(animate);
}
image.onload = function() {
    console.log("Image loaded successfully");
    // Call animate function after image is loaded
    animate(575, 523);
};

canvas.addEventListener("keydown", (event) =>{
    console.log(event);
    if(event.keyCode === 39){ 
        startPositionX += 10;
        animationNumber = anmiationLists.run.sprites;
        spriteRow = Object.keys(anmiationLists).indexOf("run");
        console.log(event);
    }
    if(event.keyCode === 37){
        startPositionX -= 10;
        animationNumber = anmiationLists.run.sprites;
        spriteRow = Object.keys(anmiationLists).indexOf("run");
    }
})

canvas.addEventListener("keyup", event =>{
    animationNumber = anmiationLists.idle.sprites;
    spriteRow = Object.keys(anmiationLists).indexOf("idle");
})