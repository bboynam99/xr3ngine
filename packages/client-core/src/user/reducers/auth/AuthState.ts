import { createState, useState, none, Downgraded } from '@hookstate/core'
import { AuthActionType } from './AuthAction'
import { getStoredAuthState } from '../../../persisted.store'
import { UserSeed } from '@xrengine/common/src/interfaces/User'
import { IdentityProviderSeed } from '@xrengine/common/src/interfaces/IdentityProvider'
import { AuthUserSeed } from '@xrengine/common/src/interfaces/AuthUser'
import { UserAvatar } from '@xrengine/common/src/interfaces/UserAvatar'
const state = createState({
  isLoggedIn: false,
  isProcessing: false,
  error: '',
  authUser: AuthUserSeed,
  user: UserSeed,
  identityProvider: IdentityProviderSeed,
  avatarList: [] as Array<UserAvatar>
})

export const authReducer = (_, action: AuthActionType) => {
  Promise.resolve().then(() => authReceptor(action))
  return state.attach(Downgraded).value
}

export const authReceptor = (action: AuthActionType): void => {
  state.batch((s) => {
    switch (action.type) {
      case 'ACTION_PROCESSING':
        return s.merge({ isProcessing: action.processing, error: '' })
      case 'LOGIN_USER_SUCCESS':
        return s.merge({ isLoggedIn: true, authUser: action.authUser })
      case 'LOGIN_USER_ERROR':
        return s.merge({ error: action.message })
      case 'LOGIN_USER_BY_GITHUB_SUCCESS':
        return state
      case 'LOGIN_USER_BY_GITHUB_ERROR':
        return s.merge({ error: action.message })
      case 'LOGIN_USER_BY_LINKEDIN_SUCCESS':
        return state
      case 'LOGIN_USER_BY_LINKEDIN_ERROR':
        return s.merge({ error: action.message })
      case 'REGISTER_USER_BY_EMAIL_SUCCESS':
        return s.merge({ identityProvider: action.identityProvider })
      case 'REGISTER_USER_BY_EMAIL_ERROR':
        return state
      case 'LOGOUT_USER':
        return s.merge({ isLoggedIn: false, user: undefined, authUser: undefined })
      case 'DID_VERIFY_EMAIL':
        return s.identityProvider.merge({ isVerified: action.result })

      case 'LOADED_USER_DATA':
        return s.merge({ user: action.user })
      case 'RESTORE': {
        const stored = getStoredAuthState()
        if (stored) {
          return s.merge({
            isLoggedIn: stored.isLoggedIn,
            authUser: stored.authUser,
            identityProvider: stored.identityProvider
          })
        }
        return state
      }
      case 'AVATAR_UPDATED': {
        return s.user.merge({ avatarUrl: action.url })
      }
      case 'USERNAME_UPDATED': {
        return s.user.merge({ name: action.name })
      }
      case 'USERAVATARID_UPDATED': {
        return s.user.merge({ avatarId: action.avatarId })
      }
      case 'USER_UPDATED': {
        return s.merge({ user: action.user })
      }
      case 'UPDATE_USER_SETTINGS': {
        return s.user.merge({ user_setting: action.data })
      }
      case 'AVATAR_FETCHED': {
        const resources = action.avatarList
        const avatarData = {}
        for (let resource of resources) {
          const r = avatarData[(resource as any).name] || {}
          if (!r) {
            console.warn('Avatar resource is empty, have you synced avatars to your static file storage?')
            return
          }
          r[(resource as any).staticResourceType] = resource
          avatarData[(resource as any).name] = r
        }
        
        return s.merge({ avatarList: Object.keys(avatarData).map((key) => avatarData[key]) })
      }
    }
  }, action.type)
}

export const accessAuthState = () => state
export const useAuthState = () => useState(state)
