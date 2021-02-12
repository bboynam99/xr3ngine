import { Vector3 } from 'three';
import { isClient } from "../../common/functions/isClient";
import { DomEventBehaviorValue } from "../../common/interfaces/DomEventBehaviorValue";
import { NumericalType } from "../../common/types/NumericalTypes";
import { Engine } from "../../ecs/classes/Engine";
import { Entity } from "../../ecs/classes/Entity";
import { System } from '../../ecs/classes/System';
import { Not } from "../../ecs/functions/ComponentFunctions";
import { getComponent, hasComponent } from '../../ecs/functions/EntityFunctions';
import { SystemUpdateType } from "../../ecs/functions/SystemUpdateType";
import { Network } from "../../networking/classes/Network";
import { Vault } from '../../networking/classes/Vault';
import { NetworkObject } from "../../networking/components/NetworkObject";
import { NetworkClientInputInterface } from "../../networking/interfaces/WorldState";
import { ClientInputModel } from '../../networking/schema/clientInputSchema';
import { MediaStreamSystem } from '../../networking/systems/MediaStreamSystem';
import { CharacterComponent } from "../../templates/character/components/CharacterComponent";
import { cleanupInput } from '../behaviors/cleanupInput';
import { handleGamepads } from "../behaviors/GamepadInputBehaviors";
import { handleInputOnLocalClient } from '../behaviors/handleInputOnLocalClient';
import { handleInputPurge } from "../behaviors/handleInputPurge";
import { startFaceTracking, stopFaceTracking } from "../behaviors/WebcamInputBehaviors";
//import { initializeSession, processSession } from '../behaviors/WebXRInputBehaviors';
import { addPhysics, removeWebXRPhysics, updateWebXRPhysics } from '../behaviors/WebXRControllersBehaviors';
import { Input } from '../components/Input';
import { LocalInputReceiver } from "../components/LocalInputReceiver";
import { XRControllersComponent } from '../components/XRControllersComponent';
import { InputType } from "../enums/InputType";
import { InputValue } from "../interfaces/InputValue";
import { InputAlias } from "../types/InputAlias";
/**
 * Input System
 *
 * Property with prefix readonly makes a property as read-only in the class
 * @property {Number} mainControllerId set value 0
 * @property {Number} secondControllerId set value 1
 * @property {} boundListeners set of values without keys
 */

function supportsPassive(): boolean {
  let supportsPassiveValue = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassiveValue = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (error) { }
  return supportsPassiveValue;
}

interface ListenerBindingData {
  domElement: any;
  eventName: string;
  listener: Function;
}

export class InputSystem extends System {
  updateType = SystemUpdateType.Fixed;
  needSend = false;
  switchId = 1;
  // Temp/ref variables
  private _inputComponent: Input;
  private localUserMediaStream: MediaStream = null;
  private useWebXR = false;
  // Client only variables
  public mainControllerId; //= 0
  public secondControllerId; //= 1
  private readonly boundListeners; //= new Set()
  private entityListeners: Map<Entity, Array<ListenerBindingData>>;

  constructor({ useWebXR }) {
    super();
    this.useWebXR = useWebXR;
    // Client only
    if (isClient) {
      this.mainControllerId = 0;
      this.secondControllerId = 1;
      this.boundListeners = new Set();
      this.entityListeners = new Map();
    }
  }

  dispose(): void {
    // disposeVR();
  }

  /**
   *
   * @param {Number} delta Time since last frame
   */

