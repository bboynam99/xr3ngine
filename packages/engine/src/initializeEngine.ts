import { detect, detectOS } from 'detect-browser'
import _ from 'lodash'
import { BufferGeometry, Euler, Mesh, PerspectiveCamera, Quaternion, Scene } from 'three'
import { AudioListener } from './audio/StereoAudioListener'
//@ts-ignore
import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh'
import { loadDRACODecoder } from './assets/loaders/gltf/NodeDracoLoader'
import { SpawnPoints } from './avatar/ServerAvatarSpawnSystem'
import { BotHookFunctions } from './bot/functions/botHookFunctions'
import { Timer } from './common/functions/Timer'
import { Engine } from './ecs/classes/Engine'
import { EngineEvents } from './ecs/classes/EngineEvents'
import { reset } from './ecs/functions/EngineFunctions'
import { registerInjectedSystems, registerSystem, registerSystemWithArgs } from './ecs/functions/SystemFunctions'
import { SystemUpdateType } from './ecs/functions/SystemUpdateType'
import { DefaultInitializationOptions, EngineSystemPresets, InitializeOptions } from './initializationOptions'
import { addClientInputListeners, removeClientInputListeners } from './input/functions/clientInputListeners'
import { Network } from './networking/classes/Network'
import { configCanvasElement } from './renderer/functions/canvas'
import { FontManager } from './xrui/classes/FontManager'
import { createWorld } from './ecs/classes/World'
import { UserId } from '@xrengine/common/src/interfaces/UserId'

// @ts-ignore
Quaternion.prototype.toJSON = function () {
  return { x: this._x, y: this._y, z: this._z, w: this._w }
}

// @ts-ignore
Euler.prototype.toJSON = function () {
  return { x: this._x, y: this._y, z: this._z, order: this._order }
}

Mesh.prototype.raycast = acceleratedRaycast
BufferGeometry.prototype['disposeBoundsTree'] = disposeBoundsTree
BufferGeometry.prototype['computeBoundsTree'] = computeBoundsTree

const configureClient = async (options: Required<InitializeOptions>) => {
  const canvas = configCanvasElement(options.renderer.canvasId!)

  // https://bugs.chromium.org/p/chromium/issues/detail?id=1106389
  Engine.audioListener = new AudioListener()

  Engine.scene = new Scene()
  EngineEvents.instance.once(EngineEvents.EVENTS.JOINED_WORLD, () => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl')!
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')!
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    const enableRenderer = !/SwiftShader/.test(renderer)
    canvas.remove()
    EngineEvents.instance.dispatchEvent({
      type: EngineEvents.EVENTS.ENABLE_SCENE,
      renderer: enableRenderer,
      physics: true
    })
    Engine.hasJoinedWorld = true
  })

  if (options.scene.disabled !== true) {
    Engine.camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000)
    Engine.camera.layers.enableAll()
    Engine.scene.add(Engine.camera)
    Engine.camera.add(Engine.audioListener)
    addClientInputListeners(canvas)
  }

  Network.instance = new Network()

  const { schema } = options.networking

  if (schema) {
    Network.instance.schema = schema
    if (schema.transport) Network.instance.transport = new schema.transport()
  }

  await FontManager.instance.getDefaultFont()

  globalThis.botHooks = BotHookFunctions
  globalThis.Engine = Engine
  globalThis.EngineEvents = EngineEvents
  globalThis.Network = Network

  await registerClientSystems(options, canvas)
}

const configureEditor = async (options: Required<InitializeOptions>) => {
  Engine.scene = new Scene()

  Engine.camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000)
  Engine.camera.layers.enableAll()
  Engine.scene.add(Engine.camera)

  await registerEditorSystems(options)
}

