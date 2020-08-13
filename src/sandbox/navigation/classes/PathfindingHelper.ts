import {
  Color,
  Object3D,
  LineBasicMaterial,
  MeshBasicMaterial,
  SphereBufferGeometry,
  BoxGeometry,
  Mesh,
  SphereGeometry,
  Geometry,
  Vector3,
  Line
} from "three"

const colors = {
  PLAYER: new Color(0xee836f).convertGammaToLinear(2.2).getHex(),
  TARGET: new Color(0xdccb18).convertGammaToLinear(2.2).getHex(),
  PATH: new Color(0x00a3af).convertGammaToLinear(2.2).getHex(),
  WAYPOINT: new Color(0x00a3af).convertGammaToLinear(2.2).getHex(),
  CLAMPED_STEP: new Color(0xdcd3b2).convertGammaToLinear(2.2).getHex(),
  CLOSEST_NODE: new Color(0x43676b).convertGammaToLinear(2.2).getHex()
}

const OFFSET = 0.2

/**
 * Helper for debugging pathfinding behavior.
 */
class PathfindingHelper extends Object3D {
  _playerMarker: Mesh<SphereGeometry, MeshBasicMaterial>
  _targetMarker: Mesh<BoxGeometry, MeshBasicMaterial>
  _nodeMarker: Mesh<BoxGeometry, MeshBasicMaterial>
  _stepMarker: Mesh<BoxGeometry, MeshBasicMaterial>
  _pathMarker: Object3D
  _pathLineMaterial: LineBasicMaterial
  _pathPointMaterial: MeshBasicMaterial
  _pathPointGeometry: SphereBufferGeometry
  _markers: any[]
  constructor() {
    super()

    this._playerMarker = new Mesh(new SphereGeometry(0.25, 32, 32), new MeshBasicMaterial({ color: colors.PLAYER }))

    this._targetMarker = new Mesh(new BoxGeometry(0.3, 0.3, 0.3), new MeshBasicMaterial({ color: colors.TARGET }))

    this._nodeMarker = new Mesh(new BoxGeometry(0.1, 0.8, 0.1), new MeshBasicMaterial({ color: colors.CLOSEST_NODE }))

    this._stepMarker = new Mesh(new BoxGeometry(0.1, 1, 0.1), new MeshBasicMaterial({ color: colors.CLAMPED_STEP }))

    this._pathMarker = new Object3D()

    this._pathLineMaterial = new LineBasicMaterial({ color: colors.PATH, linewidth: 2 })
    this._pathPointMaterial = new MeshBasicMaterial({ color: colors.WAYPOINT })
    this._pathPointGeometry = new SphereBufferGeometry(0.08)

    this._markers = [this._playerMarker, this._targetMarker, this._nodeMarker, this._stepMarker, this._pathMarker]

    this._markers.forEach(marker => {
      marker.visible = false

      this.add(marker)
    })
  }

  /**
   * @param {Array<Vector3>} path
   * @return {this}
   */
  setPath(path) {
    while (this._pathMarker.children.length) {
      this._pathMarker.children[0].visible = false
      this._pathMarker.remove(this._pathMarker.children[0])
    }

    path = [this._playerMarker.position].concat(path)

    // Draw debug lines
    const geometry = new Geometry()
    for (let i = 0; i < path.length; i++) {
      geometry.vertices.push(path[i].clone().add(new Vector3(0, OFFSET, 0)))
    }
    this._pathMarker.add(new Line(geometry, this._pathLineMaterial))

    for (let i = 0; i < path.length - 1; i++) {
      const node = new Mesh(this._pathPointGeometry, this._pathPointMaterial)
      node.position.copy(path[i])
      node.position.y += OFFSET
      this._pathMarker.add(node)
    }

    this._pathMarker.visible = true

    return this
  }

  /**
   * @param {Vector3} position
   * @return {this}
   */
  setPlayerPosition(position) {
    this._playerMarker.position.copy(position)
    this._playerMarker.visible = true
    return this
  }

  /**
   * @param {Vector3} position
   * @return {this}
   */
  setTargetPosition(position) {
    this._targetMarker.position.copy(position)
    this._targetMarker.visible = true
    return this
  }

  /**
   * @param {Vector3} position
   * @return {this}
   */
  setNodePosition(position) {
    this._nodeMarker.position.copy(position)
    this._nodeMarker.visible = true
    return this
  }

  /**
   * @param {Vector3} position
   * @return {this}
   */
  setStepPosition(position) {
    this._stepMarker.position.copy(position)
    this._stepMarker.visible = true
    return this
  }

  /**
   * Hides all markers.
   * @return {this}
   */
  reset() {
    while (this._pathMarker.children.length) {
      this._pathMarker.children[0].visible = false
      this._pathMarker.remove(this._pathMarker.children[0])
    }

    this._markers.forEach(marker => {
      marker.visible = false
    })

    return this
  }
}

export { PathfindingHelper }
