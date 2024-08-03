import {Mesh, BoxGeometry, MeshStandardMaterial, SRGBColorSpace,Group} from "three";
import textureLoader from "./textures.js";


//Textures
const grave_url_pre = "./house/rough_plaster_brick_02_1k/textures/rough_plaster_brick_02_"
const graveNormalTexture = textureLoader.load(grave_url_pre + "nor_gl_1k.jpg");
const graveARMTexture = textureLoader.load(grave_url_pre + "arm_1k.jpg");
const graveColorTexture = textureLoader.load(grave_url_pre + "diff_1k.jpg");
graveColorTexture.colorSpace = SRGBColorSpace;

graveColorTexture.repeat.set(0.3, 0.4)
graveARMTexture.repeat.set(0.3, 0.4)
graveNormalTexture.repeat.set(0.3, 0.4)

const graves = new Group();

const graveGeometry = new BoxGeometry(0.6, 0.8, 0.2)
const graveMaterial = new MeshStandardMaterial({
    map: graveColorTexture,
    aoMap: graveARMTexture,
    roughnessMap:graveARMTexture,
    metalnessMap:graveARMTexture,
    normalMap:graveNormalTexture,
})

for (let i = 0; i < 30; i++) {
    const grave = new Mesh(graveGeometry, graveMaterial);

    const angle = Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 4

    //Finding coordinates of the points in a circle. (x,y)=(cosA, sinA)
    grave.position.x = Math.sin(angle) * radius;
    grave.position.z = Math.cos(angle) * radius;
    grave.position.y = Math.random() * 0.4

    grave.rotation.x = (Math.random() - 0.5) * 0.4
    grave.rotation.y = (Math.random() - 0.5) * 0.4
    grave.rotation.z = (Math.random() - 0.5) * 0.4

    graves.add(grave);
}

export default graves;