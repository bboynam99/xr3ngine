import { ParticleEmitterComponent } from '../components/ParticleEmitter'
import { defineQuery, getComponent } from '../../ecs/functions/EntityFunctions'
import { applyTransform } from '../functions/particleHelpers'
import { World } from '../../ecs/classes/World'

export const ParticleSystem = async (world: World) => {
  const emitterQuery = defineQuery([ParticleEmitterComponent])

  return () => {
    const { delta } = world
    for (const entity of emitterQuery(world)) {
      const emitter = getComponent(entity, ParticleEmitterComponent)
      applyTransform(entity, emitter)
      emitter.particleEmitterMesh?.update(delta)
    }
  }
}
