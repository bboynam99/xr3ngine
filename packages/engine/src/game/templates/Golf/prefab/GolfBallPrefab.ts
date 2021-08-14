import { Color, Group, MathUtils, Mesh, Quaternion, Vector3, Vector4 } from 'three'
import { Body, BodyType, ShapeType, SHAPES, RaycastQuery, SceneQueryType, PhysXInstance } from 'three-physx'
import { AssetLoader } from '../../../../assets/classes/AssetLoader'
import { isClient } from '../../../../common/functions/isClient'
import { Engine } from '../../../../ecs/classes/Engine'
import { Entity } from '../../../../ecs/classes/Entity'
import { addComponent, getComponent } from '../../../../ecs/functions/EntityFunctions'
import { Network } from '../../../../networking/classes/Network'
import { NetworkObjectComponent } from '../../../../networking/components/NetworkObjectComponent'
import { isEntityLocalClient } from '../../../../networking/functions/isEntityLocalClient'
import { spawnPrefab } from '../../../../networking/functions/spawnPrefab'
import { ClientAuthoritativeComponent } from '../../../../physics/components/ClientAuthoritativeComponent'
import { ColliderComponent } from '../../../../physics/components/ColliderComponent'
import { VelocityComponent } from '../../../../physics/components/VelocityComponent'
import { CollisionGroups } from '../../../../physics/enums/CollisionGroups'
import TrailRenderer from '../../../../scene/classes/TrailRenderer'
import { Object3DComponent } from '../../../../scene/components/Object3DComponent'
import { TransformComponent } from '../../../../transform/components/TransformComponent'
import { GameObject } from '../../../components/GameObject'
import { applyHideOrVisibleState } from '../behaviors/hideUnhideBall'
import { GolfBallComponent } from '../components/GolfBallComponent'
import { GolfCollisionGroups, GolfColours, GolfPrefabTypes } from '../GolfGameConstants'
import { GolfObjectEntities, GolfState } from '../GolfSystem'

/**
 * @author Josh Field <github.com/HexaField>
 */

export enum BALL_STATES {
  INACTIVE,
  WAITING,
  MOVING,
  STOPPED
}

export const setBallState = (entityBall: Entity, ballState: BALL_STATES) => {
  const golfBallComponent = getComponent(entityBall, GolfBallComponent)
  const obj = getComponent(entityBall, Object3DComponent)
  console.log('setBallState', Object.values(BALL_STATES)[ballState])
  golfBallComponent.state = ballState

  switch (ballState) {
    case BALL_STATES.INACTIVE: {
      // show ball
      if (isClient) obj.value.visible = false
      return
    }
    case BALL_STATES.WAITING: {
      // show ball
      if (isClient) obj.value.visible = true
      return
    }
    case BALL_STATES.MOVING: {
      return
    }
    case BALL_STATES.STOPPED: {
      return
    }
  }
}

export const resetBall = (entityBall: Entity, position: number[]) => {
  console.log('moving ball to', position)

  const collider = getComponent(entityBall, ColliderComponent)
  collider.body.updateTransform({
    translation: new Vector3(...position)
  })
  collider.body.setLinearVelocity(new Vector3(), true)

  const velocity = getComponent(entityBall, VelocityComponent)
  velocity.velocity.copy(new Vector3())
}

export const spawnBall = (entityPlayer: Entity, ownerPlayerNumber: number, playerCurrentHole: number): void => {
  const playerNetworkObject = getComponent(entityPlayer, NetworkObjectComponent)

  const networkId = Network.getNetworkId()
  const uuid = MathUtils.generateUUID()

  const teeEntity = GolfObjectEntities.get(`GolfTee-${playerCurrentHole}`)
  const teeTransform = getComponent(teeEntity, TransformComponent)

  const parameters: GolfBallSpawnParameters = {
    spawnPosition: new Vector3().copy(teeTransform.position),
    ownerPlayerNumber,
    ownerNetworkId: playerNetworkObject.networkId
  }

  // this spawns the ball on the server
  spawnPrefab(
    GolfPrefabTypes.Ball,
    playerNetworkObject.ownerId, // the uuid of the player whose ball this is
    uuid,
    networkId,
    parameters
  )

  // this sends the ball to the clients
  Network.instance.worldState.createObjects.push({
    networkId,
    ownerId: playerNetworkObject.ownerId,
    uniqueId: uuid,
    prefabType: GolfPrefabTypes.Ball,
    parameters
  })
}

/**
 * @author Josh Field <github.com/HexaField>
 */

export const updateBall = (entityBall: Entity): void => {
  const collider = getComponent(entityBall, ColliderComponent)
  if (!collider) return
  const ballPosition = collider.body.transform.translation
  const golfBallComponent = getComponent(entityBall, GolfBallComponent)
  golfBallComponent.groundRaycast.origin.copy(ballPosition)

  if (isClient) {
    const obj = getComponent(entityBall, Object3DComponent)
    if (!obj?.value) return
    const trail = obj.value.userData.trailObject as TrailRenderer

    const time = Date.now()
    if (time - obj.value.userData.lastTrailUpdateTime > 10) {
      trail.advance()
      obj.value.userData.lastTrailUpdateTime = time
    } else {
      trail.updateHead()
    }
  }
}

