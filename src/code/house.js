import {
    Group,
    Mesh,
    MeshStandardMaterial,
    BoxGeometry,
    PlaneGeometry,
    DoubleSide,
    ConeGeometry,
    SphereGeometry
} from "three";

const house = new Group();

//Walls
const walls = new Mesh(
    new BoxGeometry(4, 2.5, 4),
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

//DOOR
const door = new Mesh(
    new PlaneGeometry(2.2,2.2),
    new MeshStandardMaterial()
);
door.position.y = 1.1;
door.position.z = 2.01;
house.add(door);

//Bushes
const bushGeometry = new SphereGeometry(1, 16, 16)
const bushMaterial = new MeshStandardMaterial({color: "Green"})

const bush1 = new Mesh(bushGeometry, bushMaterial)
bush1.scale.set(0.5, 0.5, 0.5)
bush1.position.set(0.8, 0.2, 2.2)

const bush2 = new Mesh(bushGeometry, bushMaterial)
bush2.scale.set(0.25, 0.25, 0.25)
bush2.position.set(1.4, 0.1, 2.1)

const bush3 = new Mesh(bushGeometry, bushMaterial)
bush3.scale.set(0.4, 0.4, 0.4)
bush3.position.set(- 0.8, 0.1, 2.2)

const bush4 = new Mesh(bushGeometry, bushMaterial)
bush4.scale.set(0.15, 0.15, 0.15)
bush4.position.set(- 1, 0.05, 2.6)

house.add(bush1, bush2, bush3, bush4);


export default house;