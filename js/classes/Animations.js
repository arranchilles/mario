import {loadJSON} from "./../functions/Loaders.js";
export default class Animations{
    constructor(animationSheetUrl){
        this.loadAnimationsData(animationSheetUrl);
    }

    //need to load in js objects as animations not read json every tijjme 

    loadAnimationsData(url){
        const baseRoute = "/assets/animations/"
        url = url + baseRoute;
        loadJSON(url).then((data) => {
            this.animations = data;
        });
    }

} 