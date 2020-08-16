import Immutable from 'immutable'
import {
  VideoCreatedAction
} from './actions'

import {
  VIDEO_CREATED
} from '../actions'
import { UserSeed } from '@xr3ngine/common'
import { IdentityProviderSeed } from '@xr3ngine/common'
import { AuthUserSeed } from '@xr3ngine/common'

export const initialState = {
  isLoggedIn: false,
  isProcessing: false,
  error: '',
  authUser: AuthUserSeed,
  user: UserSeed,
  identityProvider: IdentityProviderSeed
}

const immutableState = Immutable.fromJS(initialState)

const authReducer = (state = immutableState, action: any): any => {
  switch (action.type) {
    case VIDEO_CREATED:
      return state
        .set('data', (action as VideoCreatedAction).data)
  }

  return state
}

export default authReducer
