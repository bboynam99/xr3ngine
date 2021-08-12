import { Entity } from '../../../ecs/classes/Entity'

export const GolfAction = {
  playerJoined(entity: Entity, playerId: string) {
    return {
      type: 'puttclub.PLAYER_JOINED' as const,
      entity,
      playerId
    }
  },

  playerStroke(playerId: string) {
    return {
      type: 'puttclub.PLAYER_STROKE' as const,
      playerId
    }
  },

  nextTurn() {
    return {
      type: 'puttclub.NEXT_TURN' as const
    }
  },

  resetBall() {
    return {
      type: 'puttclub.RESET_BALL' as const
    }
  },

  nextHole() {
    return {
      type: 'puttclub.NEXT_HOLE' as const
    }
  }
}

export type GolfActionType = ReturnType<typeof GolfAction[keyof typeof GolfAction]>
