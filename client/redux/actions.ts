// Auth Actions
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'
export const LOADED_USER_DATA = 'LOADED_USER_DATA'

export const ACTION_PROCESSING = 'ACTION_PROCESSING'

export const LOGIN_USER_BY_GITHUB_SUCCESS = 'LOGIN_USER_BY_GITHUB_SUCCESS'
export const LOGIN_USER_BY_GITHUB_ERROR = 'LOGIN_USER_BY_GITHUB_ERROR'

export const LOGIN_USER_BY_FACEBOOK_SUCCESS = 'LOGIN_USER_BY_FACEBOOK_SUCCESS'
export const LOGIN_USER_BY_FACEBOOK_ERROR = 'LOGIN_USER_BY_FACEBOOK_ERROR'

export const LOGIN_USER_BY_GOOGLE_SUCCESS = 'LOGIN_USER_BY_GOOGLE_SUCCESS'
export const LOGIN_USER_BY_GOOGLE_ERROR = 'LOGIN_USER_BY_GOOGLE_ERROR'

export const REGISTER_USER_BY_EMAIL_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_BY_EMAIL_ERROR = 'REGISTER_USER_ERROR'

export const LOGOUT_USER = 'LOGOUT_USER'

export const DID_VERIFY_EMAIL = 'DID_VERIFY_EMAIL'
export const DID_RESEND_VERIFICATION_EMAIL = 'DID_RESEND_VERIFICATION_EMAIL'
export const DID_FORGOT_PASSWORD = 'DID_FORGOT_PASSWORD'
export const DID_RESET_PASSWORD = 'DID_RESET_PASSWORD'

export const VIDEOS_FETCHED_SUCCESS = 'VIDEOS_FETCHED_SUCCESS'
export const VIDEOS_FETCHED_ERROR = 'VIDEOS_FETCHED_ERROR'

export const SCENES_FETCHED_SUCCESS = 'SCENES_FETCHED_SUCCESS'
export const SCENES_FETCHED_ERROR = 'SCENES_FETCHED_ERROR'

export const DID_CREATE_MAGICLINK = 'DID_CREATE_MAGICLINK'

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'

export const RESTORE = 'RESTORE'

export const SHOW_DIALOG = 'SHOW_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'

export const AVATAR_UPDATED = 'AVATAR_UPDATED'
export const AVATAR_UPDATE_FAILURE = 'AVATAR_UPDATE_FAILURE'

export const USERNAME_UPDATED = 'USERNAME_UPDATED'

export const UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS'

export const UPDATE_USER_SETTINGS_FALURE = 'UPDATE_USER_SETTINGS_FALURE'

export const DETECT_DEVICE_TYPE = 'DETECT_DEVICE_TYPE'
// app

export const SET_APP_LOADED = 'SET_APP_LOADED'

export const LOADED_RELATIONSHIP = 'LOADED_RELATIONSHIP'
export const LOADED_USERS = 'LOADED_USERS'
export const CHANGED_RELATION = 'CHANGED_RELATION'

export const LOADED_SEATS = 'LOADED_SEATS'
export const INVITED_USER = 'INVITED_USER'
export const CANCELED_INVITATION = 'CANCELED_INVITATION'
export const REMOVED_SEAT = 'REMOVED_SEAT'

export const SET_APP_LOADING_PERCENT = 'SET_APP_LOADING_PERCENT'

export const SET_VIEWPORT_SIZE = 'SET_VIEWPORT_SIZE'

export const SET_IN_VR_MODE = 'SET_IN_VR_MODE'

// video controls

export const SET_VIDEO_PLAYING = 'SET_VIDEO_PLAYING'

export type Action = {
  type: string,
  [key: string]: any
}

// admin console

export const VIDEO_CREATED = 'VIDEO_CREATED'
export const VIDEO_UPDATED = 'VIDEO_UPDATED'
export const VIDEO_DELETED = 'VIDEO_DELETED'

export const LOADED_FRIENDS = 'LOADED_FRIENDS'
export const REMOVED_FRIEND = 'REMOVED_FRIEND'

export const INVITE_SENT = 'INVITE_SENT'
export const SENT_INVITES_RETRIEVED = 'SENT_INVITES_RETRIEVED'
export const RECEIVED_INVITES_RETRIEVED = 'RECEIVED_INVITES_RECEIVED'
export const REMOVED_INVITE = 'REMOVED_INVITE'
export const ACCEPTED_INVITE = 'ACCEPTED_INVITE'
export const DECLINED_INVITE = 'DECLINED_INVITE'

export const LOADED_GROUPS = 'LOADED_GROUPS'
export const ADDED_GROUP = 'ADDED_GROUP'
export const PATCHED_GROUP = 'PATCHED_GROUP'
export const REMOVED_GROUP = 'REMOVED_GROUP'
export const INVITED_GROUP_USER = 'INVITED_GROUP_USER'
export const REMOVED_GROUP_USER = 'REMOVED_GROUP_USER'
export const LEFT_GROUP = 'LEFT_GROUP'