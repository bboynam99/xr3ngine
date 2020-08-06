import { Entity } from "ecsy"
import Behavior from "../../interfaces/Behavior"
import { Vector2, Vector4, NumericalType, Vector3 } from "../../types/NumericalTypes"
import Actor from "../components/Actor"
import TransformComponent from "../../../transform/components/TransformComponent"
import { quat, vec3 } from "gl-matrix"
import { InputType } from "../../../input/enums/InputType"
import Input from "../../../input/components/Input"
import InputAlias from "../../../input/types/InputAlias"
import State from "../../../state/components/State"

let actor: Actor
let transform: TransformComponent
let inputValue: Vector2 | Vector3
let startValue: Vector2
const q: Vector4 = [0, 0, 0, 0]
const qOut: Vector4 = [0, 0, 0, 0]
let inputComponent: Input
let mouseDownPosition
let originalRotation
export const rotateAround: Behavior = (
  entity: Entity,
  args: { input: InputAlias; inputType: InputType; value: NumericalType },
  delta: number
): void => {
  inputComponent = entity.getComponent(Input)
  actor = entity.getComponent(Actor) as Actor
  transform = entity.getMutableComponent(TransformComponent)

  mouseDownPosition = inputComponent.data.get(inputComponent.schema.mouseInputMap.axes["mouseClickDownPosition"])
  originalRotation = inputComponent.data.get(inputComponent.schema.mouseInputMap.axes["mouseClickDownTransformRotation"])

  if (mouseDownPosition == undefined || originalRotation == undefined) return console.log("returning because mouse down pos is undefined")

  if (!inputComponent.data.has(args.input)) {
    inputComponent.data.set(args.input, { type: args.inputType, value: vec3.create() })
  }

  quat.set(qOut, originalRotation.value[0], originalRotation.value[1], originalRotation.value[2], originalRotation.value[3])
  if (args.inputType === InputType.TWOD) {
    if (inputComponent.data.has(args.input)) {
      inputValue = inputComponent.data.get(args.input).value as Vector2
      startValue = mouseDownPosition.value as Vector2
      quat.rotateY(qOut, qOut, (inputValue[0] - startValue[0]) * Math.PI)
      quat.rotateX(qOut, qOut, -(inputValue[1] - startValue[1]) * Math.PI)
    }
  } else if (args.inputType === InputType.THREED) {
    inputValue = inputComponent.data.get(args.input).value as Vector3
    quat.fromEuler(
      q,
      inputValue[0] * actor.rotationSpeedY * delta,
      inputValue[1] * actor.rotationSpeedX * delta,
      inputValue[2] * actor.rotationSpeedZ * delta
    )
  } else {
    console.error("Rotation is only available for 2D and 3D inputs")
  }

  transform.rotation = [qOut[0], qOut[1], qOut[2], qOut[3]]
}