/**
 * @author Josh Field <github.com/HexaField>
 */

const golfBallRadius = 0.03
const golfBallColliderExpansion = 0.01

function assetLoadCallback(group: Group, ballEntity: Entity, ownerPlayerNumber: number) {
  const color = GolfColours[ownerPlayerNumber]

  // its transform was set in createGolfBallPrefab from parameters (its transform Golf Tee);
  const transform = getComponent(ballEntity, TransformComponent)
  const gameObject = getComponent(ballEntity, GameObject)
  const ballMesh = group.children[0].clone(true) as Mesh
  ballMesh.name = 'Ball' + gameObject.uuid
  ballMesh.position.copy(transform.position)
  ballMesh.scale.copy(transform.scale)
  ballMesh.castShadow = true
  ballMesh.receiveShadow = true
  ballMesh.visible = ownerPlayerNumber === GolfState.currentPlayer.value
  addComponent(ballEntity, Object3DComponent, { value: ballMesh })
  // after because break trail
  applyHideOrVisibleState(ballEntity)

  // Add trail effect

  const trailHeadGeometry = []
  trailHeadGeometry.push(new Vector3(-1.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0), new Vector3(1.0, 0.0, 0.0))
  const trailObject = new TrailRenderer(false)
  const trailMaterial = TrailRenderer.createBaseMaterial()
  const colorVec4 = new Vector4().fromArray([...new Color(color).toArray(), 1])
  trailMaterial.uniforms.headColor.value = colorVec4
  trailMaterial.uniforms.tailColor.value = colorVec4
  const trailLength = 50
  trailObject.initialize(trailMaterial, trailLength, false, 0, trailHeadGeometry, ballMesh)
  Engine.scene.add(trailObject)
  ballMesh.userData.trailObject = trailObject
  ballMesh.userData.lastTrailUpdateTime = Date.now()
}

type GolfBallSpawnParameters = {
  spawnPosition: Vector3
  ownerPlayerNumber: number
  ownerNetworkId: number
}

export const initializeGolfBall = (ballEntity: Entity, parameters: GolfBallSpawnParameters) => {
  const { ownerPlayerNumber, spawnPosition, ownerNetworkId } = parameters

  const transform = addComponent(ballEntity, TransformComponent, {
    position: new Vector3(spawnPosition.x, spawnPosition.y + golfBallRadius, spawnPosition.z),
    rotation: new Quaternion(),
    scale: new Vector3().setScalar(golfBallRadius)
  })
  addComponent(ballEntity, VelocityComponent, { velocity: new Vector3() })
  addComponent(ballEntity, GameObject, { role: `GolfBall-${ownerPlayerNumber}` })

  if (isClient) {
    // addComponent(ballEntity, InterpolationComponent, {})
    const group = AssetLoader.getFromCache(Engine.publicPath + '/models/golf/golf_ball.glb')
    assetLoadCallback(group, ballEntity, ownerPlayerNumber)
  }

  const shape: ShapeType = {
    shape: SHAPES.Sphere,
    options: { radius: golfBallRadius + golfBallColliderExpansion },
    config: {
      // we add a rest offset to make the contact detection of the ball bigger, without making the actual size of the ball bigger
      restOffset: -golfBallColliderExpansion,
      // we mostly reverse the expansion for contact detection (so the ball rests on the ground)
      // this will not reverse the expansion for trigger colliders
      contactOffset: golfBallColliderExpansion,
      material: { staticFriction: 0.2, dynamicFriction: 0.2, restitution: 0.9 },
      collisionLayer: GolfCollisionGroups.Ball,
      collisionMask:
        CollisionGroups.Default | CollisionGroups.Ground | GolfCollisionGroups.Course | GolfCollisionGroups.Hole
    }
  }

  const body = PhysXInstance.instance.addBody(
    new Body({
      shapes: [shape],
      type: isEntityLocalClient(Network.instance.networkObjects[ownerNetworkId].entity)
        ? BodyType.DYNAMIC
        : BodyType.KINEMATIC,
      transform: {
        translation: { x: transform.position.x, y: transform.position.y, z: transform.position.z }
      },
      userData: ballEntity
    })
  )

  addComponent(ballEntity, ColliderComponent, { body })

  // for track ground
  const groundRaycast = PhysXInstance.instance.addRaycastQuery(
    new RaycastQuery({
      type: SceneQueryType.Closest,
      origin: transform.position,
      direction: new Vector3(0, -1, 0),
      maxDistance: 1,
      collisionMask: GolfCollisionGroups.Course
    })
  )

  // for track wall
  const wallRaycast = PhysXInstance.instance.addRaycastQuery(
    new RaycastQuery({
      type: SceneQueryType.Closest,
      origin: transform.position,
      direction: new Vector3(0, 0, 0),
      maxDistance: 0.5,
      collisionMask: CollisionGroups.Default | CollisionGroups.Ground | GolfCollisionGroups.Course
    })
  )

  addComponent(ballEntity, GolfBallComponent, { groundRaycast, wallRaycast, state: BALL_STATES.INACTIVE })
  addComponent(ballEntity, ClientAuthoritativeComponent, { ownerNetworkId })
}
