import { StateSchemaValue } from '../../../state/interfaces/StateSchema';
import { CharacterComponent } from '../../../character/components/CharacterComponent';
import { setCharacterAnimation, checkFalling } from '../CharacterStateSchema';
import { initializeCharacterState, updateCharacterState } from '../behaviors/CharacterBaseBehaviors';
import { DefaultStateGroups } from '../CharacterStateGroups';
import { onAnimationEnded } from '../behaviors/onAnimationEnded';
import { IdleState } from './IdleState';
import { StartWalkForwardState } from './StartWalkForwardState';
import { checkMoving } from '../behaviors/checkMoving';

// Idle Behavior
export const DropRollingState: StateSchemaValue = {
  group: DefaultStateGroups.MOVEMENT,
  componentProperties: {
    component: CharacterComponent,
    properties: {
      ['velocitySimulator.damping']: 0.6,
      ['velocitySimulator.mass']: 1,
      ['velocityTarget']: { x: 0.8, y: 0.8, z: 0.8 },
    }
  },
  onEntry: {
    any: [
      {
        behavior: initializeCharacterState
      },
      {
        behavior: setCharacterAnimation,
        args: {
          name: 'drop_running_roll',
          transitionDuration: 0.03
        }
      }
  ]
},
  onUpdate: [
    { behavior: updateCharacterState,
      args: {
        setCameraRelativeOrientationTarget: true
      }
    },
  },
    { behavior: checkMovingOnAnimationEnded,
      args: {
        transitionToStateIfMoving: Walk,
        transitionToStateIfNotMoving: EndWalk
      }
  }]
};
