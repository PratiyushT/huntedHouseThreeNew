import {Mesh, PlaneGeometry, MeshStandardMaterial, BackSide} from "three";
import textureLoader from "./textures.js";


console.log(textureLoader);

const floor = new Mesh(
    new PlaneGeometry(20, 20),
    new MeshStandardMaterial({
        alphaMap: textureLoader.load("./floor/alpha.jpg"),
        transparent: true, //Do this in alphaMaps
    })
)
floor.rotation.x = Math.PI * 0.5;
floor.material.side = BackSide


export default floor;