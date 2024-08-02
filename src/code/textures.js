import {TextureLoader, LoadingManager} from "three";

const loadingManager = new LoadingManager();

loadingManager.onStart = (texture) => {
    console.log("Started Loading: ", texture)
}
loadingManager.onLoad = () => {
    console.log("Loaded")
}
loadingManager.onError = (texture) => {
    console.log("Error Loading: ", texture)
}

const textureLoader = new TextureLoader(loadingManager);

export default textureLoader;