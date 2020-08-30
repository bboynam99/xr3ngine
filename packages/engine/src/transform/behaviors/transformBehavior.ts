import { Quaternion } from 'three';
import { Object3DComponent } from '../../common/components/Object3DComponent';
import { Behavior } from '../../common/interfaces/Behavior';
import { Entity } from '../../ecs/classes/Entity';
import { TransformComponent } from '../components/TransformComponent';
import { getMutableComponent } from '../../ecs/functions/EntityFunctions';
import { ColliderComponent } from '../../physics/components/ColliderComponent';
const q: Quaternion = new Quaternion();
let transform: TransformComponent;
export const transformBehavior: Behavior = (entity: Entity, args: { event: MouseEvent }, delta): void => {
  transform = getMutableComponent(entity, TransformComponent);
  const object3DComponent = getMutableComponent<Object3DComponent>(entity, Object3DComponent);
  if (object3DComponent !== undefined) {
  object3DComponent.value.position.copy(transform.position)
  object3DComponent.value.rotation.setFromQuaternion(transform.rotation)
  // object3DComponent.value.updateMatrixWorld();
  }
};
