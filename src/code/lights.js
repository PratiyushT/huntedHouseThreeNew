import {AmbientLight, DirectionalLight, PointLight} from "three";

const ambientLight = new AmbientLight('#86cdff', 0.275);


const directionalLight = new DirectionalLight('#86cdff', 1);
directionalLight.position.set(3, 2, -8);



export {directionalLight, ambientLight}
