import { Entity } from "@xr3ngine/engine/src/ecs/classes/Entity";
import { State } from "@xr3ngine/engine/src/state/components/State";

import { TransformComponent } from "@xr3ngine/engine/src/transform/components/TransformComponent";
import { addComponent } from "@xr3ngine/engine/src/ecs/functions/EntityFunctions";
import { getMutableComponent, getComponent } from "@xr3ngine/engine/src/ecs/functions/EntityFunctions";
import { ColliderComponent } from "@xr3ngine/engine/src/physics/components/ColliderComponent";
import { RigidBody } from "@xr3ngine/engine/src/physics/components/RigidBody";


export const myCustomBehavior = (entity: Entity) => {

  addComponent(entity, ColliderComponent, { type: 'box', scale: [3, 3, 3], mass: 10 })
  addComponent(entity, RigidBody)

};
