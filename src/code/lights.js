import {AmbientLight, DirectionalLight, PointLight} from "three";

const ambientLight = new AmbientLight('#86cdff', 0.275);


const directionalLight = new DirectionalLight('#86cdff', 1);
directionalLight.position.set(3, 2, -8);

directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 256
directionalLight.shadow.mapSize.height = 256
directionalLight.shadow.camera.top = 8
directionalLight.shadow.camera.right = 8
directionalLight.shadow.camera.bottom = - 8
directionalLight.shadow.camera.left = - 8
directionalLight.shadow.camera.near = 1
directionalLight.shadow.camera.far = 20

export {directionalLight, ambientLight}
