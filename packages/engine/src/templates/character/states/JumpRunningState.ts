import { StateSchemaValue } from '../../../state/interfaces/StateSchema';
import { CharacterComponent } from '../components/CharacterComponent';
import { setActorAnimation, setActorAnimationById } from "../behaviors/setActorAnimation";
import { initializeCharacterState } from "../behaviors/initializeCharacterState";
import { updateCharacterState } from "../behaviors/updateCharacterState";
import { CharacterStateGroups } from '../CharacterStateGroups';
import { jumpRunning } from "../behaviors/jumpRunning";
import { setArcadeVelocityTarget } from '../behaviors/setArcadeVelocityTarget';
import { CharacterAnimationsIds } from "../CharacterAnimationsIds";

export const JumpRunningState: StateSchemaValue = {
  group: CharacterStateGroups.MOVEMENT,
  componentProperties: [{
    component: CharacterComponent,
    properties: {
      ['velocitySimulator.mass']: 100,
      ['alreadyJumped']: false
    }
  }],
  onEntry:  [
    {
      behavior: setArcadeVelocityTarget,
      args: { x: 0, y: 0, z: 0 }
    },
      {
        behavior: initializeCharacterState
      },
      {
        behavior: setActorAnimationById,
        args: {
          animationId: CharacterAnimationsIds.JUMP_RUNNING,
          transitionDuration: 0.3
        }
      }
  ],
  onUpdate: [
    { behavior: updateCharacterState,
    args: {
      setCameraRelativeOrientationTarget: true
    }
  },
    { behavior: jumpRunning }
  ]
};
