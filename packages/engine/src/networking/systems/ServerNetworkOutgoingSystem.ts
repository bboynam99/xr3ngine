import { defineQuery, defineSystem, Not, System } from 'bitecs'
import { AvatarComponent } from '../../avatar/components/AvatarComponent'
import { XRInputSourceComponent } from '../../avatar/components/XRInputSourceComponent'
import { ECSWorld } from '../../ecs/classes/World'
import { getComponent } from '../../ecs/functions/EntityFunctions'
import { TransformComponent } from '../../transform/components/TransformComponent'
import { Network } from '../classes/Network'
import { NetworkObjectComponent } from '../components/NetworkObjectComponent'
import { TransformStateInterface } from '../interfaces/WorldState'
import { TransformStateModel } from '../schema/transformStateSchema'

export const ServerNetworkOutgoingSystem = async (): Promise<System> => {
  const networkTransformsQuery = defineQuery([Not(AvatarComponent), NetworkObjectComponent, TransformComponent])
  const avatarTransformsQuery = defineQuery([AvatarComponent, NetworkObjectComponent, TransformComponent])
  const ikTransformsQuery = defineQuery([XRInputSourceComponent])

  return defineSystem((world: ECSWorld) => {
    const transformState: TransformStateInterface = {
      tick: Network.instance.tick,
      time: Date.now(),
      transforms: [],
      ikTransforms: []
    }

    // Transforms that are updated are automatically collected
    // note: onChanged needs to currently be handled outside of fixedExecute
    for (const entity of networkTransformsQuery(world)) {
      const transformComponent = getComponent(entity, TransformComponent)
      const networkObject = getComponent(entity, NetworkObjectComponent)
      const snapShotTime = networkObject.snapShotTime

      // TODO: reduce quaternions over network to three components
      transformState.transforms.push({
        networkId: networkObject.networkId,
        snapShotTime: snapShotTime,
        x: transformComponent.position.x,
        y: transformComponent.position.y,
        z: transformComponent.position.z,
        qX: transformComponent.rotation.x,
        qY: transformComponent.rotation.y,
        qZ: transformComponent.rotation.z,
        qW: transformComponent.rotation.w
      })
    }

    for (const entity of avatarTransformsQuery(world)) {
      const transformComponent = getComponent(entity, TransformComponent)
      const networkObject = getComponent(entity, NetworkObjectComponent)
      const snapShotTime = networkObject.snapShotTime

      // TODO: reduce quaternions over network to three components
      transformState.transforms.push({
        networkId: networkObject.networkId,
        snapShotTime: snapShotTime,
        x: transformComponent.position.x,
        y: transformComponent.position.y,
        z: transformComponent.position.z,
        qX: transformComponent.rotation.x,
        qY: transformComponent.rotation.y,
        qZ: transformComponent.rotation.z,
        qW: transformComponent.rotation.w
      })
    }

    for (const entity of ikTransformsQuery(world)) {
      const networkObject = getComponent(entity, NetworkObjectComponent)
      const snapShotTime = networkObject.snapShotTime

      const xrInputs = getComponent(entity, XRInputSourceComponent)
      const hmd = xrInputs.head.position.toArray().concat(xrInputs.head.quaternion.toArray())
      const left = xrInputs.controllerLeft.position.toArray().concat(xrInputs.controllerLeft.quaternion.toArray())
      const right = xrInputs.controllerRight.position.toArray().concat(xrInputs.controllerRight.quaternion.toArray())

      transformState.ikTransforms.push({
        networkId: networkObject.networkId,
        snapShotTime: snapShotTime,
        hmd,
        left,
        right
      })
    }

    try {
      const bufferUnreliable = TransformStateModel.toBuffer(transformState)
      if (!bufferUnreliable) {
        console.warn('Transform buffer is null')
        console.warn(transformState)
      } else {
        if (Network.instance.transport && typeof Network.instance.transport.sendData === 'function')
          Network.instance.transport.sendData(bufferUnreliable)
      }
    } catch (e) {
      console.error(transformState)
    }

    return world
  })
}
