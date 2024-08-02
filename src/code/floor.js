import {Mesh, PlaneGeometry, MeshStandardMaterial, BackSide, SRGBColorSpace, RepeatWrapping} from "three";
import textureLoader from "./textures.js";
import gui from "./gui.js";
//Textures
const URL_START = "./coast_sand_rocks_02_1k/textures/coast_sand_rocks_02_"
const floorAlphaTexture = textureLoader.load("./floor/alpha.jpg")
const floorColorTexture = textureLoader.load(URL_START + "diff_1k.jpg")
floorColorTexture.colorSpace = SRGBColorSpace;
//floorARMTexture file Contains Three Textures
const floorARMTexture = textureLoader.load(URL_START + "arm_1k.jpg")
const floorNormalTexture = textureLoader.load(URL_START + "nor_gl_1k.jpg")
const floorDisplacementTexture = textureLoader.load(URL_START + "disp_1k.jpg")

floorColorTexture.wrapS = RepeatWrapping
floorARMTexture.wrapS = RepeatWrapping
floorNormalTexture.wrapS = RepeatWrapping
floorDisplacementTexture.wrapS = RepeatWrapping

floorColorTexture.wrapT = RepeatWrapping
floorARMTexture.wrapT = RepeatWrapping
floorNormalTexture.wrapT = RepeatWrapping
floorDisplacementTexture.wrapT = RepeatWrapping

floorColorTexture.repeat.set(11, 11)
floorARMTexture.repeat.set(11, 11)
floorNormalTexture.repeat.set(11, 11)
floorDisplacementTexture.repeat.set(11, 11)

const floor = new Mesh(
    new PlaneGeometry(20, 20, 100, 100),
    new MeshStandardMaterial({
        alphaMap: floorAlphaTexture,
        transparent: true, //Do this in alphaMaps
        map: floorColorTexture,
        aoMap: floorARMTexture,
        roughnessMap: floorARMTexture,
        metalnessMap: floorARMTexture,
        normalMap: floorNormalTexture,
        displacementMap: floorDisplacementTexture,
        displacementScale: 0.3,
        displacementBias: -0.287,
    })
)
floor.rotation.x = Math.PI * 0.5;
floor.material.side = BackSide

const floorGUI = gui.addFolder("Floor")
floorGUI.add(floor.material, 'displacementScale').min(0).max(1).step(0.001).name('floorDisplacementScale')
floorGUI.add(floor.material, 'displacementBias').min(-1).max(1).step(0.001).name('floorDisplacementBias')

export default floor;