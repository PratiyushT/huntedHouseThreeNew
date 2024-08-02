import {TextureLoader, LoadingManager} from "three";

const loadingManager = new LoadingManager();

loadingManager.onStart = (texture) => {
    console.log("Started Loading: ", texture)
}
loadingManager.onLoad = (texture) => {
    console.log("Loaded: ", texture)
}
loadingManager.onError = () => {
    console.log("Error Loading")
}

const textureLoader = new TextureLoader(loadingManager);

export default textureLoader;