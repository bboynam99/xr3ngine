/**
 * @author Gleb Ordinsky <glebordinskijj@gmail.com>
 */

import { Dispatch } from 'redux'
import { AlertService } from '@xrengine/client-core/src/common/reducers/alert/AlertService'
import { client } from '@xrengine/client-core/src/feathers'
import { upload } from '@xrengine/engine/src/scene/functions/upload'
import { addTheFeeds, fetchingTheFeeds, thefeedsRetrieved, deleteTheFeeds, updateTheFeedsInList } from './actions'

export function getTheFeedsNew() {
  return async (dispatch: Dispatch): Promise<any> => {
    try {
      dispatch(fetchingTheFeeds())
      const thefeeds = await client.service('thefeeds').find()
      dispatch(thefeedsRetrieved(thefeeds.data))
    } catch (err) {
      console.log(err)
      AlertService.dispatchAlertError(dispatch, err.message)
    }
  }
}

export function createTheFeedsNew(data) {
  return async (dispatch: Dispatch): Promise<any> => {
    try {
      const storedVideo = await upload(data.video, null)
      console.log('storedVideo', storedVideo)
      const thefeeds = await client.service('thefeeds').create({
        title: data.title,
        videoId: (storedVideo as any).file_id,
        description: data.description
      })
      dispatch(addTheFeeds(thefeeds))
    } catch (err) {
      console.log(err)
      AlertService.dispatchAlertError(dispatch, err.message)
    }
  }
}

export function updateTheFeedsAsAdmin(data: any) {
  return async (dispatch: Dispatch): Promise<any> => {
    try {
      let thefeeds = { id: data.id, title: data.title, videoId: data.video, description: data.description }
      if (typeof data.video === 'object') {
        const storedVideo = await upload(data.video, null)
        thefeeds['videoId'] = (storedVideo as any).file_id
      }
      const updatedItem = await client.service('thefeeds').patch(thefeeds.id, thefeeds)
      dispatch(updateTheFeedsInList(updatedItem))
    } catch (err) {
      console.log(err)
      AlertService.dispatchAlertError(dispatch, err.message)
    }
  }
}

export function removeTheFeeds(thefeedsId: string) {
  return async (dispatch: Dispatch): Promise<any> => {
    try {
      await client.service('thefeeds').remove(thefeedsId)
      dispatch(deleteTheFeeds(thefeedsId))
    } catch (err) {
      console.log(err)
      AlertService.dispatchAlertError(dispatch, err.message)
    }
  }
}
