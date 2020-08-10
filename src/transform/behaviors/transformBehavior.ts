import { Entity } from "ecsy"
import { Object3DComponent } from "ecsy-three"
import { vec3 } from "gl-matrix"
import { Quaternion } from "three/src/math/Quaternion"
import { Behavior } from "../../common/interfaces/Behavior"
import { TransformComponent } from "../components/TransformComponent"
const q: Quaternion = new Quaternion()
let transform: TransformComponent
const _deltaV: vec3 = [0, 0, 0]
const _position: vec3 = [0, 0, 0]
const _velocity: vec3 = [0, 0, 0]

export const transformBehavior: Behavior = (entity: Entity, args: { event: MouseEvent }, delta): void => {
  transform = entity.getMutableComponent(TransformComponent)

  vec3.set(_position, transform.position[0], transform.position[1], transform.position[2])
  vec3.set(_velocity, transform.velocity[0], transform.velocity[1], transform.velocity[2])

  console.log(_velocity)

  const object3DComponent = entity.getMutableComponent(Object3DComponent)

  // Apply velocity to position
  if (vec3.length(_velocity) > 0) {
    vec3.scale(_deltaV, _velocity, delta)
    vec3.add(_position, _position, _deltaV)
    transform.position = _position
    object3DComponent.value.position.set(_position[0], _position[1], _position[2])
  }

  // TODO: Need to apply spin
  object3DComponent.value.rotation.setFromQuaternion(q.fromArray(transform.rotation))
}
