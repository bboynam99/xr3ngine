

export interface ClientGameActionMessage {
  type: string
  game: string
  ownerId: string
}

export interface StorageElement {
  component: string
  variables: string
}

export interface GameState {
  uuid: string
  role: string
  components: string[]
  storage: StorageElement[]
}

export interface GameStateActionMessage {
  game: string
  role: string
  component: string
  uuid: string
}

export interface GameStateUpdateMessage {
  game: string
  ownerId: string
  state: GameState[]
}
