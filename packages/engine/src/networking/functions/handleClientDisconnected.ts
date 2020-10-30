import { Network } from '../components/Network';
import { Entity } from '../../ecs/classes/Entity';
import { removeEntity } from '../../ecs/functions/EntityFunctions';
import { MessageTypes } from '../enums/MessageTypes';
// TODO: This should only be called on server

export const handleClientDisconnected = (args: { id: any }) => {
  if (!Network.instance?.transport.isServer)
    return;

  if(args.id === undefined)
    return console.log("Client disconnected is null");

  if (!Network.instance.clients[args.id])
    console.warn('Client is not in client list');

  // Find all network objects that the disconnecting client owns and remove them
  const networkObjectsClientOwns = [];

  // Loop through network objects in world
  for (const obj in Network.instance.networkObjects)
    // If this client owns the object, add it to our array
    if (Network.instance.networkObjects[obj].ownerId === args.id)
      networkObjectsClientOwns.push(Network.instance.networkObjects[obj]);

  // Remove all objects for disconnecting user
  networkObjectsClientOwns.forEach(obj => {
    // Get the entity attached to the NetworkObjectComponent and remove it
    console.log("Removed entity ", (obj.component.entity as Entity).id, " for user ", args.id);
    if(Network.instance.worldState.inputs[obj.networkId]) delete Network.instance.worldState.inputs[obj.networkId];

    const removeMessage = { networkId: obj.networkId };
    Network.instance.worldState.destroyObjects.push(removeMessage);
    removeEntity(obj.component.entity);
  });

    // Call each behavior in the network template
    Network.instance.schema.messageHandlers[MessageTypes.ClientDisconnected].forEach(behavior => {
      behavior.behavior(
        // Client ID
        args.id,
        // isLocalClient
        args.id === Network.instance.userId
      );
    });

  if (Network.instance.clients[args.id])
  delete Network.instance.clients[args.id];
};
