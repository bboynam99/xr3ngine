import {
  ADDED_PARTY,
  LOADED_PARTY,
  REMOVED_PARTY,
  LEFT_PARTY,
  INVITED_PARTY_USER,
  REMOVED_PARTY_USER,
  LOADED_PARTY_USERS,
  LOADED_SELF_PARTY_USER
} from '../actions'
import { Party } from '../../../shared/interfaces/Party'
import { PartyUser } from '../../../shared/interfaces/PartyUser'
import { PartyResult } from '../../../shared/interfaces/PartyResult'
import { PartyUserResult } from '../../../shared/interfaces/PartyUserResult'

export interface LoadedPartyAction {
  type: string
  party: Party
}

export interface AddedPartyAction {
  type: string
}

export interface RemovedPartyAction {
  type: string
}

export interface RemovedPartyUserAction {
  type: string
}

export interface InvitedPartyUserAction {
  type: string
}

export interface LeftPartyAction {
  type: string
}

export type PartyAction =
    LoadedPartyAction
    | AddedPartyAction
    | RemovedPartyAction
    | LeftPartyAction
    | LeftPartyAction

export function loadedParty(partyResult: PartyResult): PartyAction {
  return {
    type: LOADED_PARTY,
    party: partyResult
  }
}

export function addedParty(): AddedPartyAction {
  return {
    type: ADDED_PARTY
  }
}

export function removedParty(): RemovedPartyAction {
  return {
    type: REMOVED_PARTY
  }
}

export function invitedPartyUser(): InvitedPartyUserAction {
  return {
    type: INVITED_PARTY_USER
  }
}

export function leftParty(): LeftPartyAction {
  return {
    type: LEFT_PARTY
  }
}

export interface LoadedSelfPartyUserAction {
  type: string
  selfPartyUser: PartyUser,
  total: number
}

export interface LoadedPartyUsersAction {
  type: string
  partyUsers: PartyUser[],
  total: number,
  limit: number
  skip: number
}

export interface RemovedPartyUserAction {
  type: string
}

export type PartyUserAction =
    LoadedPartyUsersAction
    | RemovedPartyUserAction
    | LoadedSelfPartyUserAction

export function loadedPartyUsers(partyUserResult: PartyUserResult): PartyUserAction {
  return {
    type: LOADED_PARTY_USERS,
    partyUsers: partyUserResult.data,
    total: partyUserResult.total,
    limit: partyUserResult.limit,
    skip: partyUserResult.skip
  }
}

export function loadedSelfPartyUser(partyUserResult: PartyUserResult): PartyUserAction {
  return {
    type: LOADED_SELF_PARTY_USER,
    selfPartyUser: partyUserResult.data[0],
    total: partyUserResult.total
  }
}

export function removedPartyUser(): RemovedPartyUserAction {
  return {
    type: REMOVED_PARTY_USER
  }
}
