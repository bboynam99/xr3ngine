import { Behavior } from '@xr3ngine/engine/src/common/interfaces/Behavior';
import { getComponent } from '../../../ecs/functions/EntityFunctions';
import { addState } from "../../../state/behaviors/addState";
import { CharacterStateTypes } from '../CharacterStateTypes';
import { CharacterComponent } from '../components/CharacterComponent';
import { trySwitchToMovingState } from "./trySwitchToMovingState";

export const setDropState: Behavior = (entity, args = null, deltaTime) => {
  const actor = getComponent<CharacterComponent>(entity, CharacterComponent as any);
  if(!actor.initialized) return;
  const hitGroundOrStopped = actor.rayHasHit || actor.groundImpactVelocity.y > -1;
  if (!hitGroundOrStopped) return;
  // console.log("Setting drop state");

  if (actor.groundImpactVelocity.y < -6)
  {
    addState(entity, { state: CharacterStateTypes.DROP_ROLLING });
  } else if(getComponent(entity, CharacterComponent).localMovementDirection.length() > 0) {
    if (actor.groundImpactVelocity.y < -2) {
      trySwitchToMovingState(entity);
    }
  }
  else
  {
    if (actor.groundImpactVelocity.y < -1) {
      addState(entity, { state: CharacterStateTypes.DROP_IDLE });
    } else {
      addState(entity, { state: CharacterStateTypes.IDLE });
    }
  }
};
