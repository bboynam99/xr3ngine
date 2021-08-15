import React, { useState } from 'react'
import World, { EngineCallbacks } from '../../components/World'
import Layout from '../../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
import LoadingScreen from '@xrengine/client-core/src/common/components/Loader'
import UserMenu from '@xrengine/client-core/src/user/components/UserMenu'
import MediaIconsBox from '../../components/MediaIconsBox'
import { InitializeOptions } from '@xrengine/engine/src/initializationOptions'
import { SystemUpdateType } from '@xrengine/engine/src/ecs/functions/SystemUpdateType'
import { GolfSystem } from './GolfSystem'
import { EquippableSystem } from '@xrengine/engine/src/interaction/systems/EquippableSystem'

const LocationPage = (props) => {
  const [loadingItemCount, setLoadingItemCount] = useState(99)
  const { t } = useTranslation()

  const onSceneLoadProgress = (loadingItemCount: number): void => {
    setLoadingItemCount(loadingItemCount || 0)
  }

  const engineCallbacks: EngineCallbacks = {
    onSceneLoadProgress,
    onSceneLoaded: () => setLoadingItemCount(0),
    onSuccess: () => {}
  }

  const engineInitializeOptions: InitializeOptions = {
    systems: [
      {
        type: SystemUpdateType.Fixed,
        system: GolfSystem,
        after: EquippableSystem
      }
    ]
  }

  return (
    <Layout pageTitle={t('location.locationName.pageTitle')}>
      <LoadingScreen objectsToLoad={loadingItemCount} />
      <World
        allowDebug={true}
        locationName={props.match.params.locationName}
        history={props.history}
        engineCallbacks={engineCallbacks}
        engineInitializeOptions={engineInitializeOptions}
      >
        <UserMenu />
        <MediaIconsBox />
      </World>
    </Layout>
  )
}

export default LocationPage
