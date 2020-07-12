import { Component } from "ecsy"

export interface PropTypes<TDataType extends string | number | symbol, TBehaviorMap, TValue> {
  behaviorMap: TBehaviorMap
  data: BehaviorMapType<TDataType, TValue>
}

export default class BehaviorComponent<TDataType extends string | number | symbol, TBehaviorMap, TValue> extends Component<
  PropTypes<TDataType, TBehaviorMap, TValue>
> {
  behaviorMap: TBehaviorMap
  data: BehaviorMapType<TDataType, TValue> = new Map<TDataType, TValue>()
  constructor(props: PropTypes<TDataType, TBehaviorMap, TValue>) {
    super(false)
    if (props.behaviorMap) this.behaviorMap = props.behaviorMap // TODO: ? DefaultBehaviorMap
    this.data = new Map<TDataType, TValue>()
  }
  copy(src: this): this {
    this.behaviorMap = src.behaviorMap
    this.data = new Map(src.data)
    return this
  }
  reset(): void {
    this.data.clear()
  }
}