const configureServer = async (options: Required<InitializeOptions>) => {
  Engine.scene = new Scene()
  Network.instance = new Network()

  const { schema, app } = options.networking
  Network.instance.schema = schema
  Network.instance.transport = new schema.transport(app)

  if (
    process.env.SERVER_MODE !== undefined &&
    (process.env.SERVER_MODE === 'realtime' || process.env.SERVER_MODE === 'local')
  ) {
    Network.instance.transport.initialize()
    Network.instance.isInitialized = true
  }

  EngineEvents.instance.once(EngineEvents.EVENTS.JOINED_WORLD, () => {
    console.log('joined world')
    EngineEvents.instance.dispatchEvent({ type: EngineEvents.EVENTS.ENABLE_SCENE, renderer: true, physics: true })
    Engine.hasJoinedWorld = true
  })

  await loadDRACODecoder()

  new SpawnPoints()

  await registerServerSystems(options)
}

// todo - expose this as a default and overridable pipeline

const registerClientSystems = async (options: Required<InitializeOptions>, canvas: HTMLCanvasElement) => {
  if (options.scene.disabled) {
    registerSystem(SystemUpdateType.UPDATE, import('./networking/systems/IncomingNetworkSystem'))
    registerSystem(SystemUpdateType.UPDATE, import('./networking/systems/OutgoingNetworkSystem'))
    return
  }

  // Input
  registerSystem(SystemUpdateType.UPDATE, import('./xr/systems/XRSystem'))
  registerSystem(SystemUpdateType.UPDATE, import('./input/systems/ClientInputSystem'))
  registerSystem(SystemUpdateType.UPDATE, import('./camera/systems/CameraSystem'))
  registerSystem(SystemUpdateType.UPDATE, import('./navigation/systems/AutopilotSystem'))

  registerInjectedSystems(SystemUpdateType.UPDATE, options.systems)

  registerSystemWithArgs(SystemUpdateType.UPDATE, import('./ecs/functions/FixedPipelineSystem'), {
    updatesPerSecond: 60
  })

  /**
   *
   *  Begin FIXED Systems
   *
   */

  // Network (Incoming)
  registerSystem(SystemUpdateType.FIXED_EARLY, import('./networking/systems/IncomingNetworkSystem'))

  registerInjectedSystems(SystemUpdateType.FIXED_EARLY, options.systems)

  // Bot
  registerSystem(SystemUpdateType.FIXED, import('./bot/systems/BotHookSystem'))

  // Maps
  registerSystem(SystemUpdateType.FIXED, import('./map/MapUpdateSystem'))

  // Navigation
  registerSystem(SystemUpdateType.FIXED, import('./navigation/systems/FollowSystem'))
  registerSystem(SystemUpdateType.FIXED, import('./navigation/systems/AfkCheckSystem'))

  // Avatar Systems
  registerSystem(SystemUpdateType.FIXED, import('./physics/systems/InterpolationSystem'))
  registerSystem(SystemUpdateType.FIXED, import('./avatar/ClientAvatarSpawnSystem'))
  registerSystem(SystemUpdateType.FIXED, import('./avatar/AvatarSystem'))
  registerSystem(SystemUpdateType.FIXED, import('./avatar/AvatarControllerSystem'))
  // Avatar IKRig
  registerSystem(SystemUpdateType.FIXED, import('./ikrig/systems/IKRigSystem'))

  registerInjectedSystems(SystemUpdateType.FIXED, options.systems)

  // Scene Systems
  registerSystem(SystemUpdateType.FIXED_LATE, import('./interaction/systems/EquippableSystem'))
  registerSystem(SystemUpdateType.FIXED_LATE, import('./scene/systems/SceneObjectSystem'))
  registerSystem(SystemUpdateType.FIXED_LATE, import('./scene/systems/NamedEntitiesSystem'))
  registerSystem(SystemUpdateType.FIXED_LATE, import('./transform/systems/TransformSystem'))
  registerSystemWithArgs(SystemUpdateType.FIXED_LATE, import('./physics/systems/PhysicsSystem'), {
    simulationEnabled: options.physics.simulationEnabled
  })

  registerInjectedSystems(SystemUpdateType.FIXED_LATE, options.systems)

  // Network (Outgoing)
  registerSystem(SystemUpdateType.FIXED_LATE, import('./networking/systems/OutgoingNetworkSystem'))

  /**
   *
   *  End FIXED Systems
   *
   */

  // Camera & UI systems
  registerSystem(SystemUpdateType.PRE_RENDER, import('./networking/systems/MediaStreamSystem'))
  registerSystem(SystemUpdateType.PRE_RENDER, import('./xrui/systems/XRUISystem'))
  registerSystem(SystemUpdateType.PRE_RENDER, import('./interaction/systems/InteractiveSystem'))

  // Audio Systems
  registerSystem(SystemUpdateType.PRE_RENDER, import('./audio/systems/AudioSystem'))
  registerSystem(SystemUpdateType.PRE_RENDER, import('./audio/systems/PositionalAudioSystem'))

  // Animation Systems
  registerSystem(SystemUpdateType.PRE_RENDER, import('./avatar/AvatarLoadingSystem'))
  registerSystem(SystemUpdateType.PRE_RENDER, import('./avatar/AnimationSystem'))
  registerSystem(SystemUpdateType.PRE_RENDER, import('./particles/systems/ParticleSystem'))
  registerSystem(SystemUpdateType.PRE_RENDER, import('./debug/systems/DebugHelpersSystem'))
  registerSystem(SystemUpdateType.PRE_RENDER, import('./renderer/HighlightSystem'))

  registerInjectedSystems(SystemUpdateType.PRE_RENDER, options.systems)

  registerSystemWithArgs(SystemUpdateType.PRE_RENDER, import('./renderer/WebGLRendererSystem'), {
    canvas,
    enabled: !options.renderer.disabled
  })

  registerInjectedSystems(SystemUpdateType.POST_RENDER, options.systems)
}

