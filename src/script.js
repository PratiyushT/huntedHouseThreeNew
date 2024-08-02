import * as THREE from "three";
import {OrbitControls, Timer} from "three/addons";
import * as GUI from "lil-gui"

//Code Imports
import house from "./house.js"


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
const ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight("#ffffff", 1.5);
directionalLight.position.set(3, 2, -8);
scene.add(directionalLight);

//FLOOR
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
)
scene.add(floor);
floor.rotation.x = Math.PI * 0.5;

//HOUSE
scene.add(house)

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
    renderer.render(scene, camera);
    timer.dispose();
}
axisHelper.dispose();
animation();