import { Vector3, Quaternion } from 'three';
import { Behavior } from '../../../../common/interfaces/Behavior';
import { Entity } from '../../../../ecs/classes/Entity';
import { getComponent, getMutableComponent } from "../../../../ecs/functions/EntityFunctions";
import { GamePlayer } from "../../../components/GamePlayer";
import { Interactable } from "../../../../interaction/components/Interactable";

/**
 * @author HydraFire <github.com/HydraFire>
 */

export const unInteractiveToOthers: Behavior = (entity: Entity, args?: any, delta?: number, entityTarget?: Entity, time?: number, checks?: any): void => {
  const interactable = getMutableComponent(entity, Interactable)//.data.interactionText;

  interactable.onInteractionCheck = (entityPlayer, entityBall) => {
    const player = getComponent(entityPlayer, GamePlayer);
    const interactionText = getComponent(entityBall, Interactable).data.interactionText;
    return interactionText === player.role[0];
  }
};
