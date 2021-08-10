import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import EmoteMenu from '@xrengine/client-core/src/common/components/EmoteMenu'
import LoadingScreen from '@xrengine/client-core/src/common/components/Loader'
import {
  GeneralStateList,
  setAppLoaded,
  setAppSpecificOnBoardingStep
} from '@xrengine/client-core/src/common/reducers/app/actions'
import { Config } from '@xrengine/client-core/src/helper'
import { selectLocationState } from '@xrengine/client-core/src/social/reducers/location/selector'
import { selectPartyState } from '@xrengine/client-core/src/social/reducers/party/selector'
import UserMenu from '@xrengine/client-core/src/user/components/UserMenu'
import { selectAuthState } from '@xrengine/client-core/src/user/reducers/auth/selector'
import { doLoginAuto } from '@xrengine/client-core/src/user/reducers/auth/service'
import { InteractableModal } from '@xrengine/client-core/src/world/components/InteractableModal'
import { EngineEvents } from '@xrengine/engine/src/ecs/classes/EngineEvents'
import { InitializeOptions } from '@xrengine/engine/src/initializationOptions'
import { shutdownEngine } from '@xrengine/engine/src/initializeEngine'
import { PhysicsSystem } from '@xrengine/engine/src/physics/systems/PhysicsSystem'
import { PortalComponent } from '@xrengine/engine/src/scene/components/PortalComponent'
import { XRSystem } from '@xrengine/engine/src/xr/systems/XRSystem'
import querystring from 'querystring'
import React, { Suspense, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import url from 'url'
import MediaIconsBox from '../../components/MediaIconsBox'
import NetworkDebug from '../../components/NetworkDebug'
import { selectInstanceConnectionState } from '../../reducers/instanceConnection/selector'
import { provisionInstanceServer, resetInstanceServer } from '../../reducers/instanceConnection/service'
import RecordingApp from './../Recorder/RecordingApp'
import configs from '@xrengine/client-core/src/world/components/editor/configs'
import { getPortalDetails } from '@xrengine/client-core/src/world/functions/getPortalDetails'
import { SystemUpdateType } from '../../../../engine/src/ecs/functions/SystemUpdateType'
import GameServerWarnings from './GameServerWarnings'
import { isTouchAvailable } from '@xrengine/engine/src/common/functions/DetectFeatures'
import { initEngine, retriveLocationByName, teleportToLocation } from './LocationLoadHelper'
import { UserService } from '@xrengine/client-core/src/user/store/UserService'
import { useUserState } from '@xrengine/client-core/src/user/store/UserState'

const goHome = () => (window.location.href = window.location.origin)

const TouchGamepad = React.lazy(() => import('@xrengine/client-core/src/common/components/TouchGamepad'))

const canvasStyle = {
  zIndex: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  WebkitUserSelect: 'none',
  userSelect: 'none'
} as React.CSSProperties

interface Props {
  locationName: string
  // appState?: any
  authState?: any
  locationState?: any
  partyState?: any
  history?: any
  engineInitializeOptions?: InitializeOptions
  instanceConnectionState?: any
  doLoginAuto?: typeof doLoginAuto
  setAppLoaded?: typeof setAppLoaded
  provisionInstanceServer?: typeof provisionInstanceServer
  resetInstanceServer?: typeof resetInstanceServer
  setAppSpecificOnBoardingStep?: typeof setAppSpecificOnBoardingStep
  harmonyOpen?: boolean
}

const mapStateToProps = (state: any) => {
  return {
    // appState: selectAppState(state),
    authState: selectAuthState(state),
    instanceConnectionState: selectInstanceConnectionState(state), //
    locationState: selectLocationState(state),
    partyState: selectPartyState(state)
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAppLoaded: bindActionCreators(setAppLoaded, dispatch),
  doLoginAuto: bindActionCreators(doLoginAuto, dispatch),
  provisionInstanceServer: bindActionCreators(provisionInstanceServer, dispatch),
  resetInstanceServer: bindActionCreators(resetInstanceServer, dispatch),
  setAppSpecificOnBoardingStep: bindActionCreators(setAppSpecificOnBoardingStep, dispatch)
})

export const EnginePage = (props: Props) => {
  const [isUserBanned, setUserBanned] = useState(true)
  const [progressEntity, setProgressEntity] = useState(99)
  const [isValidLocation, setIsValidLocation] = useState(true)
  const [isInXR, setIsInXR] = useState(false)
  const [warningRefreshModalValues, setWarningRefreshModalValues] = useState(initialRefreshModalValues)
  const [noGameserverProvision, setNoGameserverProvision] = useState(false)
  const [instanceDisconnected, setInstanceDisconnected] = useState(false)
  const [instanceKicked, setInstanceKicked] = useState(false)
  const [instanceKickedMessage, setInstanceKickedMessage] = useState('')
  const [porting, setPorting] = useState(false)
  const [newSpawnPos, setNewSpawnPos] = useState(null)
  const [isTeleporting, setIsTeleporting] = useState(false)
  const [newSpawnPos, setNewSpawnPos] = useState<PortalComponent>(null)
  const selfUser = props.authState.get('user')
  const party = props.partyState.get('party')

  let sceneId = null

  const userState = useUserState()
  const dispatch = useDispatch()

  useEffect(() => {
    if (selfUser?.instanceId != null && userState.layerUsersUpdateNeeded.value === true)
      dispatch(UserService.getLayerUsers(true))
    if (selfUser?.channelInstanceId != null && userState.channelLayerUsersUpdateNeeded.value === true)
      dispatch(UserService.getLayerUsers(false))
  }, [selfUser, userState.layerUsersUpdateNeeded.value, userState.channelLayerUsersUpdateNeeded.value])

  useEffect(() => {
    if (Config.publicRuntimeConfig.offlineMode) {
      init(props.locationName)
    } else {
      props.doLoginAuto(true)
      EngineEvents.instance.addEventListener(EngineEvents.EVENTS.RESET_ENGINE, async (ev: any) => {
        if (!ev.instance) return

        await shutdownEngine()
        props.resetInstanceServer()

        if (!isUserBanned) {
          retriveLocationByName(props.authState, props.locationName, history)
        }
      })
    }
  }, [])

  useEffect(() => {
    checkForBan()

    if (!isUserBanned && !props.locationState.get('fetchingCurrentLocation')) {
      retriveLocationByName(props.authState, props.locationName, history)
    }
  }, [props.authState])

  useEffect(() => {
    const currentLocation = props.locationState.get('currentLocation').get('location')

    if (currentLocation.id) {
      if (
        !isUserBanned &&
        !props.instanceConnectionState.get('instanceProvisioned') &&
        !props.instanceConnectionState.get('instanceProvisioning')
      ) {
        const search = window.location.search
        let instanceId

        if (search != null) {
          const parsed = url.parse(window.location.href)
          const query = querystring.parse(parsed.query)
          instanceId = query.instanceId
        }

        props.provisionInstanceServer(currentLocation.id, instanceId || undefined, sceneId)
      }

      if (sceneId === null) sceneId = currentLocation.sceneId
    } else {
      if (
        !props.locationState.get('currentLocationUpdateNeeded') &&
        !props.locationState.get('fetchingCurrentLocation')
      ) {
        setIsValidLocation(false)
        props.setAppSpecificOnBoardingStep(GeneralStateList.FAILED, false)
      }
    }
  }, [props.locationState])

  useEffect(() => {
    if (
      props.instanceConnectionState.get('instanceProvisioned') &&
      props.instanceConnectionState.get('updateNeeded') &&
      !props.instanceConnectionState.get('instanceServerConnecting') &&
      !props.instanceConnectionState.get('connected')
    ) {
      reinit()
    }
  }, [props.instanceConnectionState])

  // TODO: Is this still is use
  // useEffect(() => {
  //   if (
  //     appLoaded &&
  //     !props.instanceConnectionState.get('instanceProvisioned') &&
  //     !props.instanceConnectionState.get('instanceProvisioning')
  //   ) {
  //     if (!instanceId) return

  //     client
  //       .service('instance')
  //       .get(instanceId)
  //       .then((instance) => {
  //         const currentLocation = props.locationState.get('currentLocation').get('location')
  //         props.provisionInstanceServer(instance.locationId, instanceId, currentLocation.sceneId)
  //         if (sceneId === null) {
  //           console.log('Set scene ID to', sceneId)
  //           sceneId = currentLocation.sceneId
  //         }
  //       })
  //       .catch((err) => console.log('instance get error', err))
  //   }
  // }, [appState])

  const checkForBan = (): void => {
    const selfUser = props.authState.get('user')
    const currentLocation = props.locationState.get('currentLocation').get('location')

    const isUserBanned = selfUser?.locationBans?.find((ban) => ban.locationId === currentLocation.id) != null
    setUserBanned(isUserBanned)
  }

  const reinit = () => {
    const currentLocation = props.locationState.get('currentLocation').get('location')
    if (sceneId === null && currentLocation.sceneId !== null) {
      sceneId = currentLocation.sceneId
    }
    init(sceneId)
  }

  const init = async (sceneId: string): Promise<any> => {
    initEngine(
      sceneId,
      props.engineInitializeOptions,
      async () => {
        setProgressEntity(0)
        props.setAppLoaded(true)
      },
      onSceneLoadedEntity,
      newSpawnPos
    )

    addUIEvents()

    setIsTeleporting(false)
  }

  const onSceneLoadedEntity = (left: number): void => {
    setProgressEntity(left || 0)
  }

  const portToLocation = async ({ portalComponent }: { portalComponent: PortalComponent }) => {
    const slugifiedName = props.locationState.get('currentLocation').get('location').slugifiedName

    teleportToLocation(portalComponent, slugifiedName, () => {
      setIsTeleporting(true)

      // change our browser URL
      props.history.replace('/location/' + portalComponent.location)
      setNewSpawnPos(portalComponent)
    })
  }

  const addUIEvents = () => {
    EngineEvents.instance.addEventListener(EngineEvents.EVENTS.PORTAL_REDIRECT_EVENT, portToLocation)
    EngineEvents.instance.addEventListener(EngineEvents.EVENTS.XR_START, async () => {
      setIsInXR(true)
    })
    EngineEvents.instance.addEventListener(EngineEvents.EVENTS.XR_END, async () => {
      setIsInXR(false)
    })
  }

  if (isUserBanned) return <div className="banned">You have been banned from this location</div>

  if (isInXR) return <></>

  return (
    <>
      {isValidLocation ? (
        <UserMenu />
      ) : (
        <Snackbar
          open
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <>
            <section>Location is invalid</section>
            <Button onClick={goHome}>Return Home</Button>
          </>
        </Snackbar>
      )}

      <NetworkDebug reinit={reinit} />

      <LoadingScreen objectsToLoad={progressEntity} />

      {!props.harmonyOpen && <MediaIconsBox />}

      <InteractableModal />

      <RecordingApp />

      <canvas id={props.engineInitializeOptions.renderer.canvasId} style={canvasStyle} />

      {isTouchAvailable ? (
        <Suspense fallback={<></>}>
          <TouchGamepad layout="default" />
        </Suspense>
      ) : null}

      <GameServerWarnings
        isTeleporting={isTeleporting}
        locationName={props.locationName}
        instanceId={selfUser?.instanceId ?? party?.instanceId}
      />

      <EmoteMenu />
    </>
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps)(EnginePage)

export default connector
