export {loadJSON, loadImg}; 
export default function loadImg(url){
    return new Promise((resolve, reject) => {
        let image =  new Image()
        image.src = url;
        image.onload = () => {resolve(image);}
        image.onerror = reject;
    })
    .then(promise => {
        console.log("loaded image", promise);
        return promise;
    })
    .catch(
        (error) => {
            console.error(error);
            console.log("loading image failed");
        });
}
function loadJSON(url){
    return fetch(url).then( response => response.json());
}

