import { Object3D } from 'three';
import { Body } from 'cannon-es';
import { Component } from "../../ecs/classes/Component";
export declare class MeshCollider extends Component<MeshCollider> {
    mesh: any;
    options: any;
    body: Body;
    debugModel: any;
    constructor(mesh: Object3D, options: any);
}
