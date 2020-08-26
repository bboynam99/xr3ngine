import { Behavior } from "../../../common/interfaces/Behavior";
import { ActorComponent } from "../components/ActorComponent";
import { getMutableComponent, hasComponent } from "../../../ecs/functions/EntityFunctions";
import { Entity } from "../../../ecs/classes/Entity";
import { EnteringVehicle } from "../components/EnteringVehicle";
import { setOrientation } from "./setOrientation";
import { getCameraRelativeMovementVector } from "../functions/getCameraRelativeMovementVector";

export const setCameraRelativeOrientationTarget: Behavior = (entity: Entity): void => {
	const actor: ActorComponent = getMutableComponent<ActorComponent>(entity, ActorComponent as any);

	if (!hasComponent(entity, EnteringVehicle)) {
		let moveVector = getCameraRelativeMovementVector(entity);

		if (moveVector.x === 0 && moveVector.y === 0 && moveVector.z === 0) {
			setOrientation(entity, { vector: actor.orientation });
		}
		else {
			setOrientation(entity, { vector: moveVector });
		}
	}
};
