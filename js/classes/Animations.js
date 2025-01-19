import {loadJSON} from "./functions/Loaders.js";
export default class Animations{
    constructor(animationSheetUrl, entity){
        this.animationSheet = loadJSON(animationSheetUrl);
    }

    //need to load in js objects as animations not read json every tijjme 

    moveRight(){
        
    }

} 