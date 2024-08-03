import {PointLight} from "three";
import * as MODULES from "./exports.js";

const ghost1 = new PointLight('#8800ff', 6)
const ghost2 = new PointLight('#ff0088', 6)
const ghost3 = new PointLight('#ff0000', 6)

//Shadows
ghost1.castShadow = true;
ghost2.castShadow = true;
ghost3.castShadow = true;

ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 10

ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 10

ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 10

export function animateGhost(elapsedTime) {
    const ghost1Angle = elapsedTime * 0.5
    ghost1.position.x = Math.cos(ghost1Angle) * 4;
    ghost1.position.z = Math.sin(ghost1Angle) * 4;
    ghost1.position.y = Math.sin(ghost1Angle) * Math.sin(ghost1Angle * 2.34) * Math.sin(ghost1Angle * 3.45)

    const ghost2Angle = -elapsedTime * 0.38;
    ghost2.position.x = Math.cos(ghost2Angle) * 5;
    ghost2.position.z = Math.sin(ghost2Angle) * 5;
    ghost2.position.y = Math.sin(ghost2Angle) * Math.sin(ghost2Angle * 2.34) * Math.sin(ghost2Angle * 3.45)

    const ghost3Angle = elapsedTime * 0.23;
    ghost3.position.x = Math.cos(ghost3Angle) * 6;
    ghost3.position.x = Math.sin(ghost3Angle) * 6;
    ghost3.position.y = Math.sin(ghost3Angle) * Math.sin(ghost3Angle * 2.34) * Math.sin(ghost3Angle * 3.45);
}

export
{
    ghost1, ghost2, ghost3
}