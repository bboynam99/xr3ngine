// Default component, holds data about what behaviors our character has.
import { Component, Types } from "ecsy"

interface JumpPropTypes {
  canJump: boolean
  t?: number
  force?: number
  duration?: number
}

const DefaultJumpData = {
  canJump: true,
  t: 0,
  force: 0.025,
  duration: 0.5
}

interface PropTypes {
  rotationSpeedX: number
  rotationSpeedY: number
  maxSpeed: number
  accelerationSpeed: number
  decelerationSpeed: number
  jumpData: JumpPropTypes
}

export default class Actor extends Component<PropTypes> {
  rotationSpeedX: number
  rotationSpeedY: number
  maxSpeed = 0.01
  accelerationSpeed = 0.01
  decelerationSpeed = 10
  rotationSpeedZ: number
  jump: JumpPropTypes = DefaultJumpData

  copy(src: this): this {
    this.rotationSpeedX = src.rotationSpeedX
    this.rotationSpeedY = src.rotationSpeedY
    this.maxSpeed = src.maxSpeed
    this.accelerationSpeed = src.accelerationSpeed
    this.decelerationSpeed = src.decelerationSpeed
    this.jump = src.jump
    return this
  }
  reset(): void {
    this.rotationSpeedX = 1
    this.rotationSpeedY = 1
    this.maxSpeed = 0.01
    this.accelerationSpeed = 0.01
    this.decelerationSpeed = 8
    this.jump = DefaultJumpData
  }
}

Actor.schema = {
  rotationSpeedX: { type: Types.Number, default: 1 },
  rotationSpeedY: { type: Types.Number, default: 1 },
  maxSpeed: { type: Types.Number, default: 0.01 },
  accelerationSpeed: { type: Types.Number, default: 0.01 },
  decelerationSpeed: { type: Types.Number, default: 8 },
  jump: { type: Types.Ref, default: DefaultJumpData }
}
