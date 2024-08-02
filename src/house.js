import {Group, Mesh, MeshStandardMaterial, BoxGeometry, PlaneGeometry, ConeGeometry} from "three";

const house = new Group();

const walls = new Mesh(
    new BoxGeometry(4, 2.5, 5),
    new MeshStandardMaterial()
)
walls.position.y = 1.25;
house.add(walls);

//ROOFS
const roof = new Mesh(
    new ConeGeometry(4, 1.5, 4),
    new MeshStandardMaterial()
)
house.add(roof);
roof.position.y = walls.geometry.parameters.height + 0.75;
roof.rotation.y = Math.PI * 0.25;
console.log()

export default house;