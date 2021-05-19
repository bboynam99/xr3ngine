import { Behavior } from "../../common/interfaces/Behavior";
import { addComponent, getMutableComponent } from "../../ecs/functions/EntityFunctions";
import { Game } from "../../game/components/Game";
import { GameObject } from "../../game/components/GameObject";
import { TransformComponent } from '../../transform/components/TransformComponent';

export const createGame: Behavior = (entity, args: any) => {
  const transform = getMutableComponent(entity, TransformComponent);

  transform.scale.set(
    Math.abs(transform.scale.x) / 2,
    Math.abs(transform.scale.y) / 2,
    Math.abs(transform.scale.z) / 2
  );

  const p = transform.position;
  const s = transform.scale;
  const min = { x: (-s.x) + p.x, y: (-s.y) + p.y, z: (-s.z) + p.z };
  const max = { x: s.x + p.x, y: s.y + p.y, z: s.z + p.z };

  const gameData = {
    name: args.name,
    isGlobal: args.isGlobal,
    minPlayers: args.minPlayers,
    maxPlayers: args.maxPlayers,
    gameMode: args.gameMode,
    gameArea: { min, max }
  };

  addComponent(entity, Game, gameData);
};

export const createGameObject: Behavior = (entity, args: any) => {
  if (args.objArgs.uuid === undefined) {
    console.warn("DONT SAVE COLLIDER FOR GAME OBJECT");
  }

  // if (isServer && !args.isGlobal) {
  //   removeEntity(entity);
  //   return;
  // }

  addComponent(entity, GameObject, {
    game: args.objArgs.gameName,
    role: args.objArgs.role,
    uuid: args.objArgs.sceneEntityId
  });
};
