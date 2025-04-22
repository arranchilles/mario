export default class Control {
    constructor(entity){
        let canvas = document.querySelector("body #game-port");
        this.keyDownControlsManager = this.keyDownControlsManager.bind(this);
        this.keyUpControlsManager = this.keyUpControlsManager.bind(this);
        canvas.addEventListener("keydown", this.keyDownControlsManager);
        canvas.addEventListener("keyup", this.keyUpControlsManager);
        this.entity = entity;
    }

    keyDownControlsManager(event){
        let key = event.key;
        if(Window.config.debug.controls){
            console.log(event, key);
        }
        switch(key){
            case "ArrowUp":
                this.jump();
            break;
            case "ArrowDown":
                this.crouch();
            break;
            case "ArrowLeft":
                this.moveLeft();
            break;
            case "ArrowRight":
                this.moveRight();
            break;
            default:
                console.error(`Invalid input ${key}`);
            break;
        }
    }
    keyUpControlsManager(event){
        let key = event.key;
        if(Window.config.debug.controls){
            console.log(event, key);
        }
        switch(key){
            case "ArrowUp":
                if(event.type === "keydown"){
                    throw Error("COmplete desctructions!");
                }
                this.jump();
            break;
            default:
                this.entity.resetSprite();
            break;
        }
    }
    moveRight(){
        this.entity.posX +=5;
        this.entity.render(this.entity)
        this.entity.direction = "Right";
    }
    moveLeft(){
        //console.log("left movement");
        this.entity.posX -=5;
        this.entity.render(this.entity)
        this.entity.direction = "Left";
    }
}