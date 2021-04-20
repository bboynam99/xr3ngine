import { GameStateAction } from "./GameStateAction";
export interface GameMode {
  name: string,
  actions: {
    [key: string]: GameStateAction;
  },
  serverActions: {
    [key: string]: GameStateAction;
  },
  allowedPlayerActions: any[]
  allowedHostActions: any[],
  gameObjectRoles: {
    [key: string]: {
      [key: string]: Array<{
        behavior: any;
        args?: any;
      }>;
    };
  }
}
