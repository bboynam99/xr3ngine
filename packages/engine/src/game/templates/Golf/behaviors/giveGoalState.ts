import { Behavior } from '../../../../common/interfaces/Behavior'
import { Entity } from '../../../../ecs/classes/Entity'
import { getComponent } from '../../../../ecs/functions/EntityFunctions'
import { Interactable } from '../../../../interaction/components/Interactable'
import { GamesSchema } from '../../../../game/templates/GamesSchema'
import { getGame } from '../../../../game/functions/functions'

export const giveGoalState: Behavior = (
  entity: Entity,
  args?: any,
  delta?: number,
  entityTarget?: Entity,
  time?: number,
  checks?: any
): void => {
  const game = getGame(entity)
  const gameSchema = GamesSchema[game.gameMode]
  const nameObject = getComponent(entityTarget, Interactable).data.interactionText ?? '1'

  // TODO: check this is right
  const entityPlayer = game.gamePlayers[gameSchema.gamePlayerRoles[nameObject]][0]

  // TODO
  // addStateComponent( entityPlayer, Goal );
}
