import { isServer } from "../../../common/functions/isServer";
import { Entity } from "../../../ecs/classes/Entity";
import { addComponent, getComponent, getMutableComponent, hasComponent, removeComponent } from "../../../ecs/functions/EntityFunctions";
import { LocalInputReceiver } from "../../../input/components/LocalInputReceiver";
import { Network } from "../../../networking/classes/Network";
import { NetworkObject } from "../../../networking/components/NetworkObject";
import { VehicleComponent } from "../components/VehicleComponent";

export const onRemovedFromCar = (entity: Entity, entityCar: Entity, seat: number, delta: number): void => {
  // Server and others
  const vehicle = getMutableComponent<VehicleComponent>(entityCar, VehicleComponent);

  let networkDriverId = null
  if(hasComponent(entity, NetworkObject)) {
    networkDriverId = getComponent<NetworkObject>(entity, NetworkObject).networkId;
  } else {
    for (let i = 0; i < vehicle.seatPlane.length; i++) {
      if (vehicle[vehicle.seatPlane[i]] != null && !Network.instance.networkObjects[vehicle[vehicle.seatPlane[i]]]) {
        networkDriverId = vehicle[vehicle.seatPlane[i]];
        seat = i;
      }
    }
  }

  vehicle[vehicle.seatPlane[seat]] = null;
  vehicle.wantsExit = [null, null];

  if (isServer) return;
  // LocalPlayer and others
  //removeComponent(entity, EnteringVehicle);
  
  // Player only
  if (Network.instance.localAvatarNetworkId != networkDriverId) return;
  removeComponent(entityCar, LocalInputReceiver);
  //removeComponent(entityCar, FollowCameraComponent);

  addComponent(entity, LocalInputReceiver);
//  addComponent(entity, FollowCameraComponent, { distance: 3, mode: CameraModes.ThirdPerson });
};