const registerEditorSystems = async (options: Required<InitializeOptions>) => {
  // Scene Systems
  registerSystem(SystemUpdateType.FIXED, import('./scene/systems/NamedEntitiesSystem'))
  registerSystem(SystemUpdateType.FIXED, import('./transform/systems/TransformSystem'))
  registerSystemWithArgs(SystemUpdateType.FIXED, import('./physics/systems/PhysicsSystem'), {
    simulationEnabled: options.physics.simulationEnabled
  })

  // Miscellaneous Systems
  registerSystem(SystemUpdateType.FIXED, import('./particles/systems/ParticleSystem'))
  registerSystem(SystemUpdateType.FIXED, import('./debug/systems/DebugHelpersSystem'))
}

const registerServerSystems = async (options: Required<InitializeOptions>) => {
  registerInjectedSystems(SystemUpdateType.UPDATE, options.systems)

  registerSystemWithArgs(SystemUpdateType.UPDATE, import('./ecs/functions/FixedPipelineSystem'), {
    updatesPerSecond: 60
  })
  // Network Incoming Systems
  registerSystem(SystemUpdateType.FIXED_EARLY, import('./networking/systems/IncomingNetworkSystem'))
  registerSystem(SystemUpdateType.FIXED_EARLY, import('./networking/systems/MediaStreamSystem'))

  registerInjectedSystems(SystemUpdateType.FIXED_EARLY, options.systems)

  // Input Systems
  registerSystem(SystemUpdateType.FIXED, import('./avatar/AvatarSystem'))
  registerSystem(SystemUpdateType.FIXED, import('./avatar/ServerAvatarSpawnSystem'))

  registerInjectedSystems(SystemUpdateType.FIXED, options.systems)

  // Scene Systems
  registerSystem(SystemUpdateType.FIXED_LATE, import('./scene/systems/NamedEntitiesSystem'))
  registerSystem(SystemUpdateType.FIXED_LATE, import('./transform/systems/TransformSystem'))
  registerSystemWithArgs(SystemUpdateType.FIXED_LATE, import('./physics/systems/PhysicsSystem'), {
    simulationEnabled: options.physics.simulationEnabled
  })

  registerInjectedSystems(SystemUpdateType.FIXED_LATE, options.systems)

  // Network Outgoing Systems
  registerSystem(SystemUpdateType.FIXED_LATE, import('./networking/systems/OutgoingNetworkSystem'))

  registerInjectedSystems(SystemUpdateType.PRE_RENDER, options.systems)
  registerInjectedSystems(SystemUpdateType.POST_RENDER, options.systems)
}

