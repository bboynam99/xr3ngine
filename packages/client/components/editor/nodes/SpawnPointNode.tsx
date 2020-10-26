import * as THREE from "three";
import EditorNodeMixin from "./EditorNodeMixin";
//@ts-ignore
import { GLTFLoader } from "../gltf/GLTFLoader";
let spawnPointHelperModel = null;
const GLTF_PATH = "/editor/spawn-point.glb"; // Static
export default class SpawnPointNode extends EditorNodeMixin(THREE.Object3D) {
  static legacyComponentName = "spawn-point";
  static nodeName = "Spawn Point";
  static async load() {
    const { scene } = await new GLTFLoader(GLTF_PATH).loadGLTF();
    // BREAKS OBJECT SELECTION => Raycastignore layers set to 1
    // scene.traverse(child => {
    //   if (child.isMesh) {
    //     child.layers.set(1);
    //   }
    // });
    spawnPointHelperModel = scene;
  }
  constructor(editor) {
    super(editor);
    if (spawnPointHelperModel) {
      this.helper = spawnPointHelperModel.clone();
      this.add(this.helper);
    } else {
      console.warn(
        "SpawnPointNode: helper model was not loaded before creating a new SpawnPointNode"
      );
      this.helper = null;
    }
  }
  copy(source, recursive = true) {
    if (recursive) {
      this.remove(this.helper);
    }
    super.copy(source, recursive);
    if (recursive) {
      const helperIndex = source.children.findIndex(
        child => child === source.helper
      );
      if (helperIndex !== -1) {
        this.helper = this.children[helperIndex];
      }
    }
    return this;
  }
  serialize() {
    return super.serialize({
      "spawn-point": {}
    });
  }
  prepareForExport() {
    super.prepareForExport();
    this.remove(this.helper);
    this.addGLTFComponent("spawn-point", {});
  }
}