  public execute(delta: number): void {
    if (this.useWebXR) {
      // Handle XR input
      this.queryResults.controllersComponent.added?.forEach(entity => addPhysics(entity));
      this.queryResults.controllersComponent.all?.forEach(entity => {
        const xRControllers = getComponent(entity, XRControllersComponent);
        if (xRControllers.physicsBody1 !== null && xRControllers.physicsBody2 !== null && this.mainControllerId) {
          this.mainControllerId = xRControllers.physicsBody1;
          this.secondControllerId = xRControllers.physicsBody2;
        }
        updateWebXRPhysics(entity);
      });
      this.queryResults.controllersComponent.removed?.forEach(entity => removeWebXRPhysics(entity, {
        controllerPhysicalBody1: this.mainControllerId,
        controllerPhysicalBody2: this.secondControllerId
      }));
    }
    // Apply input for local user input onto client
    this.queryResults.localClientInput.all?.forEach(entity => {
      // Apply input to local client
      handleGamepads(entity);

      // apply face tracking
      if (this.localUserMediaStream === null) {
        // check to start video tracking
        if (MediaStreamSystem.mediaStream && MediaStreamSystem.faceTracking) {
          console.log('start facetracking');
          startFaceTracking(entity);
          this.localUserMediaStream = MediaStreamSystem.mediaStream;
        }
      } else {
        // check if we need to change face tracking video src
        if (MediaStreamSystem.mediaStream) {
          if (this.localUserMediaStream !== MediaStreamSystem.mediaStream) {
            // stream is changed
            // TODO: do update video src ...
            console.log('change facetracking src');
          }
        } else {
          //... user media stream is null - stop facetracking?
          console.log('stop facetracking');
          stopFaceTracking();
        }
        this.localUserMediaStream = MediaStreamSystem.mediaStream;
      }

      // startFaceTracking(entity);
      // startLipsyncTracking(entity);

      handleInputOnLocalClient(entity, { isLocal: true, isServer: false }, delta);
      // Client sends input and *only* input to the server (for now)
      // console.log("Handling input for entity ", entity.id);
      const input = getComponent(entity, Input);

      let sendSwitchInputs = false;

      if (!hasComponent(Network.instance.networkObjects[Network.instance.userNetworkId].component.entity, LocalInputReceiver) && !this.needSend) {
        this.needSend = true;
        sendSwitchInputs = true;
        this.switchId = getComponent(entity, NetworkObject).networkId;
        //console.warn('Car id: '+ getComponent(entity, NetworkObject).networkId);
      } else if(hasComponent(Network.instance.networkObjects[Network.instance.userNetworkId].component.entity, LocalInputReceiver) && this.needSend) {
        this.needSend = false;
        sendSwitchInputs = true;
      //  console.warn('Network.instance.userNetworkId: '+ Network.instance.userNetworkId);
      }


    //  sendSwitchInputs ? console.warn('switchInputs'):'';
      //cleanupInput(entity);
      // If input is the same as last frame, return
      // if (_.isEqual(input.data, input.lastData))
      //   return;

      // Repopulate lastData
      input.lastData.clear();
      input.data.forEach((value, key) => input.lastData.set(key, value));

      // Create a schema for input to send
      const inputs: NetworkClientInputInterface = {
        networkId: Network.instance.userNetworkId,
        buttons: [],
        axes1d: [],
        axes2d: [],
        viewVector: {
          x: 0, y: 0, z: 0
        },
        snapShotTime: Vault.instance?.get().time - Network.instance.timeSnaphotCorrection ?? 0,
        switchInputs: sendSwitchInputs ? this.switchId : 0
      };

      //console.warn(inputs.snapShotTime);
      // Add all values in input component to schema
      input.data.forEach((value, key) => {
        if (value.type === InputType.BUTTON)
          inputs.buttons.push({ input: key, value: value.value, lifecycleState: value.lifecycleState  });
        else if (value.type === InputType.ONEDIM) // && value.lifecycleState !== LifecycleValue.UNCHANGED
          inputs.axes1d.push({ input: key, value: value.value, lifecycleState: value.lifecycleState  });
        else if (value.type === InputType.TWODIM) //  && value.lifecycleState !== LifecycleValue.UNCHANGED
          inputs.axes2d.push({ input: key, value: value.value, lifecycleState: value.lifecycleState  }); // : LifecycleValue.ENDED
      });


      const actor = getComponent<CharacterComponent>(entity, CharacterComponent);
      if (actor) {
        inputs.viewVector.x = actor.viewVector.x;
        inputs.viewVector.y = actor.viewVector.y;
        inputs.viewVector.z = actor.viewVector.z;
      }

      try{
        Network.instance.transport.sendData(ClientInputModel.toBuffer(inputs));
      } catch (error){
        console.warn("Couldn't send data, error")
        console.warn(error)
      }

      cleanupInput(entity);
    });

    // Called when input component is added to entity
    this.queryResults.localClientInput.added?.forEach(entity => {
      // Get component reference
      this._inputComponent = getComponent(entity, Input);
      if (this._inputComponent === undefined)
        return console.warn("Tried to execute on a newly added input component, but it was undefined");
      // Call all behaviors in "onAdded" of input map
      this._inputComponent.schema.onAdded.forEach(behavior => {
        behavior.behavior(entity, { ...behavior.args });
      });
      // Bind DOM events to event behavior
      const listenersDataArray: ListenerBindingData[] = [];
      this.entityListeners.set(entity, listenersDataArray);
      Object.keys(this._inputComponent.schema.eventBindings)?.forEach((eventName: string) => {
        this._inputComponent.schema.eventBindings[eventName].forEach((behaviorEntry: DomEventBehaviorValue) => {
          // const domParentElement:EventTarget = document;
          let domParentElement: EventTarget = Engine.viewportElement ?? document;
          if (behaviorEntry.element) {
            switch (behaviorEntry.element) {
              case "window":
                domParentElement = window;
                break;
              case "document":
                domParentElement = document;
                break;
              case "viewport":
              default:
                domParentElement = Engine.viewportElement;
            }
          }

          const domElement = (behaviorEntry.selector && domParentElement instanceof Element) ? domParentElement.querySelector(behaviorEntry.selector) : domParentElement;
          //console.log('InputSystem addEventListener:', eventName, domElement, ' (', behaviorEntry.element, behaviorEntry.selector, ')');

          if (domElement) {
            const listener = (event: Event) => behaviorEntry.behavior(entity, { event, ...behaviorEntry.args });
            if (behaviorEntry.passive && supportsPassive()) {
              domElement.addEventListener(eventName, listener, { passive: behaviorEntry.passive });
            } else {
              domElement.addEventListener(eventName, listener);
            }

            listenersDataArray.push({
              domElement,
              eventName,
              listener
            });
            return [domElement, eventName, listener];
          } else {
            console.warn('DOM Element not found:', domElement);
            return false;
          }
        });
      });
    });

    // Called when input component is removed from entity
    this.queryResults.localClientInput.removed.forEach(entity => {
      // Get component reference
      this._inputComponent = getComponent(entity, Input);
      if (this._inputComponent === undefined)
        return console.warn("Tried to execute on a newly added input component, but it was undefined");
      if (this._inputComponent.data.size) {
        this._inputComponent.data.forEach((value: InputValue<NumericalType>, key: InputAlias) => {
          handleInputPurge(entity);
        });
      }

      // Call all behaviors in "onRemoved" of input map
      this._inputComponent.schema.onRemoved.forEach(behavior => {
        behavior.behavior(entity, behavior.args);
      });
      // Unbind events from DOM
      this.entityListeners.get(entity).forEach(listenerData => listenerData.domElement?.removeEventListener(listenerData.eventName, listenerData.listener));

      const bound = this.boundListeners[entity.id];
      if (bound) {
        for (const [selector, eventName, listener] of bound) {
          const domElement = selector ? document.querySelector(selector) : document;
          domElement?.removeEventListener(eventName, listener);
        }
        delete this.boundListeners[entity.id];
      }

      this.entityListeners.delete(entity);
    });


    // Called when input component is added to entity
    this.queryResults.networkClientInput.added?.forEach(entity => {
      // Get component reference
      this._inputComponent = getComponent(entity, Input);

      if (this._inputComponent === undefined)
        return console.warn("Tried to execute on a newly added input component, but it was undefined");
      // Call all behaviors in "onAdded" of input map
      this._inputComponent.schema.onAdded?.forEach(behavior => {
        console.log("Added behaviors");
        console.log(behavior.behavior);
        behavior.behavior(entity, { ...behavior.args });
      });
    });


    // Called when input component is removed from entity
    this.queryResults.networkClientInput.removed?.forEach(entity => {
      // Get component reference
      this._inputComponent = getComponent(entity, Input);

      // Call all behaviors in "onRemoved" of input map
      this._inputComponent?.schema?.onRemoved?.forEach(behavior => {
        behavior.behavior(entity, behavior.args);
      });
    });
  }
}

/**
 * Queries must have components attribute which defines the list of components
 */
InputSystem.queries = {
  networkClientInput: {
    components: [NetworkObject, Input, Not(LocalInputReceiver)],
    listen: {
      added: true,
      removed: true
    }
  },
  localClientInput: {
    components: [Input, LocalInputReceiver],
    listen: {
      added: true,
      removed: true
    }
  },
  controllersComponent: { components: [XRControllersComponent], listen: { added: true, removed: true } }
};