export const initializeEngine = async (initOptions: InitializeOptions = {}): Promise<void> => {
  const options: Required<InitializeOptions> = _.defaultsDeep({}, initOptions, DefaultInitializationOptions)
  const sceneWorld = createWorld()
  Engine.currentWorld = sceneWorld

  Engine.initOptions = options
  Engine.offlineMode = typeof options.networking.schema.transport === 'undefined'
  Engine.publicPath = options.publicPath

  // Browser state set
  if (options.type !== EngineSystemPresets.SERVER && navigator && window) {
    const browser = detect()
    const os = detectOS(navigator.userAgent)

    // Add iOS and safari flag to window object -- To use it for creating an iOS compatible WebGLRenderer for example
    ;(window as any).iOS =
      os === 'iOS' ||
      /iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    ;(window as any).safariWebBrowser = browser?.name === 'safari'

    Engine.isHMD = /Oculus/i.test(navigator.userAgent) // TODO: more HMDs;
    Engine.xrSupported = await (navigator as any).xr?.isSessionSupported('immersive-vr')
  }

  // Config Engine based on passed type
  if (options.type === EngineSystemPresets.CLIENT) {
    await configureClient(options)
  } else if (options.type === EngineSystemPresets.EDITOR) {
    await configureEditor(options)
  } else if (options.type === EngineSystemPresets.SERVER) {
    await configureServer(options)
  }

  await sceneWorld.physics.createScene()

  await sceneWorld.initSystems()

  const executeWorlds = (delta, elapsedTime) => {
    for (const world of Engine.worlds) {
      Engine.currentWorld = world
      world.execute(delta, elapsedTime)
    }
    Engine.currentWorld = null
  }

  Engine.engineTimer = Timer(executeWorlds)

  // Engine type specific post configuration work
  if (options.type === EngineSystemPresets.CLIENT) {
    EngineEvents.instance.once(EngineEvents.EVENTS.SCENE_LOADED, () => {
      Engine.engineTimer.start()
    })
    const onUserEngage = () => {
      Engine.hasEngaged = true
      EngineEvents.instance.dispatchEvent({ type: EngineEvents.EVENTS.USER_ENGAGE })
      ;['click', 'touchstart', 'touchend', 'pointerdown'].forEach((type) => {
        window.addEventListener(type, onUserEngage)
      })
    }
    ;['click', 'touchstart', 'touchend', 'pointerdown'].forEach((type) => {
      window.addEventListener(type, onUserEngage)
    })

    EngineEvents.instance.once(EngineEvents.EVENTS.CONNECT, ({ id }) => {
      Network.instance.isInitialized = true
      Engine.userId = id
    })
  } else if (options.type === EngineSystemPresets.SERVER) {
    Engine.userId = 'server' as UserId
    Engine.engineTimer.start()
  }

  // Mark engine initialized
  Engine.isInitialized = true
  EngineEvents.instance.dispatchEvent({ type: EngineEvents.EVENTS.INITIALIZED_ENGINE })
}

export const shutdownEngine = async () => {
  if (Engine.initOptions?.type === EngineSystemPresets.CLIENT) {
    removeClientInputListeners()
  }

  Engine.engineTimer?.clear()
  Engine.engineTimer = null!

  await reset()
}
