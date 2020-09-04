import { TransformComponent } from '../../transform/components/TransformComponent';

import { System } from '../../ecs/classes/System';
import { followTarget } from '../../transform/behaviors/followTarget';
import { CameraComponent } from '../components/CameraComponent';
import { createEntity, getMutableComponent, getComponent, addComponent } from '../../ecs/functions/EntityFunctions';
import { Engine } from '../../ecs/classes/Engine';
import { CameraTagComponent } from '../../common/components/Object3DTagComponents';
import { Object3DComponent } from '../../common/components/Object3DComponent';
import { addObject3DComponent } from '../../common/behaviors/Object3DBehaviors';

export class CameraSystem extends System {
  constructor() {
    super()
    const cameraEntity = createEntity();
    addComponent(cameraEntity, CameraComponent, { followTarget: null, distance: 5, mode: "thirdPerson" });
    addComponent(cameraEntity, CameraTagComponent)
    addObject3DComponent(cameraEntity, { obj3d: Engine.camera })
    addComponent(cameraEntity, TransformComponent);
  }

  /**
   * Called each frame by default
   * 
   * @param {Number} delta time since last frame
   */
  execute(delta: number): void {
    this.queryResults.entities.all?.forEach(entity => {
      const cam = getComponent(entity, CameraComponent) as CameraComponent;
      if (cam.followTarget !== null && cam.followTarget !== undefined) {
        followTarget(entity, {}, delta, cam.followTarget);
      }
    });

    this.queryResults.entities.changed?.forEach(entity => {
      // applySettingsToCamera(entity)
    });
  }
}
/**
 * Queries must have components attribute which defines the list of components
 */
CameraSystem.queries = {
  entities: {
    components: [CameraComponent, TransformComponent],
    listen: {
      added: true,
      changed: true
    }
  }
};
