import { System, Entity, World } from "ecsy";
import MessageSchema from "../classes/MessageSchema";
import MessageTypeAlias from "../types/MessageTypeAlias";
import NetworkTransportComponent from "../components/NetworkTransportComponent";
export declare class NetworkSystem extends System {
    static instance: NetworkSystem;
    networkTransport: NetworkTransportComponent;
    clients: string[];
    mySocketID: any;
    _schemas: Map<MessageTypeAlias, MessageSchema<any>>;
    _isInitialized: boolean;
    _sessionEntity: Entity;
    _schema: MessageSchema<any>;
    protected _buffer: ArrayBuffer;
    protected _dataView: DataView;
    protected _bytes: number;
    constructor(world: World);
    static queries: any;
    setLocalConnectionId(_id: any): void;
    initializeClient(myClientId: any, allClientIds: any): void;
    addClient(_id: any): void;
    getClosestPeers(): any[];
    onConnected(): void;
    removeClient(_id: any): void;
    execute(delta: number): void;
    addMessageSchema<StructType>(messageType: MessageTypeAlias, messageData: StructType): MessageSchema<any>;
    getLocalConnectionId(): any;
    initializeSession(world: World, transport?: any): void;
    deinitializeSession(): void;
    toBuffer(input: MessageSchema<any>): ArrayBuffer;
    fromBuffer(buffer: ArrayBuffer): any;
    flattenSchema(schema: MessageSchema<any>, data: any): any[];
}
