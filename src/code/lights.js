import {AmbientLight, DirectionalLight} from "three";

const ambientLight = new AmbientLight("#ffffff", 0.5);


const directionalLight = new DirectionalLight("#ffffff", 1.5);
directionalLight.position.set(3, 2, -8);


export {directionalLight, ambientLight}
