export default class Control {
    constructor(entity){
        let canvas = document.querySelector("body #game-port");
        this.keyDownControlsManager = this.keyDownControlsManager.bind(this);
        this.keyUpControlsManager = this.keyUpControlsManager.bind(this);
        canvas.addEventListener("keydown", this.keyDownControlsManager);
        canvas.addEventListener("keyup", this.keyUpControlsManager);
        this.entity = entity;
        this.activeButtons = {}
    }

    keyDownControlsManager(event){
        let key = event.key;
        if(Window.config.debug.controls){
            console.log(event, key);
        }
        this.activeButtons[key] = true;
    }
    keyUpControlsManager(event){
        let key = event.key;
        if(Window.config.debug.controls){
            console.log(event, key);
        }
        this.activeButtons[key] = false;
    }
}