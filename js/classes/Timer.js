export default class Timer{
    constructor(timePerFrame = 1/60){
        this.timePerFrame = timePerFrame;
        let accumulatedTime = 0;
        let lastTime = 0;
        this.updateProxy = (time ) =>{ //update /gameloop created by core.js
            accumulatedTime += (time - lastTime) / 1000;
            while(accumulatedTime > timePerFrame){
                this.update(timePerFrame, accumulatedTime);
                accumulatedTime -= timePerFrame;
            }
            this.lastTime = time;
            lastTime = time;
            if(Window.config.debug.clock){
                console.log(time);
                if(time > 10000){
                    throw new Error("Cut out at 10 seconds");
                }
            }
            this.enqueue();
        }
    }
    start() {
        requestAnimationFrame(this.updateProxy);
    }
    enqueue(){
        requestAnimationFrame(this.updateProxy);
    }
}