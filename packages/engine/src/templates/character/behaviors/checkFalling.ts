import { CharacterComponent } from '../components/CharacterComponent';
import { Behavior } from '../../../common/interfaces/Behavior';
import { getComponent } from '../../../ecs/functions/EntityFunctions';
import { addState } from '../../../state/behaviors/StateBehaviors';

export const checkFalling: Behavior = (entity) => {
  const actor = getComponent<CharacterComponent>(entity, CharacterComponent as any);
//   if (!actor.rayHasHit)
    // addState(entity, { state: FallingState });
};
