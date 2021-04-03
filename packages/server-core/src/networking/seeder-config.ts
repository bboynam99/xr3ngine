import ChannelTypeSeed from './channel-type/channel-type.seed';
import LocationTypeSeed from './location-type/location-type.seed';
import LocationSeed from './location/location.seed';

type SeedCallback = (ServicesSeedConfig) => Promise<any>;
type ServicesSeedCallback = (obj: any, seed: SeedCallback) => Promise<any>;

interface ServicesSeedConfig {
    count?: number;
    disabled: boolean;
    delete: boolean;
    path: string;
    randomize?: boolean;
    templates?: any[];
    callback?: ServicesSeedCallback;
}

export const services: Array<ServicesSeedConfig> = [
    ChannelTypeSeed,
    LocationTypeSeed,
    LocationSeed
  ];

export default services;
