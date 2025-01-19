export default class Control {
    constructor(entity){
        let canvas = document.querySelector("body #game-port");
        this.controlsManager = this.controlsManager.bind(this);
        canvas.addEventListener("keydown", this.controlsManager);
        this.entity = entity;
        
        
    }

    controlsManager(event){
        let key = event.key;
        console.log(event, key);
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
                console.log(this);
                this.moveRight();
            break;
            default:
                console.error(`Invalid input ${key}`);
            break;
        }
    }
    moveRight(){
        this.entity.posX +=5;
        this.entity.render(this.entity)
    }
    moveLeft(){
        //console.log("left movement");
        this.entity.posX -=5;
        this.entity.render(this.entity)
    }
}