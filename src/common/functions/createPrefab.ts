import { Prefab } from "../interfaces/Prefab"
import { World, Entity } from "../../ecs"

export function createPrefab(prefab: Prefab, world: World): Entity {
  const entity = createEntity()
  if (prefab.components)
    Object.keys(prefab.components).forEach(value => {
      addComponent(entity, prefab[value].type, prefab[value].data)
    })
  prefab.onCreate.forEach(value => {
    value.behavior(entity, value.args)
  })
  return entity
}
