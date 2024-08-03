import {
    Group,
    Mesh,
    MeshStandardMaterial,
    BoxGeometry,
    PlaneGeometry,
    ConeGeometry,
    SphereGeometry,
    SRGBColorSpace, RepeatWrapping, PointLight,
} from "three";
import textureLoader from "./textures.js";
import gui from "./gui.js";
import floor from "./floor.js";


const house = new Group();

/*
//Walls
*/
//Textures
const wall_url_pre = "./house/stone_wall_04_1k/textures/stone_wall_04_"
const wallARMTexture = textureLoader.load(wall_url_pre + "arm_1k.jpg")
const wallColorTexture = textureLoader.load(wall_url_pre + "diff_1k.jpg")
const wallDisplacementTexture = textureLoader.load(wall_url_pre + "disp_1k.jpg")
wallColorTexture.colorSpace = SRGBColorSpace;
const wallNormalTexture = textureLoader.load(wall_url_pre + "nor_gl_1k.jpg")

wallARMTexture.repeat.set(1.5, 1.5)
wallARMTexture.wrapS = RepeatWrapping
wallARMTexture.wrapT = RepeatWrapping
wallColorTexture.repeat.set(1.5, 1.5)
wallColorTexture.wrapS = RepeatWrapping
wallColorTexture.wrapT = RepeatWrapping
wallDisplacementTexture.repeat.set(1.5, 1.5)
wallDisplacementTexture.wrapS = RepeatWrapping
wallDisplacementTexture.wrapT = RepeatWrapping
wallNormalTexture.repeat.set(1.5, 1.5)
wallNormalTexture.wrapS = RepeatWrapping
wallNormalTexture.wrapT = RepeatWrapping

//Mesh
const walls = new Mesh(
    new BoxGeometry(4, 2.5, 4),
    new MeshStandardMaterial({
        map: wallColorTexture,
        aoMap: wallARMTexture,
        roughMap: wallARMTexture,
        metalnessMap: wallARMTexture,
        normalMap: wallNormalTexture,
        displacementMap: wallDisplacementTexture,
        displacementScale: -0.015,
    })
)
house.add(walls);

//Transformation
walls.position.y = 1.25;


/*
//ROOFS
*/
//Textures
const roof_url_pre = "./house/roof_tiles_14_1k/textures/roof_tiles_14_"
const roofARMTexture = textureLoader.load(roof_url_pre + "arm_1k.jpg")
const roofColorTexture = textureLoader.load(roof_url_pre + "diff_1k.jpg")
roofColorTexture.colorSpace = SRGBColorSpace;
const roofDisplacementTexture = textureLoader.load(roof_url_pre + "disp_1k.jpg")
const roofNormalTexture = textureLoader.load(roof_url_pre + "nor_gl_1k.jpg")

roofARMTexture.repeat.set(4, 1)
roofARMTexture.wrapS = RepeatWrapping
roofColorTexture.repeat.set(4, 1)
roofColorTexture.wrapS = RepeatWrapping
roofDisplacementTexture.repeat.set(4, 1)
roofDisplacementTexture.wrapS = RepeatWrapping
roofNormalTexture.repeat.set(2, 1)
roofNormalTexture.wrapS = RepeatWrapping

//Mesh
const roof = new Mesh(
    new ConeGeometry(4, 1.5, 4),
    new MeshStandardMaterial({
        map: roofColorTexture,
        aoMap: roofARMTexture,
        roughMap: roofARMTexture,
        metalnessMap: roofARMTexture,
        normalMap: roofNormalTexture,
    })
)
house.add(roof);
roof.position.y = walls.geometry.parameters.height + 0.75;
roof.rotation.y = Math.PI * 0.25;

//GUI
gui.add(roof.material, 'displacementScale').min(0).max(1).step(0.001).name('roofDisplacementScale')


/*
//DOOR
*/
//Textures
const doorColorTexture = textureLoader.load('./door/color.jpg')
const doorAlphaTexture = textureLoader.load('./door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('./door/height.jpg')
const doorNormalTexture = textureLoader.load('./door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('./door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./door/roughness.jpg')

doorColorTexture.colorSpace = SRGBColorSpace

//Mesh
const door = new Mesh(
    new PlaneGeometry(2.2, 2.2,100,100),
    new MeshStandardMaterial({
        map: doorColorTexture,
        transparent: true,
        alphaMap: doorAlphaTexture,
        aoMap: doorAmbientOcclusionTexture,
        displacementMap: doorHeightTexture,
        displacementScale: 0.15,
        displacementBias: -0.04,
        normalMap: doorNormalTexture,
        metalnessMap: doorMetalnessTexture,
        roughnessMap: doorRoughnessTexture
    })
);
door.position.y = 1.1;
door.position.z = 2.01;
house.add(door);

//Light
const doorLight = new PointLight('#ff7d46', 5);
doorLight.position.set(0,2.2,2.5)
house.add(doorLight);

/*
//Bushes
*/
//Textures
const bush_url_pre = "./house/forest_leaves_04_1k/textures/forest_leaves_04_"
const bushARMTexture = textureLoader.load(bush_url_pre + "arm_1k.jpg")
const bushColorTexture = textureLoader.load(bush_url_pre + "diff_1k.jpg")
bushColorTexture.colorSpace = SRGBColorSpace;
const bushDisplacementTexture = textureLoader.load(bush_url_pre + "disp_1k.jpg")
const bushNormalTexture = textureLoader.load(bush_url_pre + "nor_gl_1k.jpg")


//Mesh
const bushGeometry = new SphereGeometry(1, 16, 16)
const bushMaterial = new MeshStandardMaterial({
    map: bushColorTexture,
    aoMap: bushARMTexture,
    displacementMap: bushDisplacementTexture,
    normalMap: bushNormalTexture,
    metalnessMap: bushARMTexture,
    roughnessMap: bushARMTexture
})

const bush1 = new Mesh(bushGeometry, bushMaterial)
bush1.scale.set(0.5, 0.5, 0.5)
bush1.position.set(0.8, 0.2, 2.2)

const bush2 = new Mesh(bushGeometry, bushMaterial)
bush2.scale.set(0.25, 0.25, 0.25)
bush2.position.set(1.4, 0.1, 2.1)

const bush3 = new Mesh(bushGeometry, bushMaterial)
bush3.scale.set(0.4, 0.4, 0.4)
bush3.position.set(-0.8, 0.1, 2.2)

const bush4 = new Mesh(bushGeometry, bushMaterial)
bush4.scale.set(0.15, 0.15, 0.15)
bush4.position.set(-1, 0.05, 2.6)

house.add(bush1, bush2, bush3, bush4);


export default house;