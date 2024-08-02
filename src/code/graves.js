import {Mesh, BoxGeometry, MeshStandardMaterial, Group} from "three";

const graves = new Group();

const graveGeometry = new BoxGeometry(0.6, 0.8, 0.2)
const graveMaterial = new MeshStandardMaterial({color: "blue"})

for (let i = 0; i < 30; i++) {
    const grave = new Mesh(graveGeometry, graveMaterial);

    const angle = Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 4

    //Finding coordinates of the points in a circle. (x,y)=(cosA, sinA)
    grave.position.x = Math.sin(angle) * radius;
    grave.position.z = Math.cos(angle) * radius;
    grave.position.y = Math.random() * 0.4

    grave.rotation.x = (Math.random() - 0.5)*0.4
    grave.rotation.y = (Math.random() - 0.5)*0.4
    grave.rotation.z = (Math.random() - 0.5)*0.4

    graves.add(grave);
}

export default graves;