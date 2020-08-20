import { PerspectiveCamera, WebGLRenderer } from 'three';
import { CameraComponent } from '../../camera/components/CameraComponent';
import { Behavior } from '../../common/interfaces/Behavior';
import { Engine } from '../../ecs';
import { Entity } from '../../ecs/classes/Entity';
import { SystemAttributes, System } from '../../ecs/classes/System';
import { addComponent, createEntity, getComponent, getMutableComponent } from '../../ecs/functions/EntityFunctions';
import { EffectComposer } from '../classes/postprocessing/core/EffectComposer';
import { DepthOfFieldEffect } from '../classes/postprocessing/effects/DepthOfFieldEffect';
import { SSAOEffect } from '../classes/postprocessing/effects/SSAOEffect';
import { EffectPass } from '../classes/postprocessing/passes/EffectPass';
import { RenderPass } from '../classes/postprocessing/passes/RenderPass';
import { RendererComponent } from '../components/RendererComponent';
import { DefaultPostProcessingSchema } from '../defaults/DefaultPostProcessingSchema';
/**
 * WebGL renderer system
 */
export class WebGLRendererSystem extends System {
  /**
   * Contstructs a new webGl renderer system
   *
   * @param {SystemAttributes} attributes
   * @typedef {object} SystemAttributes with
   * @param {number} priority and has an propName signature.
   */
  constructor(attributes?: SystemAttributes) {
    super(attributes);
    // Create the Three.js WebGL renderer
  }
  /**
     * Initialization here renderer
     */
  init(): void {
    // Create the Renderer singleton
    addComponent(createEntity(), RendererComponent);
    const renderer = new WebGLRenderer({
      antialias: true
    });
    Engine.renderer = renderer;
    // Add the renderer to the body of the HTML document
    document.body.appendChild(Engine.renderer.domElement);
    this.onResize()
    console.log("child appended")
  }
  /**
     * Called on resize and sets resize flag
     */
  onResize() {
    console.log("On resize called")
    RendererComponent.instance.needsResize = true;
  }
  /**
    * This method removes resize listener
    */
  dispose() {
    window.removeEventListener('resize', this.onResize);
  }

  isInitialized: boolean
  /**
    * Configure post processing
    *
    * @param {Entity} entity - The Entity
    */
  configurePostProcessing(entity: Entity) {
    const rendererComponent = getMutableComponent<RendererComponent>(entity, RendererComponent);
    if (rendererComponent.postProcessingSchema == undefined) rendererComponent.postProcessingSchema = DefaultPostProcessingSchema;
    const composer = new EffectComposer(Engine.renderer);
    rendererComponent.composer = composer;
    const renderPass = new RenderPass(Engine.scene, Engine.camera);
    renderPass.scene = Engine.scene;
    renderPass.camera = CameraComponent.instance.camera;
    composer.addPass(renderPass);
    // This sets up the render
    const passes: any[] = []
    RendererComponent.instance.postProcessingSchema.effects.forEach((pass: any) => {
      if (typeof pass.effect === typeof SSAOEffect)
        passes.push(new pass.effect(CameraComponent.instance.camera, {}, pass.effect.options))
      else if (typeof pass.effect === typeof DepthOfFieldEffect)
        passes.push(new pass.effect(CameraComponent.instance.camera, pass.effect.options))
      else passes.push(new pass.effect(pass.effect.options))
    })
    composer.addPass(new EffectPass(CameraComponent.instance.camera, ...passes))
  }
  /**
     * This method called each frame by default
     *
     * @param {Number} delta
     */
  execute(delta: number) {
    this.queryResults.renderers.added.forEach((entity: Entity) => {
      console.log("Renderers added")
      RendererComponent.instance.needsResize = true;
      this.onResize = this.onResize.bind(this);
      window.addEventListener('resize', this.onResize, false);
      this.configurePostProcessing(entity);
    });

    this.queryResults.renderers.all.forEach((entity: Entity) => {
      getComponent<RendererComponent>(entity, RendererComponent).composer.render(delta);
    });
  }
}
/**
 * @param entity
 */
export const resize: Behavior = entity => {
  const rendererComponent = getComponent<RendererComponent>(entity, RendererComponent);

  if (rendererComponent.needsResize) {
    const canvas = Engine.renderer.domElement;
    const curPixelRatio = Engine.renderer.getPixelRatio();

    if (curPixelRatio !== window.devicePixelRatio) Engine.renderer.setPixelRatio(window.devicePixelRatio);

    const width = window.innerWidth;
    const height = window.innerHeight;

    if ((Engine.camera as PerspectiveCamera).isPerspectiveCamera) {
      const cam = Engine.camera as PerspectiveCamera;
      cam.aspect = width / height;
      cam.updateProjectionMatrix();
    }

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    Engine.renderer.setSize(width, height);
    RendererComponent.instance.composer.setSize(width, height);

    RendererComponent.instance.needsResize = false;
  }
};

WebGLRendererSystem.queries = {
  renderers: {
    components: [RendererComponent],
    listen: {
      added: true
    }
  }
};
