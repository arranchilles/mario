import SpriteSheet from "./classes/SpriteSheet.js";
import Pixel from "./classes/Pixel.js";
import Player from "./classes/Player.js";
import {loadJSON} from "./functions/Loaders.js";
import Level from "./classes/Level.js";
import Timer from "./classes/Timer.js";
import Camera from "./classes/Camera.js";
const canvas = document.getElementById("game-port");
canvas.width = 256;
canvas.height = 240;
canvas.fillStyle = "black";
Window.ctx = canvas.getContext("2d");
let resources  = [loadJSON("/assets/levels/1-1.json")];
Promise.all(resources).then(loadedResources => {
    console.log(loadedResources);  
    let Firstlevel = new Level(loadedResources[0]);
    console.log(Firstlevel);
    return Firstlevel;
}).then((level) => {
    // Ensure loadResources is awaited properly
    return level.loadResources().then(() => level);
})
.then((level) => {
    console.log("Resources loaded", level);
    console.log(level.resources);
    level.render(level.buffer); // Render after all resources are loaded to buffer keep clean background
    console.log("fone");
    Window.level = level;
    //Window.level.sprites.set("player", new Player(50, 50));
    timer.start();
})
.catch(error => {
    console.error("Error loading resources:", error);
});
Window.tileWidth = canvas.width / 16;
let timer = new Timer();
Window.timer = timer;
Window.camera = new Camera;
timer.update = function update(){
    Window.ctx.drawImage(Window.level.buffer.canvas, 0, 0);
    //Window.level.render(Window.ctx);
    //Window.level.sprites.get("mario").sprites.get("mario").outputSprite(Window.ctx, "mario", posx, posy);
    //Window.level.entities.get("mario").render("mario");
    Window.level.entities.forEach(entity => {
        entity.update();
    });
    //Window.camera.moveRight(1);
    //console.log(Window.level.sprites);//.outputSprite(Window.level, "idle", posx, posy);
}
