import { createWorld, IWorld } from '../../ecs/bitecs'
import { Entity } from './Entity'

export type PipelineType = (world: ECSWorld) => ECSWorld
export interface EnginePipelines {
  fixedPipeline: PipelineType
  freePipeline: PipelineType
  networkPipeline: PipelineType
  [x: string]: PipelineType
}

export interface ECSWorld extends IWorld {
  _removedComponents: Map<Entity, any>
  delta: number
  time: number
  world: World
}

let worldIds = 0
export class World {
  static worlds: Map<number, World> = new Map<number, World>()
  static defaultWorld: World
  ecsWorld: ECSWorld
  entities: Entity[]
  portalEntities: Entity[]
  pipelines: EnginePipelines

  constructor() {
    if (typeof World.defaultWorld === 'undefined') {
      World.defaultWorld = this
    }
    World.worlds.set(worldIds++, this)
    this.ecsWorld = createWorld() as ECSWorld
    this.ecsWorld._removedComponents = new Map()
    this.entities = []
    this.ecsWorld.world = this
    this.portalEntities = []
  }
}
