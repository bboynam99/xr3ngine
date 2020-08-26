import { Behavior } from "../../../common/interfaces/Behavior";
import { getMutableComponent } from "../../../ecs/functions/EntityFunctions";
import { ActorComponent } from "../components/ActorComponent";
import { feetRaycast } from "./feetRaycast";

export const physicsPreStep: Behavior = (entity): void => {
	const actor: ActorComponent = getMutableComponent<ActorComponent>(entity, ActorComponent as any);
	let body = actor.actorCapsule.body;

	feetRaycast(entity);

	// Raycast debug
	if (actor.rayHasHit) {
		if (actor.raycastBox.visible) {
			actor.raycastBox.position.x = actor.rayResult.hitPointWorld.x;
			actor.raycastBox.position.y = actor.rayResult.hitPointWorld.y;
			actor.raycastBox.position.z = actor.rayResult.hitPointWorld.z;
		}
	}
	else {
		if (actor.raycastBox.visible) {
			actor.raycastBox.position.set(body.position.x, body.position.y - actor.rayCastLength - actor.raySafeOffset, body.position.z);
		}
	}
};
