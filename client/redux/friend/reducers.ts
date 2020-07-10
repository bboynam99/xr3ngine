import Immutable from 'immutable'
import {
  FriendAction,
  LoadedFriendsAction
} from './actions'

import {
  CHANGED_RELATION,
  LOADED_FRIENDS,
  REMOVED_FRIEND,
} from '../actions'
import { RelationshipSeed } from '../../../shared/interfaces/Relationship'

export const initialState = {
  relationship: RelationshipSeed,
  friends: [],
  updateNeeded: true
}

const immutableState = Immutable.fromJS(initialState)

const friendReducer = (state = immutableState, action: FriendAction): any => {
  switch (action.type) {
    case LOADED_FRIENDS:
      return state
        .set('friends', (action as LoadedFriendsAction).friends)
        .set('updateNeeded', false)
    case REMOVED_FRIEND:
      return state
          .set('updateNeeded', true)
  }

  return state
}

export default friendReducer
