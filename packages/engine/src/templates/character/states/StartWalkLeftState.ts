import { StateSchemaValue } from '../../../state/interfaces/StateSchema';
import { ActorComponent } from '../components/ActorComponent';
import { setActorAnimation } from "../behaviors/setActorAnimation";
import { checkFalling } from "../behaviors/checkFalling";
import { initializeCharacterState } from "../behaviors/initializeCharacterState";
import { updateCharacterState } from "../behaviors/updateCharacterState";
import { CharacterStateGroups } from '../CharacterStateGroups';
import { onAnimationEnded } from '../behaviors/onAnimationEnded';
import { WalkState } from './WalkState';

export const StartWalkLeftState: StateSchemaValue = {
  group: CharacterStateGroups.MOVEMENT,
  componentProperties: {
    component: ActorComponent,
    properties: {
      ['canEnterVehicles']: true,
      ['rotationSimulator.mass']: 20,
      ['rotationSimulator.damping']: 0.7,
      ['arcadeVelocityTarget']: { x: 0.0, y: 0.0, z: 0.8 },
    }
  },
  onEntry: [
    {
      behavior: initializeCharacterState
    },
    {
      behavior: setActorAnimation,
      args: {
        name: 'start_left',
        transitionDuration: 0.1
      }
    }
  ],
  onUpdate: [
    {
      behavior: updateCharacterState,
      args: {
        setCameraRelativeOrientationTarget: true
      }
    },
    {
      behavior: checkFalling
    },
    {
      behavior: onAnimationEnded,
      args: {
        transitionToState: WalkState
      }
    }
  ]
};
