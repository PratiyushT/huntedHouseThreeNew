import * as THREE from "three";
import {OrbitControls, Timer} from "three/addons";
import * as GUI from "lil-gui"


//SCENE
const scene = new THREE.Scene();

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
directionalLight.position.set(3,2,-8);
scene.add(directionalLight);

//MESH
const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1,32,32),
    new THREE.MeshStandardMaterial({ roughness: 0.7 })
)
scene.add(mesh);


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
}
animation();