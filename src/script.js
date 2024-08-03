import * as THREE from "three";
import {OrbitControls, Timer} from "three/addons";
import * as GUI from "lil-gui"
import * as MODULES from "./code/exports.js";


//SCENE
const scene = new THREE.Scene();

//AXIS-HELPER
const axisHelper = new THREE.AxesHelper(4);
axisHelper.setColors("blue", "green", "red")
scene.add(axisHelper);

//CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
scene.add(camera);
camera.position.set(4, 2, 5)

//RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
document.body.appendChild(renderer.domElement);

//CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

//LIGHT
scene.add(MODULES.directionalLight, MODULES.ambientLight);

//FLOOR
scene.add(MODULES.floor);

//HOUSE
scene.add(MODULES.house)

//Graves
scene.add(MODULES.graves);

//Ghosts
scene.add(MODULES.ghost1, MODULES.ghost2, MODULES.ghost3)

//RESIZE
const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
}
window.addEventListener("resize", onResize)

//ANIMATION
const timer = new Timer();
const animation = () => {
    window.requestAnimationFrame(animation);
    timer.update();

    controls.update();

    const elapsedTime = timer.getElapsed();
    MODULES.animateGhost(elapsedTime);
    renderer.render(scene, camera);
    timer.dispose();
}
axisHelper.dispose();
animation();